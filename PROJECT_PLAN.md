# WPI Whisper Website Project Plan

## Project overview

The WPI Whisper website will be the primary public-facing source for Worcester Polytechnic Institute's men's ultimate frisbee club team. It should explain who the team is, help students understand how to join, and provide reliable roster, schedule, results, media, and contact information for players, alumni, families, opponents, and supporters.

The first release should be a fast, accessible, mobile-first informational site. It should feel current and distinctly connected to WPI and ultimate frisbee without presenting a student club as a professional commercial franchise. The planned stack is Next.js, TypeScript, Tailwind CSS, GitHub, and Vercel.

### Current repository state (Milestone 0 audit)

Audit date: July 31, 2026.

- The repository contains only Git metadata and was otherwise empty before these planning documents were added.
- Next.js has not been initialized; consequently, no Next.js version or router is selected. Milestone 1 should use the current stable Next.js release and App Router unless requirements change.
- TypeScript and Tailwind CSS are not configured.
- No pages, components, source content, configuration, images, logos, fonts, videos, or other media are present.
- There is no pre-existing README or content to preserve.
- Local Git status inspection reported a `safe.directory` ownership warning in the sandbox. This does not indicate repository corruption, but the local development environment may need to mark this exact repository as trusted before Git commands work.

## Target audiences

| Audience | Primary needs |
|---|---|
| Current WPI students | How to join, eligibility, commitment, practices, tryouts, culture, and a direct recruitment action |
| Prospective WPI students | A welcoming view of the team, competitive level, student experience, and how to make contact |
| Current players and alumni | Accurate roster, schedule, results, team news/media, and alumni information if included |
| Parents and supporters | Schedule, results, team context, photos, contact details, and ways to support if approved |
| Other college ultimate teams | Current schedule/results and a reliable competitive or tournament contact |
| General visitors | A concise explanation of Whisper, recent activity, media, and verified social links |

## Initial sitemap

```text
/
├── /about
├── /roster
├── /schedule
├── /join
├── /media
└── /contact
```

### `/` — Home

- **Purpose:** Introduce Whisper quickly and route visitors to recruitment, schedule, roster, and team story.
- **Primary audience:** All audiences, especially prospective and current WPI students.
- **Recommended sections:** Hero; short team introduction; next/featured event; recruitment callout; recent media; social links.
- **Required content:** Approved team name and description, strong team image or graphic, current recruitment status, key links.
- **Calls to action:** Join Whisper; view schedule; meet the team.
- **Unresolved questions:** What is the primary launch CTA? Can schedule data support a next-event feature? Which image and approved tagline should lead?

### `/about` — About

- **Purpose:** Explain the team's identity, history, competitive goals, culture, leadership, and relationship to WPI.
- **Primary audience:** Prospective students, families, alumni, and supporters.
- **Recommended sections:** Mission/identity; team history; values and culture; leadership; practices/competition overview; alumni section if in scope.
- **Required content:** Verified overview, history, leadership names/roles, and any approved WPI relationship language.
- **Calls to action:** View roster; join the team; contact leadership.
- **Unresolved questions:** What history is verified? Which leaders should be public? Are alumni included at launch?

### `/roster` — Roster

- **Purpose:** Present the current team accurately and respectfully.
- **Primary audience:** Players, families, supporters, opponents, and prospective students.
- **Recommended sections:** Season heading; roster grid/table; captains or leadership; optional team photo.
- **Required content:** Approved public fields for every current player and a confirmed season label.
- **Calls to action:** Learn about Whisper; join; view schedule.
- **Unresolved questions:** Are profiles public? Which fields—name, number, position/role, class year, photo—are permitted? Is player consent required?

### `/schedule` — Schedule & Results

- **Purpose:** Provide a reliable view of upcoming tournaments/games and completed results.
- **Primary audience:** Players, families, supporters, opponents, and alumni.
- **Recommended sections:** Upcoming events; past results; event location/details; optional season selector when historical data exists.
- **Required content:** Confirmed event names, dates, locations, status, opponents where applicable, and verified scores for completed games.
- **Calls to action:** Follow social channels; contact the team; view roster.
- **Unresolved questions:** Is the unit of display a tournament, game, or both? How much history is retained? Who verifies updates and postponements?

### `/join` — Join Whisper

