import "server-only";

import { google } from "googleapis";

import {
  getRosterPortraitFiles,
  type DrivePortraitFile,
} from "@/lib/google-drive-portraits";
import {
  getGoogleAuth,
  getGoogleRosterSpreadsheetId,
  googleRequestOptions,
} from "@/lib/google-auth";
import type {
  ApprovedSocialLink,
  LeadershipAssignment,
  LeadershipRole,
  PlayerStatus,
  PublicPlayer,
} from "@/types/roster";

const SHEET_HEADERS = [
  "id",
  "displayName",
  "status",
  "jerseyNumber",
  "classYear",
  "fieldRole",
  "pronouns",
  "hometown",
  "major",
  "biography",
  "portraitSrc",
  "portraitAlt",
  "portraitWidth",
  "portraitHeight",
  "photographerCredit",
  "socialLabel",
  "socialHref",
  "socialPublicationApproved",
  "leadershipRole",
  "leadershipSortOrder",
] as const;

const PLAYER_STATUSES = new Set<PlayerStatus>(["active", "inactive"]);
const PLAYER_ID_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const LEADERSHIP_ROLES = new Set<LeadershipRole>([
  "President",
  "Vice President",
  "Treasurer",
  "Secretary",
  "Public Relations Chair",
  "Social Media Manager",
  "Captain",
]);

type ParsedRow = Readonly<{
  player: Omit<PublicPlayer, "portrait">;
  portraitFilename?: string;
  portraitAlt?: string;
  portraitWidth?: number;
  portraitHeight?: number;
  photographerCredit?: string;
  leadershipRole?: LeadershipRole;
  leadershipSortOrder?: number;
}>;

export type GoogleRosterData = Readonly<{
  players: readonly PublicPlayer[];
  leadership: readonly LeadershipAssignment[];
}>;

function optionalText(value: string | undefined) {
  const trimmed = value?.trim();
  return trimmed ? trimmed : undefined;
}

function optionalInteger(value: string | undefined) {
  const text = optionalText(value);
  if (text === undefined) return undefined;
  const parsed = Number(text);
  return Number.isInteger(parsed) ? parsed : undefined;
}

function parseApprovedSocialLink(
  labelValue: string | undefined,
  hrefValue: string | undefined,
  approvedValue: string | undefined,
): ApprovedSocialLink | undefined {
  const label = optionalText(labelValue);
  const href = optionalText(hrefValue);
  const approved = optionalText(approvedValue)?.toLowerCase() === "true";
  if (!label || !href?.startsWith("https://") || !approved) return undefined;
  return { label, href: href as `https://${string}`, publicationApproved: true };
}

function warnAboutRow(rowNumber: number, reason: string) {
  console.warn(`[google roster] Skipping row ${rowNumber}: ${reason}`);
}

function parseRow(values: readonly string[], rowNumber: number): ParsedRow | undefined {
  const id = optionalText(values[0]);
  const displayName = optionalText(values[1]);
  const statusValue = optionalText(values[2]);
  if (!id && !displayName && !statusValue) return undefined;
  if (!id || !displayName || !statusValue || !PLAYER_STATUSES.has(statusValue as PlayerStatus)) {
    warnAboutRow(rowNumber, "id, displayName, or status is missing or invalid");
    return undefined;
  }
  if (!PLAYER_ID_PATTERN.test(id)) {
    warnAboutRow(rowNumber, "id must use lowercase kebab-case letters and numbers");
    return undefined;
  }

  const jerseyText = optionalText(values[3]);
  const classYearText = optionalText(values[4]);
  const jerseyNumber = optionalInteger(jerseyText);
  const classYear = optionalInteger(classYearText);
  if ((jerseyText && jerseyNumber === undefined) || (classYearText && classYear === undefined)) {
    warnAboutRow(rowNumber, "jerseyNumber or classYear is not an integer");
    return undefined;
  }
  if (
    (jerseyNumber !== undefined && (jerseyNumber < 0 || jerseyNumber > 99)) ||
    (classYear !== undefined && (classYear < 2020 || classYear > 2040))
  ) {
    warnAboutRow(rowNumber, "jerseyNumber or classYear is outside the supported range");
    return undefined;
  }

  const leadershipValue = optionalText(values[18]);
  const leadershipRole = LEADERSHIP_ROLES.has(leadershipValue as LeadershipRole)
    ? (leadershipValue as LeadershipRole)
    : undefined;
  if (leadershipValue && !leadershipRole) {
    console.warn(`[google roster] Ignoring unsupported leadership role on row ${rowNumber}.`);
  }

  const portraitWidthText = optionalText(values[12]);
  const portraitHeightText = optionalText(values[13]);
  const parsedPortraitWidth = optionalInteger(portraitWidthText);
  const parsedPortraitHeight = optionalInteger(portraitHeightText);
  const portraitWidth =
    parsedPortraitWidth !== undefined && parsedPortraitWidth > 0
      ? parsedPortraitWidth
      : undefined;
  const portraitHeight =
    parsedPortraitHeight !== undefined && parsedPortraitHeight > 0
      ? parsedPortraitHeight
      : undefined;

  const socialLink = parseApprovedSocialLink(values[15], values[16], values[17]);
  const fieldRole = optionalText(values[5]);
  const pronouns = optionalText(values[6]);
  const hometown = optionalText(values[7]);
  const major = optionalText(values[8]);
  const biography = optionalText(values[9]);
  const player: Omit<PublicPlayer, "portrait"> = {
    id,
    displayName,
    status: statusValue as PlayerStatus,
    ...(jerseyNumber !== undefined ? { jerseyNumber } : {}),
    ...(classYear !== undefined ? { classYear } : {}),
    ...(fieldRole ? { fieldRole } : {}),
    ...(pronouns ? { pronouns } : {}),
    ...(hometown ? { hometown } : {}),
    ...(major ? { major } : {}),
    ...(biography ? { biography } : {}),
    ...(socialLink ? { socialLink } : {}),
  };

  return {
    player,
    portraitFilename: optionalText(values[10]),
    portraitAlt: optionalText(values[11]),
    portraitWidth,
    portraitHeight,
    photographerCredit: optionalText(values[14]),
    leadershipRole: statusValue === "active" ? leadershipRole : undefined,
    leadershipSortOrder: optionalInteger(values[19]),
  };
}

