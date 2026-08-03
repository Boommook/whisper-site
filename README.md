# WPI Whisper Website

The official public website for WPI Whisper, Worcester Polytechnic Institute's men's ultimate frisbee club team. The site serves prospective and current students, players, alumni, families, supporters, opponents, and visitors looking for reliable team information.

## Current status

**Milestone 6 launch-readiness implementation complete; final Vercel preview and content-owner review remain.**

All planned routes are implemented. Join uses centrally configured Fall 2026 tryout and interest forms plus verified Slack and Instagram routes. Media uses typed, approved local gallery metadata and a limited-media fallback. Contact routes visitors through the same verified configuration, including the executive-board email alias.

Automated lint, typecheck, and production build checks run locally and in GitHub Actions for pull requests and pushes to `main`. The site includes route-specific metadata, canonical URLs, Open Graph and Twitter presentation, JSON-LD, a sitemap, robots directives, a custom 404, and graceful data fallbacks.

Milestone 0 planning remains authoritative:

- [Project plan](PROJECT_PLAN.md)
- [Content inventory](CONTENT_INVENTORY.md)
- [Asset inventory](ASSET_INVENTORY.md)
- [Source documents guide](docs/README.md)

## Technology

- Next.js 16.2.12 using the App Router
- React 19.2
- TypeScript with strict checking
- Tailwind CSS 4
- shadcn/ui conventions and Radix UI primitives where they improve accessibility
- Lucide React icons
- ESLint 9 with Next.js Core Web Vitals and TypeScript rules
- npm and `package-lock.json`
- Vercel-compatible build with server-only Google roster environment variables

## Requirements

- Node.js 20.9 or newer
- npm (included with Node.js)

## Local development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open the local URL printed by Next.js, normally `http://localhost:3000`.

## Validation commands

```bash
npm run lint
npm run typecheck
npm run build
```

Run the production build locally with:

```bash
npm run start
```

## Environment variables

Copy `.env.example` to `.env.local`. Never commit `.env.local` or expose Google credentials through `NEXT_PUBLIC_*` variables.

| Variable | Required | Purpose | Source |
| --- | --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Recommended locally; required for a custom production domain | Absolute canonical origin used by metadata, JSON-LD, sitemap, and robots | Local URL during development; final public HTTPS origin in Vercel |
| `GOOGLE_SHEETS_CLIENT_EMAIL` | Required for live roster data | Server-only Google service-account identity | Google Cloud service account |
| `GOOGLE_SHEETS_PRIVATE_KEY` | Required for live roster data | Server-only Google service-account key | Google Cloud service account; preserve escaped newlines |
| `GOOGLE_ROSTER_SPREADSHEET_ID` | Required for live roster data | Selects the private roster Sheet | Google Sheet URL |
| `GOOGLE_ROSTER_PORTRAIT_FOLDER_ID` | Required for live roster portraits | Selects the private Drive portrait folder | Google Drive folder URL |

If Google variables are absent or the services are unavailable, the public roster renders its intentional empty state rather than crashing. Follow the [roster maintenance guide](docs/ROSTER_MAINTENANCE.md) for service-account and sharing setup.

## Planned routes

```text
/
├── /about
├── /roster
├── /schedule
├── /join
├── /media
└── /contact
```

Home, About, Join, Media, and Contact contain implemented public copy. Roster is data-driven from private Google services with a safe fallback; Schedule publishes the current verified local dataset.

## Project structure

```text
docs/                   # Internal source documents and publication guide
src/
├── app/                # App Router pages, metadata, search files, error states, and global CSS
├── components/
│   ├── layout/         # Shared shell, navigation, page, and section components
│   └── ui/             # Focused reusable UI primitives
├── config/             # Site identity and central navigation configuration
├── data/               # Typed local schedule, roster, and media data
├── lib/                # Shared utilities
└── types/              # Shared TypeScript types
```

## Maintaining navigation

All primary navigation entries live in [`src/config/navigation.ts`](src/config/navigation.ts). The desktop and mobile navigation both render this typed configuration, so add, remove, or rename a route there rather than editing both menus. Each matching route also needs its own App Router page and metadata.

## Maintaining content and media

