# WPI Whisper Content Inventory

This is the working content checklist for launch. At the Milestone 0 audit on July 31, 2026, no team content or assets existed in the repository. A checked box should mean the item has been collected, verified by its owner, approved for public use, and added to the site—not merely drafted.

Status labels used below:

- **Missing:** Not present in the repository or brief.
- **Verified and implemented:** Supported by repository sources and present on the public page.
- **Supported but not yet implemented:** Present in `/docs` or planning notes, but deferred to a later milestone or page.
- **Possibly outdated:** Appears in source documents but may no longer be current.
- **Conflicting:** Sources disagree; do not publish until resolved.
- **Private/internal:** Exists in repository materials but must not be published without explicit approval.
- **Verification required:** The item must be confirmed for accuracy, privacy, ownership, or currency before publication.
- **Optional:** It may be omitted without blocking the first release.

Source documents live under [`docs/`](docs/README.md). Prefer the Constitution for formal governance; validate changing operational details for freshness; never publish sensitive material merely because it exists in `/docs`.

## Sitewide

### Required for launch

- [ ] **Missing:** Official team name styling and short description; verify with team leadership.
- [ ] **Missing:** Approved primary navigation labels.
- [ ] **Missing:** Official logo, favicon, and social-sharing image; verify rights and WPI brand compliance.
- [ ] **Missing:** Approved colors and typography; verify accessibility and font licenses.
- [ ] **Missing:** Official social account URLs; confirm that each is current and team-controlled.
- [ ] **Missing:** Default SEO title/description and public site URL.
- [ ] **Missing:** Public contact/recruitment method and named update owner.
- [ ] **Missing:** Image credits, rights, consent, captions, and alt-text records.

### Optional

- [ ] Site announcement/banner content and expiry date.
- [ ] Analytics consent/copy if analytics is later approved.

### Assets to collect

- [ ] Logo in original vector form plus approved light/dark variants.
- [ ] Small-icon/favicon source.
- [ ] Social-sharing image or source photography with safe crop area.

## Home (`/`)

Milestone 2 status: public-facing Home copy is implemented from Constitution and FAQ facts. Hero CTAs, team introduction, path cards, and recruitment callout avoid editorial workflow language. Season-specific recruitment status and imagery remain open.

### Required for launch

- [ ] **Verification required:** Temporary hero line “Play fast. Build together.” Presentation copy, not a factual claim. Team may approve or replace.
- [x] **Verified and implemented:** Concise team introduction as WPI's men's club ultimate program that educates/trains students and welcomes players without prior ultimate experience. Sources: Constitution Art. II; FAQ experience answers.
- [x] **Verified and implemented:** Primary CTA to `/join` and secondary CTA to `/about`; no active-tryout date claim.
- [x] **Verified and implemented:** Recruitment callout stating membership is open to currently enrolled WPI students and all skill levels are welcome. Sources: Constitution Art. III; FAQ.
- [ ] **Missing:** Current-season recruitment status and relevant dates.
- [ ] **Missing:** Hero image or approved graphic with credit, rights, consent, and alt text.
- [ ] **Supported but not yet implemented / Possibly outdated:** FAQ intake via Slack or forms—deferred to Join/Contact until durable public channels are confirmed.

### Optional

- [ ] Next confirmed event drawn from schedule data.
- [ ] Recent media highlights.

### Verification required

- [ ] Confirm that no time-sensitive home-page content can silently become stale.
- [ ] Confirm brand voice for the hero line and supporting sentence.

## About (`/about`)

Milestone 2 status: About copy presents Whisper as a student-run club sport using Constitution purpose, membership, league/competitive structure, officer roles, and FAQ practice cadence. No founding year, championships, or named current officers are published. Named people and internal transition details remain private/internal.

### Required for launch

