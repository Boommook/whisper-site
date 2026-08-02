# Roster maintenance guide

The public roster is stored locally, type-checked, validated during builds, and rendered without a database or CMS. No current player records have been approved or added yet.

## Files

- `src/types/roster.ts` defines the public schema.
- `src/data/roster.ts` stores current-season metadata, player records, and leadership assignments.
- `src/lib/validate-roster.ts` rejects likely data mistakes.
- `src/components/roster/` renders the data.
- `src/app/roster/page.tsx` assembles the public page.

## Public fields and approval

Every field identifies a student or describes their participation. Obtain player/team approval before publishing it, including optional fields.

| Field | Purpose | Publication requirement |
|---|---|---|
| `id` | Stable lowercase kebab-case record key | Internal identifier; avoid student IDs or sensitive identifiers |
| `displayName` | Publicly displayed player name | Confirm spelling, preference, and consent |
| `classYear` | Optional graduation/class year | Confirm accuracy and consent; omit until known |
| `status` | Controls current-roster inclusion | Use `active` for the current public roster; `inactive` records are not rendered |
| `jerseyNumber` | Optional public uniform number | Confirm assignment and uniqueness among active players |
| `fieldRole` | Optional ultimate role | Confirm team terminology and player assignment |
| `pronouns` | Optional public pronouns | Publish only when supplied and approved by the player |
| `hometown` | Optional broad hometown | Publish only with consent; never use an exact residence |
| `major` | Optional academic major | Confirm accuracy and consent |
| `biography` | Optional short public biography | Obtain approval for the final wording |
| `portrait` | Optional approved player image metadata | Confirm image rights, player consent, crop, credit, and alt text |
| `socialLink` | Optional explicitly approved public link | Must be HTTPS and carry `publicationApproved: true` |

Never add personal email addresses, phone numbers, student IDs, exact residences, private social accounts, medical information, internal eligibility data, private notes, or unapproved biographies or photographs. Internal consent records belong in an access-controlled team process, not in client-visible website data.

## Add or edit a player

Edit `currentRoster` in `src/data/roster.ts`. This fictional snippet demonstrates the shape only; do not copy it into production data or treat it as a real person:

```ts
{
  id: "sample-player",
  displayName: "Sample Player",
  classYear: 2030,
  status: "active",
  jerseyNumber: 0,
  fieldRole: "[Approved team role]",
} satisfies PublicPlayer
```

Use a stable `id`; changing it also requires updating any leadership assignment that references it. To remove someone from the public current roster, remove the record or set `status` to `inactive` according to the team's archive policy.

## Assign leadership

Add an entry to `publicLeadership` that references an existing player's `id`:

```ts
{
  playerId: "sample-player",
  role: "Captain",
  sortOrder: 1,
} satisfies LeadershipAssignment
```

Do not add an assignment until the role, person, and permission to publish are confirmed. The validator rejects references to nonexistent players and duplicate player/role combinations. The leadership section is omitted when this array is empty.

## Add a portrait safely

1. Confirm player consent, photographer rights, permitted crops/edits, and any credit requirement outside the public repository.
2. Add an optimized WebP or AVIF under `public/images/players/<season>/` using the conventions in `ASSET_INVENTORY.md`.
3. Add `portrait` metadata with the `/images/players/...` path, intrinsic pixel dimensions, context-aware alt text, and optional photographer credit.
4. Verify the crop at mobile and desktop sizes. Internal consent or review notes must not be added to rendered data.

When `portrait` is absent, the card uses decorative initials. Screen readers receive the player's visible name from the card heading and do not announce the fallback.

## Season and empty-state behavior

Update `currentSeason` only after the public season label is confirmed. While `currentRoster` is empty, `/roster` displays a deliberate publication-pending message and useful links rather than example players. Leadership is also hidden when no approved assignments exist.

## Validation

Run:

```bash
npm run lint
npm run typecheck
npm run build
```

Validation detects duplicate IDs, duplicate jersey numbers among active players, malformed IDs, empty text fields, supplied class years outside the deliberately broad 2020–2040 range, invalid jersey numbers, incomplete/unsafe portrait metadata, insecure social links, duplicate leadership assignments, and leadership references to missing or inactive players. Revisit the class-year bounds as the site ages. Errors identify the affected record and field.
