# WPI Whisper Website

This repository is intended to become the primary public website for WPI Whisper, Worcester Polytechnic Institute's men's ultimate frisbee club team. It will serve prospective and current students, players, alumni, families, supporters, opponents, and visitors looking for team, roster, schedule, recruitment, media, or contact information.

## Current status

**Milestone 0: project definition and content planning.** No production website has been implemented yet. The repository audit found no existing application, configuration, content, or media assets. This milestone defines scope and identifies the real content and decisions needed before implementation.

## Intended stack

- Next.js (current stable version to be selected during Milestone 1)
- TypeScript
- React
- Tailwind CSS, ShadCN, Lucide React
- GitHub for version control and review
- Vercel for preview and production deployment

The recommended foundation is the Next.js App Router with typed local data for frequently changing structured content. No database, authentication, CMS, or third-party content service is planned for the first release.

## Planned pages

```text
/
├── /about
├── /roster
├── /schedule
├── /join
├── /media
└── /contact
```

## Planning documents

- [Project plan](PROJECT_PLAN.md) — goals, audiences, sitemap, functional requirements, content strategy, launch criteria, open decisions, and milestone sequence
- [Content inventory](CONTENT_INVENTORY.md) — page-by-page launch checklist and verification needs
- [Asset inventory](ASSET_INVENTORY.md) — actual repository asset audit, missing assets, naming/format guidance, and proposed organization

## Local setup

There is no application to install or run during Milestone 0, so there are currently no package-manager, environment-variable, development-server, build, lint, or test commands.

Milestone 1 should initialize the application and update this section with prerequisites, the selected package manager, install/development/build/check commands, environment variables (if any), and the supported Node.js version. On machines that report a Git `safe.directory` ownership warning, trust only this exact repository after verifying its path and ownership according to local Git policy.

## Milestone overview

0. Project definition and content planning (current)
1. Application foundation and global design system
2. Home and About pages
3. Roster and team data
4. Schedule and results
5. Recruitment, media, and contact
6. Accessibility, SEO, testing, and launch
7. Optional future features justified by post-launch needs

Each milestone's objective, dependencies, deliverables, and acceptance criteria are defined in the [project plan](PROJECT_PLAN.md#proposed-milestones).

## Contribution note

Do not invent player details, schedules, scores, contacts, quotations, history, or achievements. Use clearly labeled placeholders only during development, and replace or intentionally omit them before launch. Content and imagery must be verified for accuracy, privacy, ownership, consent, and currency by the appropriate team representative.