- [x] **Verified and implemented:** Team overview and purpose language from Constitution Art. II (educate/train; may travel to or host competitions).
- [x] **Verified and implemented:** Club-sport identity as a student-run WPI club with competitive travel and a larger casual/educational league. Source: Constitution Art. III.
- [ ] **Missing:** Verified team history and dates. No reliable founding year or milestone timeline was found in `/docs`.
- [x] **Verified and implemented:** Culture principles framed as expectations (Spirit of the Game / self-refereed play, improvement, teamwork, communication). Sources: FAQ sport definition; Constitution purpose; Transition Doc culture themes. Spirit Manual file does not supply usable principles.
- [ ] **Missing:** Current leadership names, preferred labels, and consent for public listing.
- [x] **Verified and implemented:** High-level student leadership structure (elected executive board roles and coaching support) without names. Source: Constitution Arts. V–VIII.
- [x] **Verified and implemented:** Club experience overview covering fall league, fall tryouts, spring USAU season with some fall games/tournaments, twice-weekly practices in fall and spring, and student leadership. Sources: Constitution Art. III; FAQ; team clarification of current season pattern.
- [x] **Verified and implemented:** Membership openness and non-discrimination statement summarized from Constitution Arts. III and XI.

### Optional

- [ ] Alumni overview or alumni contact path.
- [ ] Timeline of notable, verified events.
- [ ] Leadership portraits.

### Conflicts / caution

- [ ] **Conflicting:** `Bullets Spirit Manual.docx` uses “Bullets” while Constitution/site branding use Whisper / WPI Ultimate Frisbee Club. Do not publish a former-name claim without team confirmation.
- [ ] **Possibly outdated:** Exact practice days, tournament names, dues, and intake links in FAQ/Transition Doc.
- [ ] **Private/internal:** Transition Doc officer names, coach names, staff contacts, vendor emails, account handoff notes, and social-event procedures.

### Verification required

- [ ] Confirm public wording for WPI club-sports affiliation remains accurate.
- [ ] Confirm whether current officer names should appear on About or only on Contact.
- [ ] Decide whether alumni information is in launch scope.
- [ ] Approve or revise Spirit / culture language if the team prefers different emphasis.

## Roster (`/roster`)

Milestone 3 status: the public roster page, typed local data model, validation, optional portrait presentation, conditional leadership section, and empty state are implemented. No player or leadership records were added because no publication-approved roster exists.

### Required for launch

- [ ] **Approval required:** Specific active-season label. The page currently uses the deliberate generic label “Current season.”
- [ ] **Missing:** Complete current roster from an authoritative team source.
- [ ] **Missing:** Approved public roster fields and consent policy.
- [ ] **Missing:** Named owner and update cadence.

### Candidate fields requiring approval

- [ ] Player name.
- [ ] Jersey number.
- [ ] Position or team role.
- [ ] Class year.
- [ ] Photograph and alt text.
- [ ] Any other biographical field (omit by default until approved).

### Optional

- [ ] Player portraits.
- [ ] Individual player profile pages.
- [ ] Captains/leadership callout.
- [ ] Team photo.

### Implemented infrastructure

- [x] Typed public-player, portrait, social-link, season, and leadership schemas.
- [x] Empty typed player and leadership exports under `src/data/`.
- [x] Validation for duplicate IDs/numbers, class-year range, required text, portrait paths/metadata, social links, and leadership references.
- [x] Responsive player-card grid with an accessible decorative-initials fallback.
- [x] Conditional leadership rendering and a public-quality empty-roster state.
- [x] Privacy and editing guidance in `docs/ROSTER_MAINTENANCE.md`.

### Verification required

- [ ] Confirm spelling, preferred names, numbers, roles, and class years with players/leadership.
- [ ] Confirm photo rights and player consent.
- [ ] Decide whether graduated/inactive players are archived or removed.

### Assets to collect

- [ ] Consistently framed player portraits, separated from general team photos.
- [ ] Current team photo with creator credit and participant consent.

## Schedule & Results (`/schedule`)

### Required for launch

- [ ] **Missing:** Current-season tournaments/events with confirmed names, dates, locations, and statuses.
- [ ] **Missing:** Verified completed-game opponents and scores where results exist.
- [ ] **Missing:** Source of truth, update owner, and expected update timing.
- [ ] **Missing:** Policy for cancellations, postponements, tentative events, and unknown details.