- Inspect relevant files under [`docs/`](docs/README.md) before drafting team-specific copy. The constitution is authoritative for formal governance; validate changing operational details for freshness; never publish sensitive or internal-only material merely because it exists in the repository.
- Add stable site settings and small shared configuration under `src/config/`.
- Update roster and leadership records through the private Google Sheet and Drive workflow documented in `docs/ROSTER_MAINTENANCE.md`.
- Update schedule season, events, and results in `src/data/schedule.ts`; follow `docs/SCHEDULE_MAINTENANCE.md` and run validation before publishing.
- Update media collection metadata in `src/data/media.ts` and local images in `public/img/`; follow `docs/MEDIA_MAINTENANCE.md` and preserve credits, rights records, and contextual alt text.
- Update recruitment, community, executive-board, and social destinations in `src/config/communications.ts`; follow `docs/COMMUNICATIONS_MAINTENANCE.md`.
- Update homepage copy in `src/app/page.tsx`. Keep approved local imagery under `public/img/` and use lowercase, case-sensitive paths for new files.
- Add page-specific implementation under the matching `src/app/` route and reuse the layout primitives under `src/components/layout/`.
- Add approved assets under `public/` using the folder structure and rights checklist in [ASSET_INVENTORY.md](ASSET_INVENTORY.md).
- Keep player portraits separate from general team and tournament photography.
- Record credits, rights, consent, captions, and context-aware alt text for every published asset.

Home content is maintained in `src/app/page.tsx`, and About content is maintained in `src/app/about/page.tsx`. Shared editorial patterns used by both pages live in `src/components/layout/`, including section headings, link cards, value cards, and callouts. Keep concise page-specific content close to its route until content volume or editing needs justify a separate typed data module.

Roster season metadata remains in `src/data/roster.ts`; player and leadership records are loaded server-side from a private Google Sheet, with optional portraits proxied from a private Google Drive folder. Read the [roster maintenance guide](docs/ROSTER_MAINTENANCE.md) before editing the Sheet or portrait folder. It documents environment setup, exact columns, access boundaries, portrait validation, caching, and fallback behavior.

Schedule season metadata, events, and game results are maintained in `src/data/schedule.ts`; validation lives in `src/lib/validate-schedule.ts`. Read the [schedule maintenance guide](docs/SCHEDULE_MAINTENANCE.md) before changing records. Current results link to USA Ultimate event and match-report sources.

The About and Roster banners and header logo live under `public/img/`. Banner credits identify Luca Makarushka-Napp and link to the supplied photographer site. The repository records the supplied attribution, but team ownership, participant consent, and final publication approval still require confirmation; see [ASSET_INVENTORY.md](ASSET_INVENTORY.md).

## Design-system status

The preliminary system uses a neutral foundation with a restrained deep-red direction, accessible interaction states, system fonts, and the supplied Whisper logo in the header. The mark remains replaceable and is not presented as an official WPI mark; original vector artwork and approval evidence remain outstanding.

Reusable color, radius, width, spacing, focus, and header tokens are defined in `src/app/globals.css`. Shared primitives include the site shell, container, page header, section, theme toggle, and button variants.

## Vercel deployment

Import the GitHub repository into Vercel and use the detected Next.js settings. Configure the four server-only Google variables for environments that should show live roster data. Set `NEXT_PUBLIC_SITE_URL` to the final public HTTPS origin, especially when using a custom domain; Vercel preview deployments otherwise use Vercel's provided deployment URL.

Before promoting a preview, verify every public route, the mobile menu, light and dark themes, the executive-board email action, external form/gallery links, roster fallback or live data, `robots.txt`, `sitemap.xml`, social-share previews, and the custom 404. Run `npm run lint`, `npm run typecheck`, and `npm run build` against the deployment candidate.

## Current limitations and required inputs

The following remain unavailable or unapproved and must not be invented:

- Original vector logo, logo approval evidence, and WPI branding rules
- Current officer/captain names with publication consent
- Verified team history milestones and founding details
- Roster field/portrait consent and update ownership
- Schedule update ownership and historical-retention policy
- Recruitment/contact monitoring owner
- Exact current practice times, dues, and season dates for public display
- General, competition, media, and alumni contact destinations beyond the verified recruitment/community routes
- Confirmed rights/participant consent for current photography, additional media, and a social-sharing image
- Final production domain (configure it through `NEXT_PUBLIC_SITE_URL`)

See [CONTENT_INVENTORY.md](CONTENT_INVENTORY.md) for the complete collection checklist and [PROJECT_PLAN.md](PROJECT_PLAN.md#open-decisions-requiring-team-input) for decisions requiring team input.

## Milestones

0. Project definition and content planning — complete
1. Application foundation and global design system — complete
2. Home and About pages — implemented; content cleanup from `/docs` complete; interactive browser QA performed locally
3. Roster and team data — implemented with optional private Google data and a safe empty fallback
4. Schedule and results — complete with verified 2026 USA Ultimate results
5. Recruitment, media, and contact — complete with safe fallbacks; seasonal ownership and additional media approvals remain open
6. Accessibility, SEO, testing, and launch readiness — implemented; final Vercel preview review remains
7. Optional future features justified by post-launch needs

Do not invent player details, schedules, scores, contacts, quotations, history, or achievements. Development placeholders must remain clearly labeled and must be replaced or intentionally omitted before launch.
