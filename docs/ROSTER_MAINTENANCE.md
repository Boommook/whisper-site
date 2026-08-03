# Roster maintenance guide

The public roster is loaded server-side from the `Roster` tab in a private Google Sheet. Optional portraits are resolved by exact filename from one private Google Drive folder. The browser never receives Google credentials, spreadsheet access, or Drive sharing URLs.

## Architecture

- `src/types/roster.ts` defines the public player, portrait, and leadership types.
- `src/data/roster.ts` retains local current-season metadata only.
- `src/lib/google-auth.ts` creates the server-only service-account authentication client with read-only scopes.
- `src/lib/google-roster.ts` validates headers, parses rows, resolves portraits, and caches roster data for about five minutes.
- `src/lib/google-drive-portraits.ts` lists and validates the portrait folder once per cache period and caches the filename index for about one hour.
- `src/app/api/roster-portraits/[fileId]/route.ts` validates and streams approved Drive images through a same-origin route.
- `src/lib/validate-roster.ts` performs final dataset validation before rendering.
- `src/app/roster/page.tsx` is an async server component that preserves the existing active-player, leadership, sorting, and empty-state behavior.

Google API failures are logged on the server. The public page falls back to the existing empty roster state rather than exposing an error or credentials.

Configuration is optional for builds and public-route availability. With all four variables absent, partially configured, invalid, or temporarily unable to reach Google, `/roster` catches the server-side failure and renders the same visitor-facing empty state. A portrait lookup failure omits only portraits. The portrait route accepts only validated Drive file IDs, rechecks that each file belongs to the configured folder, enforces approved image MIME types and a 10 MB limit, and returns `404` for invalid or inaccessible requests; it is not a general Google Drive proxy.

## Required server environment variables

```text
GOOGLE_SHEETS_CLIENT_EMAIL
GOOGLE_SHEETS_PRIVATE_KEY
GOOGLE_ROSTER_SPREADSHEET_ID
GOOGLE_ROSTER_PORTRAIT_FOLDER_ID
```

Set these locally in `.env.local` and in Vercel project settings. The private key may contain escaped `\n` sequences; the server converts them to real newlines. Never use `NEXT_PUBLIC_` names, commit `.env.local`, commit a service-account JSON export, paste credentials into documentation, or log environment values. Safe placeholders are provided in `.env.example`.

The service account needs Viewer access to the Sheet and the dedicated portrait folder. Do not make either resource public. Only the Sheets read-only and Drive read-only OAuth scopes are used.

## Sheet structure

Use a tab named exactly `Roster`. Row 1 must contain these exact headers in this order; player records begin on row 2.

| Column | Header | Rules |
|---:|---|---|
| A | `id` | Required stable lowercase kebab-case ID; never use a student ID |
| B | `displayName` | Required approved public name |
| C | `status` | Required: `active` or `inactive` |
| D | `jerseyNumber` | Optional integer from 0–99; unique among active players |
| E | `classYear` | Optional integer from 2020–2040 |
| F | `fieldRole` | Optional approved public role |
| G | `pronouns` | Optional; publish only with player approval |
| H | `hometown` | Optional broad location; never an exact residence |
| I | `major` | Optional approved academic major |
| J | `biography` | Optional approved public biography |
| K | `portraitSrc` | Optional exact filename in the configured Drive folder |
| L | `portraitAlt` | Optional approved alt text; defaults to “Portrait of [display name]” |
| M | `portraitWidth` | Optional positive intrinsic pixel width |
| N | `portraitHeight` | Optional positive intrinsic pixel height |
| O | `photographerCredit` | Optional approved credit |
| P | `socialLabel` | Optional; all social fields must pass the rules below |
| Q | `socialHref` | Must begin with `https://` |
| R | `socialPublicationApproved` | Must be `true` to publish the social link |
| S | `leadershipRole` | Optional supported role listed below |
| T | `leadershipSortOrder` | Optional integer; lower values appear first |

Blank optional cells become `undefined` and do not render empty labels. Invalid individual rows are skipped with a server-side warning so one bad row does not hide every valid player. Duplicate IDs and duplicate active jersey numbers cause the later row to be skipped.

Supported leadership roles are `President`, `Vice President`, `Treasurer`, `Secretary`, `Public Relations Chair`, `Social Media Manager`, and `Captain`. Leadership on inactive or skipped players is not published. A social link is created only when its label is nonblank, its URL begins with HTTPS, and approval is exactly `true` (case-insensitive).

## Portrait workflow

1. Obtain player consent, photographer rights, crop approval, alt text, and any required credit.
2. Optimize the image as JPEG, PNG, WebP, or AVIF and keep it at or below 10 MB.
3. Upload it to the one private Drive folder identified by `GOOGLE_ROSTER_PORTRAIT_FOLDER_ID`.
4. Share that folder with the service-account email as Viewer; do not enable public link sharing.
5. Enter the exact filename, including capitalization and extension, in `portraitSrc`.
6. Optionally enter accurate intrinsic pixel dimensions and approved alt text in the adjacent columns. When alt text is blank, the site uses “Portrait of [display name].”

The server lists non-trashed files only within the configured folder, validates MIME type and size, and builds one filename map for the roster request. Filenames must match exactly. If two files have the same filename, that filename is rejected instead of selecting one arbitrarily. Missing, duplicate, unsupported, oversized, or inaccessible portraits are omitted; the player still renders with decorative initials.

The internal portrait route rechecks the file ID, parent folder, trashed state, MIME type, and size before download. It returns `404` for invalid or inaccessible files, adds `nosniff`, and provides browser/CDN cache headers. Never put a public Drive URL in the Sheet.

## Privacy boundaries

Every roster field identifies a student or describes participation. Obtain player/team approval before publishing names, class years, numbers, roles, pronouns, hometowns, majors, biographies, portraits, credits, social links, or leadership assignments.

Never add personal email addresses, phone numbers, student IDs, exact residences, private social accounts, medical information, internal eligibility data, private notes, credentials, consent records, or unapproved biographies or photographs. Keep approval evidence in an access-controlled team process rather than the public Sheet if the Sheet's editors or sharing scope are broader than that process.

## Season and caching behavior

Update `currentSeason` in `src/data/roster.ts` only after its public wording is confirmed. Sheet data is cached for approximately five minutes. The Drive filename index is cached for approximately one hour, and portrait responses have public/CDN cache headers. Allow for those intervals after edits or redeploy when an immediate refresh is required.

When Google data is unavailable or no active records are returned, `/roster` displays the intentional empty state. Leadership is omitted when no valid assignments exist.

## Validation before committing

CI intentionally supplies no Google credentials, so every change continuously verifies the no-secrets build path. Test configured data in a protected local or preview environment; never add service-account values to workflow files.

```bash
npm run lint
npm run typecheck
npm run build
```

Validation covers sheet headers, required row fields, supported statuses and leadership roles, numeric values and ranges, duplicate IDs and active numbers, portrait metadata and safe internal paths, approved HTTPS social links, and leadership references. Preview both a populated roster and the empty fallback without exposing credential values in logs or screenshots.