### Optional

- [ ] Historical seasons/results.
- [ ] Links to official tournament pages.
- [ ] Venue maps or directions.
- [ ] Event recaps.

### Verification required

- [ ] Decide whether to display tournaments, individual games, or both.
- [ ] Decide how many historical seasons to retain.
- [ ] Verify dates/time zones, locations, opponent naming, and every score.

## Join Whisper (`/join`)

### Required for launch

- [ ] **Supported but not yet implemented:** Eligibility — currently enrolled WPI students; all skill levels welcome. Sources: Constitution Art. III; FAQ. Page remains a placeholder until Milestone 5.
- [ ] **Supported but not yet implemented / Possibly outdated:** Recruitment and tryout process, including fall league vs competitive team cadence. Sources: FAQ; Constitution Art. III.
- [ ] **Missing:** Practice schedule/location appropriate for public display.
- [ ] **Possibly outdated:** Time commitment notes (fall league ~1 day/week; competitive practices ~2x/week Fall/Spring) need current-season confirmation before publishing exact expectations.
- [ ] **Verified in sources, deferred:** Inclusive beginner-facing guidance (no ultimate experience required). Source: FAQ.
- [ ] **Missing / Possibly outdated:** Verified recruitment CTA: email, Google Form, Slack, or website form. FAQ mentions forms/Slack without durable public URLs in-repo.
- [ ] **Missing:** Monitored recipient/owner and response expectation.

### Optional

- [ ] Frequently asked questions.
- [ ] New-player checklist.
- [ ] Testimonials or quotes, only with explicit approval and attribution.
- [ ] Introductory ultimate-frisbee resources.

### Verification required

- [ ] Confirm all dates and variable costs for the named season.
- [ ] Confirm whether practice details may be public.
- [ ] Test the full interest-submission path.

## Media (`/media`)

### Required for launch

- [ ] **Missing:** Curated launch set of team/action photos.
- [ ] **Missing:** Creator/source, license or permission, participant consent, event/date, caption, and alt text for each published image.
- [ ] **Missing:** Gallery organization and curator/update owner.

### Optional

- [ ] Tournament-specific galleries.
- [ ] Videos with captions/transcripts or accessible source links.
- [ ] Approved social embeds.
- [ ] Historical media.

### Verification required

- [ ] Confirm redistribution and editing/cropping rights.
- [ ] Confirm whether people may be named in captions.
- [ ] Confirm video embedding and music rights.

### Assets to collect

- [ ] Wide hero/action photography.
- [ ] Landscape and portrait gallery images.
- [ ] Team/group photographs.
- [ ] Approved video URLs, thumbnails, captions, and transcripts where applicable.

## Contact (`/contact`)

### Required for launch

- [ ] **Missing:** General team contact or durable role inbox.
- [ ] **Missing:** Recruitment contact/action.
- [ ] **Missing:** Inquiry categories and routing owner.
- [ ] **Missing:** Verified official social links.
- [ ] **Missing:** Reasonable response expectation if one is stated.

### Optional

- [ ] Separate competition/tournament contact.
- [ ] Separate alumni contact.
- [ ] Contact form, only if its privacy, spam, delivery, and maintenance needs justify it.

### Verification required

- [ ] Confirm every address is approved for public display and actively monitored.
- [ ] Confirm whether personal names or addresses should be avoided in favor of role accounts.
- [ ] Test email links or form submission on mobile and desktop.

## Content ownership before launch

- [ ] Assign a content approver.
- [ ] Assign roster and leadership data owner.
- [ ] Assign schedule/results data owner.
- [ ] Assign recruitment/contact owner.
- [ ] Assign media rights and curation owner.
- [ ] Agree on review cadence and off-season handoff.

Related documents: [project plan](PROJECT_PLAN.md) and [asset inventory](ASSET_INVENTORY.md).
