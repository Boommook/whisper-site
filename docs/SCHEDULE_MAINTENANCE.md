# Schedule and results maintenance

This guide covers the public schedule and result data shown at `/schedule`. Publish only information confirmed by an authoritative team or event source and approved for the public website.

## Files and architecture

- `src/types/schedule.ts` defines the season, event, game, status, and outcome types.
- `src/data/schedule.ts` is the only production schedule dataset maintainers normally edit.
- `src/lib/validate-schedule.ts` rejects malformed or internally inconsistent records during the production build.
- `src/lib/schedule-date.ts` formats date-only values without timezone shifting and formats approved event times.
- `src/lib/schedule.ts` derives outcomes and sorts upcoming and completed events.
- `src/components/schedule/` contains the responsive presentation components.
- `src/app/schedule/page.tsx` validates, separates, and assembles the page.

The page supports tournament-level events with no games, tournament events with multiple games, and standalone games or scrimmages. Do not force unreported game details into an event record.

## Publication status

The season uses one of two publication states:

- `awaiting-approval`: no event records may be present; the public page shows its intentional empty state.
- `published`: the season has been approved for public display; the event array may contain approved records.

Use a generic label such as `Current season` until a specific season label is confirmed. If season dates are supplied, both `startDate` and `endDate` are required.

## Event and game statuses

Event statuses have these meanings:

- `tentative`: announced, but important details are not final.
- `scheduled`: confirmed and expected to proceed.
- `in-progress`: underway; useful when a multi-game tournament has a mix of completed and scheduled games.
- `completed`: concluded. Individual completed games require verified scores.
- `cancelled`: will not take place.
- `postponed`: will not take place as originally scheduled; update the date only after a replacement is confirmed.

Game statuses are `scheduled`, `completed`, and `cancelled`. A completed event may contain only completed or cancelled games. A scheduled, tentative, postponed, or cancelled event cannot contain completed games. An in-progress event may mix terminal and scheduled games.

## Adding an event

The following is a fictional schema example only. It must not be copied into the production export as team data.

```ts
{
  id: "example-spring-invitational",
  name: "Example Spring Invitational",
  type: "tournament",
  status: "scheduled",
  startDate: "2030-04-06",
  endDate: "2030-04-07",
  locationName: "Example Athletic Complex",
  location: "Example City, MA",
  externalUrl: "https://example.com/event",
}
```

Use a stable lowercase kebab-case ID. Event types are `tournament`, `game`, `scrimmage`, and `other`. Omit optional fields when they are unknown; do not render filler such as “TBD” in a field unless that wording was specifically approved.

## Adding tournament games and results

Add games to an event's `games` array. Game IDs need to be unique within that event.

```ts
games: [
  {
    id: "example-pool-round-one",
    opponent: "Example University",
    round: "Pool play",
    status: "completed",
    date: "2030-04-06",
    whisperScore: 13,
    opponentScore: 10,
  },
]
```

This is fictional documentation data. Before recording a real result, verify the opponent spelling and both scores against an authoritative result or a designated team owner. Set the game to `completed` and provide both non-negative integer scores in the same change. Do not store `win`, `loss`, `tie`, or the season record: the interface derives outcomes and the aggregate record from game scores. Equal scores render as a tie.

A completed tournament without approved game-level results may omit `games`; the public card then states only that the event is complete. It does not imply a record.

## Dates, times, and timezones

- Dates use exact `YYYY-MM-DD` calendar values, such as `2030-04-06`.
- Date-only values are parsed and rendered in UTC so the displayed day cannot shift with the server timezone.
- An event end date cannot precede its start date.
- A game date, when supplied, must fall within its event's date range.
- Times use 24-hour `HH:mm`, such as `09:30`.
- Every displayed time requires an IANA timezone, such as `America/New_York`; a timezone without a time is also invalid.
- Times render with their timezone identifier to avoid ambiguity.

If a postponed event has no confirmed replacement date, retain the last verified public event date and mark it `postponed`; do not guess a new date. Use the public description only for verified clarification.

## Sorting

Upcoming, tentative, in-progress, cancelled, and postponed events appear in ascending date order. Completed events appear newest first. `sortOrder` is an optional integer override; lower values appear first and should be used sparingly for an approved editorial need. Event name breaks remaining ties deterministically.

## Locations, links, and partial details

`locationName` is a venue label. `location` is a broad public location such as a city and region. Either may be supplied independently. Missing optional labels are omitted from the page.

External links must be public HTTPS URLs with no embedded credentials. Link to an official event or organizer page only after checking that it is current, public, descriptive, and appropriate to send visitors to.

For cancellation or postponement updates, change the status promptly and verify any explanatory copy. Text badges communicate every status; color is never the only signal.

## Public and private boundaries

Public records may include approved event names, dates, public times and timezones, broad locations, opponents, scores, round names, field labels, public notes, and official external links.

Never include hotel details, transport assignments, driver information, player availability, private itineraries, private phone numbers, private email addresses, internal costs, registration credentials, medical information, eligibility details, or team-only notes. The officer transition document describes internal planning practices; it is not approval to publish those logistics.

## Verification and validation

Before publishing, identify the authoritative source, the person responsible for updates, and the expected review cadence. Recheck dates, status, venue, opponent spelling, and every score. Record source details in the pull request or another access-controlled team process, not in public data when the source contains private information.

Validation rejects malformed IDs, duplicate event IDs, duplicate game IDs within an event, empty text, invalid calendar dates or times, incomplete season ranges, reversed date ranges, events outside supplied season dates, game dates outside event dates, invalid timezones, unsafe links, invalid sort orders, negative or partial scores, scores on unfinished games, completed games under inconsistent event statuses, and public events in an unapproved season.

## Empty-state behavior

When `scheduleEvents` is empty, `/schedule` presents a deliberate visitor-facing message with links to Join and Roster. It does not expose internal editorial language. When only one group has data, the other section explains that no public upcoming events or completed results are available.

## Before committing

```bash
npm run lint
npm run typecheck
npm run build
```

Preview `/schedule` at phone, tablet, and desktop widths. Check long names, status text, score association, keyboard focus, external links, and the mobile navigation before requesting review.