- **Purpose:** Remove uncertainty from recruitment and give eligible students a clear next step.
- **Primary audience:** Current and prospective WPI students.
- **Recommended sections:** Who can join; season and commitment; practices/tryouts; what to bring; beginner reassurance; FAQ; interest action.
- **Required content:** Eligibility, timeline, practice expectations, experience requirements, costs if public, and a verified intake method.
- **Calls to action:** Submit interest form or email recruitment contact; follow team social accounts.
- **Unresolved questions:** Email, Google Form, or site form? Who receives inquiries? What practice details and costs may be published?

### `/media` — Media

- **Purpose:** Show team life and competition through approved photography and video.
- **Primary audience:** Recruits, players, alumni, families, and supporters.
- **Recommended sections:** Featured gallery; tournament/team collections; videos; links to active social channels.
- **Required content:** Rights-cleared, captioned media with dates/events where known and meaningful alt text.
- **Calls to action:** Follow Whisper; join; share an approved gallery link.
- **Unresolved questions:** Who owns existing media? May individuals be identified? Will videos be embedded or linked? How will galleries be curated?

### `/contact` — Contact

- **Purpose:** Direct each inquiry to an appropriate, monitored channel.
- **Primary audience:** Recruits, opponents, media, alumni, families, and supporters.
- **Recommended sections:** General contact; recruitment contact; competition/tournament contact if distinct; social links; response expectations.
- **Required content:** Verified public addresses or form destination, role labels, and current social accounts.
- **Calls to action:** Email the team; submit an inquiry; follow social channels.
- **Unresolved questions:** Which addresses are public? Is one shared inbox sufficient? Is spam protection needed? Who is accountable for responses?

## Functional requirements

### Required for the first release

- Responsive, keyboard-accessible global navigation with a clear current-page state and usable mobile menu.
- Mobile-first layouts that remain readable and functional at common phone, tablet, and desktop widths.
- Public roster generated from structured, validated team data.
- Public schedule and results generated from structured data, with clear upcoming/completed/cancelled states.
- Recruitment page with verified eligibility, commitment, tryout/practice, and contact information.
- A recruitment intake action using a verified email or external form initially; a custom backend is not required.
- Responsive photo and video presentation, with optimized images, captions where helpful, and accessible alternatives.
- Verified social links and contact information.
- Semantic HTML, keyboard operability, visible focus, sufficient contrast, useful alt text, reduced-motion consideration, and logical headings.
- Page-specific titles and descriptions, canonical metadata, social-sharing metadata/image, sitemap, and robots configuration.
- A straightforward Vercel deployment from GitHub with documented environment needs (ideally none for v1).
- Helpful empty states for unavailable schedule/results/media rather than invented content.

### Explicitly not required for the first release

- Database, authentication, admin dashboard, custom CMS, custom form backend, player accounts, live scoring, or automated league integrations.
- Complex filtering or search unless the real volume of roster, results, or media demonstrates a need.

## Content-editing strategy

### Options considered

| Approach | Strengths | Tradeoffs | Initial fit |
|---|---|---|---|
| Typed local data (`.ts` or validated JSON) | Simple deployment, reviewable changes, type safety, no service dependency | Editors use Git and must follow a schema | Best for roster, schedule/results, leadership, contacts, and social links |
| Markdown/MDX | Friendly long-form editing, versioned with code, supports structured front matter | Requires conventions and build integration; MDX can expose implementation complexity | Good for team history, recruitment copy, FAQs, and future updates |
| Lightweight CMS | Browser-based editing and media workflows for nontechnical maintainers | Adds accounts, schema, integration, cost, training, and service dependency | Revisit only when update ownership/volume warrants it |

### Recommended initial model

- Keep navigation labels, UI text, metadata defaults, and small stable labels in code.
- Keep roster, leadership, schedule/results, contacts, and social links in typed local data modules. Define narrow schemas and include comments or a contributor guide with examples.
- Keep longer page copy in Markdown/MDX only if maintainers will benefit from editing prose separately; otherwise begin with well-organized page content and avoid premature abstraction.
- Store media in organized `public/images/` folders and keep captions, credits, alt text, dates, and event associations in adjacent typed metadata rather than deriving them from file names.
- Provide a short, task-oriented editing guide in Milestone 1 or 3: edit a field, run checks, preview locally, submit a pull request. GitHub's browser editor can support nontechnical maintainers for small changes, while a technical maintainer reviews schema and presentation.
- Add automated schema/type checks and a preview deployment so data errors are caught before publication.

A CMS becomes worthwhile when multiple nontechnical editors update content frequently, Git-based review becomes a bottleneck, media volume requires an asset library, scheduled publishing is needed, or content must be edited independently of deployments. Reassess after one or two seasons of observed workflow; do not install one during Milestone 0.

