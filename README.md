# WPI Whisper Website

The developing public website for WPI Whisper, Worcester Polytechnic Institute's men's ultimate frisbee club team. The site is intended to serve prospective and current students, players, alumni, families, supporters, opponents, and visitors looking for reliable team information.

## Current status

**Milestone 1 implementation complete; interactive visual QA pending.**

The repository now contains a production-buildable Next.js application with all planned route shells, a responsive shared layout, accessible desktop and mobile navigation, a preliminary design-token system, route metadata, and a custom not-found page. Automated checks and route-level rendering checks pass. A final interactive browser pass at narrow, tablet, and desktop widths is still required before the milestone is formally closed. Pages intentionally contain structural placeholders only. Approved team copy, roster data, schedules, recruitment details, contacts, brand assets, and media remain future work.

Milestone 0 planning remains authoritative:

- [Project plan](PROJECT_PLAN.md)
- [Content inventory](CONTENT_INVENTORY.md)
- [Asset inventory](ASSET_INVENTORY.md)

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

Every route currently has an intentional page header and development notice, not production team content.

## Project structure

```text
src/
├── app/                  # App Router pages, metadata, global CSS, and 404
├── components/
│   ├── layout/           # Shared shell, navigation, page, and section components
│   └── ui/               # Focused reusable UI primitives
├── config/               # Site identity and central navigation configuration
├── data/                 # Future typed team, roster, and schedule data
├── lib/                  # Shared utilities
└── types/                # Shared TypeScript types
```

## Maintaining navigation

All primary navigation entries live in [`src/config/navigation.ts`](src/config/navigation.ts). The desktop and mobile navigation both render this typed configuration, so add, remove, or rename a route there rather than editing both menus. Each matching route also needs its own App Router page and metadata.

## Adding future content and media

- Add stable site settings and small shared configuration under `src/config/`.
- Add structured roster, leadership, schedule/results, contact, and social data under `src/data/` once their schemas and publication rules are approved.
- Add page-specific implementation under the matching `src/app/` route and reuse the layout primitives under `src/components/layout/`.
- Add approved assets under `public/` using the folder structure and rights checklist in [ASSET_INVENTORY.md](ASSET_INVENTORY.md).
- Keep player portraits separate from general team and tournament photography.
- Record credits, rights, consent, captions, and context-aware alt text for every published asset.

## Design-system status

The preliminary system uses a neutral foundation with a restrained deep-red direction, accessible interaction states, system fonts, and a text-only temporary “WPI Whisper” mark. It is intentionally replaceable. It does not claim to reproduce official WPI branding and includes no unofficial WPI or Whisper logo.

Reusable color, radius, width, spacing, focus, and header tokens are defined in `src/app/globals.css`. Shared primitives include the site shell, container, page header, section, placeholder notice, and button variants.

## Current limitations and required inputs

The following remain unavailable or unapproved and must not be invented:

- Official Whisper logo and WPI branding rules
- Final colors and typography
- Approved team description, history, leadership, and voice
- Roster fields, current player data, consent, and update ownership
- Tournament schedule, results, and historical-retention policy
- Recruitment details and intake method
- Public contacts and official social accounts
- Rights-cleared photography/video and social-sharing image
- Production domain and metadata base

See [CONTENT_INVENTORY.md](CONTENT_INVENTORY.md) for the complete collection checklist and [PROJECT_PLAN.md](PROJECT_PLAN.md#open-decisions-requiring-team-input) for decisions requiring team input.

## Milestones

0. Project definition and content planning — complete
1. Application foundation and global design system — implementation complete; interactive visual QA pending
2. Home and About pages
3. Roster and team data
4. Schedule and results
5. Recruitment, media, and contact
6. Accessibility, SEO, testing, and launch
7. Optional future features justified by post-launch needs

Do not invent player details, schedules, scores, contacts, quotations, history, or achievements. Development placeholders must remain clearly labeled and must be replaced or intentionally omitted before launch.