function assertSheetHeaders(values: readonly string[]) {
  const headersMatch = SHEET_HEADERS.every((header, index) => values[index]?.trim() === header);
  if (!headersMatch || values.length < SHEET_HEADERS.length) {
    throw new Error("The Google roster sheet headers do not match the documented schema.");
  }
}

async function loadGoogleRosterUncached(): Promise<GoogleRosterData> {
  const sheets = google.sheets({ version: "v4", auth: getGoogleAuth() });
  const response = await sheets.spreadsheets.values.batchGet(
    {
      spreadsheetId: getGoogleRosterSpreadsheetId(),
      ranges: ["Roster!A1:T1", "Roster!A2:T"],
      majorDimension: "ROWS",
    },
    googleRequestOptions,
  );
  const [headerRange, dataRange] = response.data.valueRanges ?? [];
  assertSheetHeaders(headerRange?.values?.[0] ?? []);

  const parsedRows: ParsedRow[] = [];
  const playerIds = new Set<string>();
  const activeJerseyNumbers = new Set<number>();
  for (const [index, row] of (dataRange?.values ?? []).entries()) {
    const parsed = parseRow(row, index + 2);
    if (!parsed) continue;
    if (playerIds.has(parsed.player.id)) {
      warnAboutRow(index + 2, `duplicate player ID "${parsed.player.id}"`);
      continue;
    }
    if (
      parsed.player.status === "active" &&
      parsed.player.jerseyNumber !== undefined &&
      activeJerseyNumbers.has(parsed.player.jerseyNumber)
    ) {
      warnAboutRow(index + 2, `duplicate active jersey number ${parsed.player.jerseyNumber}`);
      continue;
    }
    playerIds.add(parsed.player.id);
    if (parsed.player.status === "active" && parsed.player.jerseyNumber !== undefined) {
      activeJerseyNumbers.add(parsed.player.jerseyNumber);
    }
    parsedRows.push(parsed);
  }

  const portraits = new Map<string, DrivePortraitFile | null>();
  if (parsedRows.some((row) => row.portraitFilename)) {
    try {
      for (const [filename, file] of await getRosterPortraitFiles()) {
        portraits.set(filename, file);
      }
    } catch (error) {
      console.error(
        "[google roster] Portrait folder lookup failed; rendering players without portraits.",
        error instanceof Error ? error.message : "Unknown server error",
      );
    }
  }
  const players = parsedRows.map((row): PublicPlayer => {
    const driveFile = row.portraitFilename ? portraits.get(row.portraitFilename) : undefined;
    const canUsePortrait = Boolean(driveFile);

    if (row.portraitFilename && !canUsePortrait) {
      const reason =
        driveFile === undefined
          ? `no Drive file named exactly "${row.portraitFilename}"`
          : driveFile === null
            ? `Drive filename "${row.portraitFilename}" is duplicate or unsupported`
            : "portrait file is invalid";
      console.warn(`[google roster] Portrait omitted for "${row.player.id}": ${reason}`);
    }

    return {
      ...row.player,
      ...(canUsePortrait && driveFile
        ? {
            portrait: {
              src: `/api/roster-portraits/${driveFile.id}` as const,
              ...(row.portraitAlt ? { alt: row.portraitAlt } : {}),
              ...(row.portraitWidth !== undefined ? { width: row.portraitWidth } : {}),
              ...(row.portraitHeight !== undefined ? { height: row.portraitHeight } : {}),
              ...(row.photographerCredit
                ? { photographerCredit: row.photographerCredit }
                : {}),
            },
          }
        : {}),
    };
  });

  const validPlayerIds = new Set(players.map((player) => player.id));
  const leadership = parsedRows.flatMap((row): LeadershipAssignment[] =>
    row.leadershipRole && validPlayerIds.has(row.player.id)
      ? [{
          playerId: row.player.id,
          role: row.leadershipRole,
          ...(row.leadershipSortOrder !== undefined
            ? { sortOrder: row.leadershipSortOrder }
            : {}),
        }]
      : [],
  );

  return { players, leadership };
}

const ROSTER_CACHE_MS = 5 * 60 * 1000;
let rosterCache: { data: GoogleRosterData; expiresAt: number } | undefined;
let rosterRequest: Promise<GoogleRosterData> | undefined;

export async function getGoogleRoster(): Promise<GoogleRosterData> {
  if (rosterCache && rosterCache.expiresAt > Date.now()) return rosterCache.data;

  rosterRequest ??= loadGoogleRosterUncached()
    .then((data) => {
      rosterCache = { data, expiresAt: Date.now() + ROSTER_CACHE_MS };
      return data;
    })
    .finally(() => {
      rosterRequest = undefined;
    });

  return rosterRequest;
}