## Brand and design direction

### Known direction

The experience should be competitive, energetic, welcoming, modern, connected to WPI, and unmistakably about ultimate frisbee. Favor authentic student-team photography, motion and shapes inspired by disc flight, confident typography, and clear recruitment paths. Retain the warmth and practical scale of a college club rather than borrowing the visual language of a professional franchise.

### Decisions and placeholders

| Area | Current state | Needed decision/evidence |
|---|---|---|
| Official Whisper logo | Missing | Obtain approved vector artwork and usage variants; verify ownership |
| WPI branding constraints | Unknown | Confirm trademark/name/logo rules and whether official WPI marks may be used |
| Primary/secondary colors | Undecided | Derive an accessible palette from approved Whisper/WPI identity, not assumptions |
| Accent colors | Undecided | Select one restrained, high-energy accent after the core palette is approved |
| Heading typography | Undecided | Choose a bold, athletic but non-gimmicky face with web licensing confirmed |
| Body typography | Undecided | Choose a highly readable, performant face with compatible metrics and licensing |
| Photography style | No assets | Prefer candid action, team connection, and campus context; define crop and color treatment |
| Graphic elements | Undecided | Explore disc arcs, field lines, or geometric WPI references without visual clutter |
| Tone of voice | Direction only | Direct, spirited, inclusive, student-led, and credible; avoid corporate or exaggerated claims |

## Content inventory

No actual team content was present during the audit. Every item below must be supplied or verified; no player, schedule, score, contact, quote, or history is assumed.

| Page | Content item | Required for launch | Current status | Proposed source | Notes |
|---|---|:---:|---|---|---|
| Home | Approved team description/tagline | Yes | Missing | Team leadership | Keep concise and factual |
| Home | Hero/team image | Yes | Missing | Team photographer/leadership | Confirm rights and participant consent |
| Home | Current recruitment status/CTA | Yes | Missing | Recruitment lead | Must remain current |
| Home | Featured/next event | No | Missing | Schedule data | Show only when confirmed |
| About | Team description and mission | Yes | Missing | Leadership/team charter | Verify WPI relationship wording |
| About | Team history | Yes | Missing | Alumni and records | Fact-check dates and claims |
| About | Values/culture | Yes | Missing | Players and leadership | Avoid unsupported marketing claims |
| About | Leadership names and roles | Yes | Missing | Team officers/captains | Confirm consent and update owner |
| About | Alumni information | No | Missing | Alumni coordinator | Decide initial scope |
| Roster | Season label and current roster | Yes | Missing | Captain/officer roster | Confirm publication policy |
| Roster | Names, numbers, roles/positions, class years | Conditional | Missing | Players/leadership | Publish only approved fields |
| Roster | Player portraits | No | Missing | Team photographer/players | Separate from general gallery; document consent |
| Schedule | Tournament/event schedule | Yes | Missing | Leadership/competition calendar | Verify dates, locations, status |
| Schedule | Match results and scores | Yes, when games complete | Missing | Official event records/leadership | Never publish unverified scores |
| Schedule | Historical results | No | Missing | Team archives | Decide retention policy |
| Join | Eligibility and recruitment process | Yes | Missing | Recruitment lead/WPI club policy | Include experience expectations |
| Join | Practice/tryout information | Yes | Missing | Captains/recruitment lead | Consider safety of publishing locations/times |
| Join | Costs, equipment, and commitment | Yes | Missing | Leadership | Mark variable figures with season/date |
| Join | Interest/contact method | Yes | Missing | Leadership | Choose email, Google Form, or site form |
| Join | FAQ | No | Missing | Common recruit questions | Validate every answer |
| Media | Team and tournament photos | Yes | Missing | Rights-cleared contributors | Record creator, event, date, consent |
| Media | Videos | No | Missing | Team channels/contributors | Confirm embed permission/captions |
| Contact | General/recruitment contact | Yes | Missing | Leadership | Prefer durable role inboxes |
| Contact | Competition contact | Conditional | Missing | Leadership | Can share general inbox if appropriate |
| Sitewide | Social media accounts | Yes | Missing | Leadership | Verify official account URLs |
| Sitewide | Logo and favicon | Yes | Missing | Approved team brand source | Prefer SVG logo; test at small sizes |
| Sitewide | SEO/social-sharing copy and image | Yes | Missing | Leadership + content editor | Avoid unverified claims |

