# WPI Whisper Website

The developing public website for WPI Whisper, Worcester Polytechnic Institute's men's ultimate frisbee club team. The site is intended to serve prospective and current students, players, alumni, families, supporters, opponents, and visitors looking for reliable team information.

## Current status

**Milestone 2 Home and About cleanup complete.**

Home (`/`) and About (`/about`) are implemented as public-facing pages. Copy draws from repository source documents under [`docs/`](docs/README.md), especially the club constitution and club-fair FAQ, rewritten into visitor-facing language. Roster, Schedule, Join, Media, and Contact remain functional structural placeholders for later milestones.

Automated lint, typecheck, and production build pass. Interactive browser QA was run against a local production server at 320, 375, 768, 1024, and 1440px for Home and About, including desktop/mobile navigation, focus outlines, and route checks for all planned pages plus the custom 404.

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
- Vercel-compatible build with no required environment variables

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

No environment variables are required. If a future milestone adds any, document them here and provide a safe `.env.example` without secrets.

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

Home and About contain implemented public copy. Roster, Schedule, Join, Media, and Contact still use intentional placeholder notices until their milestones supply verified content.

## Project structure

```text
docs/                   # Internal source documents and publication guide
src/
├── app/                # App Router pages, metadata, global CSS, and 404
├── components/
│   ├── layout/         # Shared shell, navigation, page, and section components
│   └── ui/             # Focused reusable UI primitives
├── config/             # Site identity and central navigation configuration
├── data/               # Future typed team, roster, and schedule data
├── lib/                # Shared utilities
└── types/              # Shared TypeScript types
```

## Maintaining navigation

All primary navigation entries live in [`src/config/navigation.ts`](src/config/navigation.ts). The desktop and mobile navigation both render this typed configuration, so add, remove, or rename a route there rather than editing both menus. Each matching route also needs its own App Router page and metadata.

## Adding future content and media

- Inspect relevant files under [`docs/`](docs/README.md) before drafting team-specific copy. The constitution is authoritative for formal governance; validate changing operational details for freshness; never publish sensitive or internal-only material merely because it exists in the repository.
- Add stable site settings and small shared configuration under `src/config/`.
- Add structured roster, leadership, schedule/results, contact, and social data under `src/data/` once their schemas and publication rules are approved.
- Add page-specific implementation under the matching `src/app/` route and reuse the layout primitives under `src/components/layout/`.
- Add approved assets under `public/` using the folder structure and rights checklist in [ASSET_INVENTORY.md](ASSET_INVENTORY.md).
- Keep player portraits separate from general team and tournament photography.
- Record credits, rights, consent, captions, and context-aware alt text for every published asset.

Home content is maintained in `src/app/page.tsx`, and About content is maintained in `src/app/about/page.tsx`. Shared editorial patterns used by both pages live in `src/components/layout/`, including section headings, link cards, value cards, and callouts. Keep concise page-specific content close to its route until content volume or editing needs justify a separate typed data module.

No imagery was added in Milestone 2 because no approved team assets are available. When photography is approved, add optimized files beneath `public/images/team/`, record the required rights and alt-text metadata, and preserve the current typography-and-geometry treatment as the no-image fallback.

## Design-system status

The preliminary system uses a neutral foundation with a restrained deep-red direction, accessible interaction states, system fonts, and a text-only temporary “WPI Whisper” mark. It is intentionally replaceable. It does not claim to reproduce official WPI branding and includes no unofficial WPI or Whisper logo.

Reusable color, radius, width, spacing, focus, and header tokens are defined in `src/app/globals.css`. Shared primitives include the site shell, container, page header, section, placeholder notice, and button variants.

## Current limitations and required inputs

The following remain unavailable or unapproved and must not be invented:

- Official Whisper logo and WPI branding rules
- Final colors and typography
- Current officer/captain names with publication consent
- Verified team history milestones and founding details
- Roster fields, current player data, consent, and update ownership
- Tournament schedule, results, and historical-retention policy
- Current recruitment intake method (form, Slack, or email) and monitored owner
- Exact current practice times, dues, and season dates for public display
- Public contacts and official social account URLs
- Rights-cleared photography/video and social-sharing image
- Production domain and metadata base

See [CONTENT_INVENTORY.md](CONTENT_INVENTORY.md) for the complete collection checklist and [PROJECT_PLAN.md](PROJECT_PLAN.md#open-decisions-requiring-team-input) for decisions requiring team input.

## Milestones

0. Project definition and content planning — complete
1. Application foundation and global design system — complete
2. Home and About pages — implemented; content cleanup from `/docs` complete; interactive browser QA performed locally
3. Roster and team data
4. Schedule and results
5. Recruitment, media, and contact
6. Accessibility, SEO, testing, and launch
7. Optional future features justified by post-launch needs

Do not invent player details, schedules, scores, contacts, quotations, history, or achievements. Development placeholders must remain clearly labeled and must be replaced or intentionally omitted before launch.
