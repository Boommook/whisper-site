import "server-only";

import { google } from "googleapis";

import {
  getGoogleAuth,
  getGoogleRosterPortraitFolderId,
  googleRequestOptions,
} from "@/lib/google-auth";

export const ALLOWED_PORTRAIT_MIME_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/avif",
]);

export const MAX_PORTRAIT_BYTES = 10 * 1024 * 1024;
export const DRIVE_FILE_ID_PATTERN = /^[A-Za-z0-9_-]{10,200}$/;

export type DrivePortraitFile = Readonly<{
  id: string;
  mimeType: string;
  size: number;
}>;

function isValidPortraitFile(file: {
  id?: string | null;
  mimeType?: string | null;
  size?: string | null;
}): file is { id: string; mimeType: string; size: string } {
  if (!file.id || !DRIVE_FILE_ID_PATTERN.test(file.id) || !file.mimeType || !file.size) {
    return false;
  }
  const size = Number(file.size);
  return (
    ALLOWED_PORTRAIT_MIME_TYPES.has(file.mimeType) &&
    Number.isInteger(size) &&
    size > 0 &&
    size <= MAX_PORTRAIT_BYTES
  );
}

const driveListOptions = {
  supportsAllDrives: true,
  includeItemsFromAllDrives: true,
} as const;

async function listPortraitFiles(): Promise<readonly (readonly [string, DrivePortraitFile | null])[]> {
  const folderId = getGoogleRosterPortraitFolderId();
  if (!DRIVE_FILE_ID_PATTERN.test(folderId)) {
    throw new Error("The configured Google Drive portrait folder ID is invalid.");
  }

  const drive = google.drive({ version: "v3", auth: getGoogleAuth() });
  const byFilename = new Map<string, DrivePortraitFile | null>();
  let pageToken: string | undefined;

  do {
    const response = await drive.files.list(
      {
        q: `'${folderId}' in parents and trashed = false`,
        fields: "nextPageToken,files(id,name,mimeType,size)",
        pageSize: 1000,
        pageToken,
        spaces: "drive",
        ...driveListOptions,
      },
      googleRequestOptions,
    );

    for (const file of response.data.files ?? []) {
      const filename = file.name?.trim();
      if (!filename) continue;

      if (byFilename.has(filename)) {
        byFilename.set(filename, null);
        continue;
      }

      byFilename.set(
        filename,
        isValidPortraitFile(file)
          ? { id: file.id, mimeType: file.mimeType, size: Number(file.size) }
          : null,
      );
    }

    pageToken = response.data.nextPageToken ?? undefined;
  } while (pageToken);

  return [...byFilename.entries()];
}

const PORTRAIT_CACHE_MS = 60 * 60 * 1000;
let portraitCache:
  | { entries: readonly (readonly [string, DrivePortraitFile | null])[]; expiresAt: number }
  | undefined;
let portraitRequest:
  | Promise<readonly (readonly [string, DrivePortraitFile | null])[]>
  | undefined;

export async function getRosterPortraitFiles() {
  if (!portraitCache || portraitCache.expiresAt <= Date.now()) {
    portraitRequest ??= listPortraitFiles()
      .then((entries) => {
        portraitCache = { entries, expiresAt: Date.now() + PORTRAIT_CACHE_MS };
        return entries;
      })
      .finally(() => {
        portraitRequest = undefined;
      });
    await portraitRequest;
  }

  return new Map(portraitCache?.entries ?? []);
}

export async function getValidatedDrivePortrait(fileId: string) {
  if (!DRIVE_FILE_ID_PATTERN.test(fileId)) return undefined;

  const folderId = getGoogleRosterPortraitFolderId();
  if (!DRIVE_FILE_ID_PATTERN.test(folderId)) return undefined;

  const drive = google.drive({ version: "v3", auth: getGoogleAuth() });
  const metadata = await drive.files.get(
    {
      fileId,
      fields: "id,mimeType,size,parents,trashed",
      supportsAllDrives: true,
    },
    googleRequestOptions,
  );
  const file = metadata.data;

  if (
    file.trashed ||
    !file.parents?.includes(folderId) ||
    !isValidPortraitFile(file)
  ) {
    return undefined;
  }

  const download = await drive.files.get(
    { fileId, alt: "media", supportsAllDrives: true },
    { ...googleRequestOptions, responseType: "arraybuffer" },
  );

  const source = new Uint8Array(download.data as ArrayBuffer);
  if (source.byteLength === 0 || source.byteLength > MAX_PORTRAIT_BYTES) return undefined;

  return {
    bytes: Uint8Array.from(source),
    mimeType: file.mimeType,
  };
}