The operational checklist is maintained in [CONTENT_INVENTORY.md](CONTENT_INVENTORY.md).

## Asset inventory

No assets are currently present. There are no logos, team photos, player photos, tournament photos, videos, icons, fonts, or documents in the repository. Git metadata is not a site asset. See [ASSET_INVENTORY.md](ASSET_INVENTORY.md) for the auditable inventory, missing-asset checklist, and recommended organization.

## Launch requirements

The first public deployment is ready only when:

- [ ] All initial pages are implemented and contain reviewed real content or an intentional, useful empty state.
- [ ] Global and mobile navigation work with keyboard, pointer, and touch input.
- [ ] Representative mobile, tablet, and desktop layouts are tested.
- [ ] All placeholder text and placeholder assets are removed or clearly excluded from production.
- [ ] The active-season roster and permitted public fields are confirmed.
- [ ] Upcoming schedule and completed results are confirmed, dated, and assigned an update owner.
- [ ] The recruitment method and recipient are tested.
- [ ] Public contact information and social accounts are verified.
- [ ] Images have appropriate dimensions, formats, compression, alt text, credits, and confirmed usage rights.
- [ ] Accessibility review covers automated checks plus keyboard, focus, headings, labels, contrast, zoom, and reduced motion.
- [ ] Page metadata, favicon, canonical URLs, sitemap, robots rules, and social-sharing image are present.
- [ ] Internal and external links are checked.
- [ ] Production build, preview deployment, and Vercel production deployment are tested.
- [ ] At least one named maintainer knows the update and rollback process.

## Open decisions requiring team input

1. Who owns routine website maintenance, and who is the backup?
2. How often will roster, schedule, and results be reviewed and updated?
3. Should individual player profiles be public, and has consent been obtained?
4. Which roster fields may be public: name, number, role/position, class year, hometown, photo, or other fields?
5. Should scores and tournament results be retained historically? If so, for how many seasons?
6. Should recruitment use a role-based email, Google Form, or website form, and who monitors it?
7. What official WPI branding, trademark, accessibility, and club-sports requirements apply?
8. Which social media accounts are official and should be linked?
9. Are alumni content and donations within the initial release, a later milestone, or out of scope?
10. Who owns or licenses each photograph/video, and are participant releases required?
11. Does the team own a custom domain? Who controls its registrar and DNS?
12. What is the official logo, color palette, and approved team naming/style?
13. May practice locations/times and leadership contact details be public?
14. Who supplies and approves launch copy, roster data, results, and media?

## Proposed milestones

### Milestone 0 — Project definition and content planning

- **Objective:** Establish scope, content needs, decisions, and an implementation sequence without building production UI.
- **Main deliverables:** Repository audit; project plan; content checklist; asset inventory; updated README.
- **Dependencies:** Current repository access and initial project brief.
- **Acceptance criteria:** Documents reflect actual repository state, contain valid relative links, expose unresolved decisions, and introduce no production application or services.

### Milestone 1 — Application foundation and global design system

- **Objective:** Create a minimal, maintainable application shell and approved visual foundation.
- **Main deliverables:** Current stable Next.js with App Router, TypeScript, Tailwind CSS, lint/format scripts, route shells, responsive header/footer/navigation, metadata baseline, design tokens, data schemas, contributor instructions, and Vercel preview deployment.
- **Dependencies:** Decision on package manager; approved initial logo/palette or an explicitly temporary neutral identity; navigation labels; repository/GitHub/Vercel access.
- **Acceptance criteria:** All planned routes resolve without fabricated content; production build and checks pass; navigation is keyboard/mobile usable; tokens meet contrast goals; preview deploy succeeds; no database, auth, or CMS is added.

### Milestone 2 — Home and About pages

**Status:** Implemented on `main`. Public copy cleaned against `/docs` source materials. Local interactive browser QA was performed at representative widths. Final team review and approved imagery are still required before public launch.

- **Objective:** Explain the team clearly and establish the primary public story.
- **Main deliverables:** Responsive Home and About pages, source-supported copy, hero/team imagery when available, recruitment CTA, team story, leadership section, and intentional empty/conditional states.
- **Dependencies:** Approved description, history, leadership data, brand direction, photography rights, and primary CTA.
- **Acceptance criteria:** Copy is verified against repository sources; pages work at target widths; images are optimized/accessible; no invented claims or stale event content appears.

