import "server-only";

import { google } from "googleapis";
import { fetch as nodeFetch } from "undici";

const GOOGLE_SCOPES = [
  "https://www.googleapis.com/auth/spreadsheets.readonly",
  "https://www.googleapis.com/auth/drive.readonly",
] as const;

function requireServerEnvironment(name: string) {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required server environment variable: ${name}`);
  return value;
}

function createGoogleAuth() {
  return new google.auth.GoogleAuth({
    credentials: {
      client_email: requireServerEnvironment("GOOGLE_SHEETS_CLIENT_EMAIL"),
      private_key: requireServerEnvironment("GOOGLE_SHEETS_PRIVATE_KEY").replace(
        /\\n/g,
        "\n",
      ),
    },
    scopes: [...GOOGLE_SCOPES],
    clientOptions: {
      transporterOptions: {
        fetchImplementation: nodeFetch as unknown as typeof fetch,
      },
    },
  });
}

export const googleRequestOptions = {
  fetchImplementation: nodeFetch as unknown as typeof fetch,
} as const;

let authClient: ReturnType<typeof createGoogleAuth> | undefined;

export function getGoogleAuth() {
  if (!authClient) {
    authClient = createGoogleAuth();
  }

  return authClient;
}

export function getGoogleRosterSpreadsheetId() {
  return requireServerEnvironment("GOOGLE_ROSTER_SPREADSHEET_ID");
}

export function getGoogleRosterPortraitFolderId() {
  return requireServerEnvironment("GOOGLE_ROSTER_PORTRAIT_FOLDER_ID");
}