Implementation notes: Home and About use Constitution and FAQ facts rewritten into visitor-facing language, with Transition Doc culture themes used cautiously and Spirit Manual chant content excluded. No public visual assets were added. Reusable section-heading, link-card, value-card, and callout patterns support these pages without changing later route scope.

### Milestone 3 — Roster and team data

**Status:** Implemented in the working tree with an intentionally empty public dataset. Real publication remains dependent on team-approved records, fields, ownership, and portrait permissions.

- **Objective:** Publish an accurate, maintainable roster using structured data.
- **Main deliverables:** Typed roster/leadership schemas and data, roster presentation, optional portraits, season labeling, editing guide, and validation.
- **Dependencies:** Roster publication/privacy decision, confirmed active roster, approved fields, photo consent, and update owner.
- **Acceptance criteria:** Every displayed field is approved and verified; missing photos degrade gracefully; data changes require no component edits; build/type checks catch invalid entries.

Implementation notes: roster content lives in typed local modules, validates at build time, and renders through reusable roster, player, leadership, season-label, and empty-state components. Leadership assignments reference roster player IDs and render only when approved assignments exist. No names, roles, numbers, class years, biographies, or portraits were invented.

### Milestone 4 — Schedule and results

**Status:** Implemented on `main` with a typed, validated schedule system and an intentionally empty public dataset. Real publication remains dependent on confirmed events, verified results, an update owner, and a history policy.

- **Objective:** Make upcoming events and verified results easy to find and update.
- **Main deliverables:** Typed event/result model, upcoming and completed views, status/location handling, empty states, and update instructions.
- **Dependencies:** Confirmed schedule, result source, history policy, display granularity, and update owner.
- **Acceptance criteria:** Dates/statuses are unambiguous and accessible; events sort correctly; unverified scores cannot appear; past/upcoming and empty states are tested.

Implementation notes: schedule content lives in typed local season, event, and game records. Focused validation enforces IDs, calendar values, date ranges, timezones, HTTPS links, score rules, and event/game status consistency. Native date utilities avoid date-only timezone shifts, result outcomes are derived from scores, and responsive cards support empty and partial-data states. No tournament, opponent, date, location, score, or link was invented or published.

### Milestone 5 — Recruitment, media, and contact

- **Objective:** Complete the main action-oriented and community-facing content.
- **Main deliverables:** Join page and FAQ, tested recruitment action, media gallery/video links, contact page, verified social links, and asset metadata.
- **Dependencies:** Recruitment process, contact ownership, media rights/consent, collected assets, and official social URLs.
- **Acceptance criteria:** Intake reaches the correct monitored destination; public details are approved; media is responsive, optimized, credited, and accessible; external links work.

### Milestone 6 — Accessibility, SEO, testing, and launch

- **Objective:** Validate quality and release the site publicly.
- **Main deliverables:** Accessibility review/fixes, responsive/browser QA, metadata and social cards, performance/image review, link check, content sign-off, domain configuration, deployment/runbook.
- **Dependencies:** Completed pages and real content, domain access, launch approver, and analytics decision if any.
- **Acceptance criteria:** Production build passes; critical accessibility issues are resolved; launch checklist is complete; social previews and links are verified; Vercel production and custom domain work; maintainer handoff is complete.

### Milestone 7 — Optional future features

- **Objective:** Add only features justified by observed needs after launch.
- **Main deliverables:** Potential historical season archive, individual profiles, alumni area, donation links, CMS, analytics, newsletter, richer galleries, or external schedule integration—each scoped separately.
- **Dependencies:** Usage evidence, privacy and ownership decisions, maintenance capacity, budget, and service approvals.
- **Acceptance criteria:** Each selected feature has a documented user need, owner, privacy/accessibility review, maintenance plan, and independent acceptance criteria before implementation.

## Documentation maintenance

- Update this plan when scope or architectural decisions change.
- Treat [CONTENT_INVENTORY.md](CONTENT_INVENTORY.md) as the live editorial checklist.
- Treat [ASSET_INVENTORY.md](ASSET_INVENTORY.md) as the source of truth for repository media and rights/optimization status.
- Treat [`docs/`](docs/README.md) as part of the project's content-source inventory. Those files are research material, not automatic permission to publish.
- Standing rule for future milestones: inspect all relevant repository source documents before drafting content; treat the Constitution as authoritative for formal governance; validate changing operational details for freshness; do not publish internal or sensitive information merely because it exists in the repository.
- Record consequential decisions in pull requests or a future lightweight decision log so succeeding student maintainers understand why they were made.
