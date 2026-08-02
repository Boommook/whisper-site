# WPI Whisper Asset Inventory

## Audit summary

Audit date: July 31, 2026.

No website assets were found in the repository. The repository contained only `.git` metadata before the Milestone 0 Markdown files were created. Git internals are not public website assets and are intentionally excluded from the table.

Milestone 2 added no image, logo, font, video, or public website document assets. The Home and About pages intentionally use CSS geometry and the existing text-only temporary mark so they remain polished without implying that an approved team asset exists.

Internal reference documents under `docs/` were added for content research. They are not public visual assets and must not be treated as logos, photography, or downloadable public files.

Do not mark an item as present until the exact file has been added and its provenance checked.

## Assets currently present

| Category | File name | File type | Intended use | Optimization/conversion | Rights/attribution |
|---|---|---|---|---|---|
| Logos | None found | — | — | — | — |
| Team photos | None found | — | — | — | — |
| Player photos | None found | — | — | — | — |
| Tournament photos | None found | — | — | — | — |
| Videos | None found | — | — | — | — |
| Icons | None found | — | — | — | — |
| Fonts | None found | — | — | — | — |
| Public documents | None found | — | — | — | — |

## Internal reference materials (not public assets)

| File | Type | Role | Publication note |
|---|---|---|---|
| `docs/Ultimate Frisbee Constitution.docx` | DOCX | Formal governance source | Extract approved public facts only; do not host as a public download unless later approved |
| `docs/Frisbee FAQ (for club fair).docx` | DOCX | Prospective-player FAQ source | Reuse facts, not necessarily original wording; confirm intake links before use |
| `docs/THE Transition Doc.docx` | DOCX | Officer transition / operations | Largely internal; exclude sensitive and stale details |
| `docs/Bullets Spirit Manual.docx` | DOCX | Incomplete / misaligned spirit notes | Not a public asset; title may be outdated; content is not visitor-safe as written |
| `docs/README.md` | Markdown | Source-document publication guide | Maintainer reference only |

## Important missing assets

Milestone 3 added portrait support but no files. Player cards use an `aria-hidden` initials treatment when an approved portrait is absent; it is not presented as a real photograph.

- [ ] Official Whisper logo in its original vector format, plus approved monochrome/light/dark variants.
- [ ] WPI marks only if permission and usage rules allow them.
- [ ] Favicon/app-icon source that remains legible at small sizes.
- [ ] Current team photograph.
- [ ] High-quality action/hero photographs with both wide and mobile-safe crops.
- [ ] Current player portraits if portraits are approved for public use.
- [ ] Tournament and team-life photography for the media page.
- [ ] Approved video links/files, thumbnails, captions, and transcripts if video is included.
- [ ] Social-sharing image sized and composed for link previews.
- [ ] Any custom fonts, with web licenses and fallback decisions, if system/hosted open fonts are not used.
- [ ] Asset register containing creator/source, rights, consent, event/date, caption, and alt-text notes.

## Recommended future structure

This is a target structure, not a request to create empty folders. Use it when real assets are collected.

```text
public/
├── brand/
│   ├── logos/
│   └── icons/
├── images/
│   ├── team/
│   ├── players/
│   │   └── 2026-27/
│   ├── tournaments/
│   │   └── 2026-27/
│   └── social/
└── documents/
```

Prefer hosted/embedded video from an approved team-controlled source over committing large video files. If downloadable documents are eventually required, keep only public, current versions under `public/documents/` and define an archival policy.

## File naming convention

- Use lowercase kebab-case ASCII names: `team-regionals-2026-01.webp`, not `IMG_4832 Final.JPG`.
- Include a stable subject plus useful context such as season, event, or sequence number.
- For player portraits, use a durable approved identifier rather than exposing unnecessary personal data; for example, `alex-smith-2026-27.webp` only if publishing names is approved.
- Use season folders in a consistent format such as `2026-27`.
- Do not encode captions, photographer credits, or full alt text solely in file names; store them in structured metadata.
- Avoid `final`, `new`, and version suffixes with no meaning. Git provides version history.

## Preferred formats and optimization

- **Logos and simple graphics:** Prefer clean SVG when supplied by the rights holder. Inspect SVGs before use, remove editor cruft where safe, and preserve an original source copy outside the optimized deliverable when appropriate.
- **Photography:** Preserve archival originals outside the deployed site. Generate right-sized WebP or AVIF derivatives; retain JPEG only when compatibility, workflow, or source quality warrants it.
- **Transparency-heavy raster art:** Use optimized PNG, WebP, or AVIF based on visual testing.
- **Icons:** Prefer an established accessible icon component/library or approved SVGs; do not use icon-only controls without accessible names.
- **Fonts:** Prefer performant, licensed WOFF2 files or framework-supported hosted/open fonts. Limit families and weights. Do not commit desktop font files without a web license.
- **Video:** Avoid large repository binaries. Use an approved hosting platform, poster image, captions, and transcript; never autoplay audible video.
- Remove unnecessary metadata where appropriate, keep correct color profiles, avoid upscaling, and compare visual quality after compression.
- Use Next.js image optimization for displayed raster images while providing intrinsic dimensions and intentional responsive sizes.

## Image organization and metadata

Keep player portraits separate from general team and tournament photography because their consent, replacement cadence, crop, and structured association differ. Organize tournament photos by season/event only when volume makes that useful; do not create deep empty folder trees.

For each publishable asset, track:

| Field | Requirement |
|---|---|
| File/path | Exact repository path or approved external URL |
| Category | Logo, team, player, tournament, social, video, icon, font, or document |
| Creator/source | Photographer, designer, player, team account, or vendor |
| Rights | License or explicit permission, including crop/edit and redistribution rights |
| Consent | Participant/player approval when required |
| Event/date | Accurate context; mark unknown rather than guessing |
| Caption | Optional visible context, fact-checked |
| Alt text | Purpose-aware description, or empty alt for truly decorative images |
| Focal point/crop | Guidance for responsive presentation |
| Optimization status | Original, web-ready, or replacement needed |
| Review owner/date | Person responsible and last verification date |

## Alt-text guidance

- Write alt text for the image's purpose in its page context, not as a list of visual details.
- Identify people only when names are approved and relevant.
- Do not begin with “image of” or repeat an adjacent caption.
- Use empty alt text for decorative images so assistive technology skips them.
- For linked images, describe the link's destination or action.
- Record draft alt text with asset metadata, then review it in the final page context.
- Videos need captions; meaningful audio-only information also needs an equivalent transcript or description.

## Intake checklist for every new asset

- [ ] File has a descriptive, convention-compliant name and correct category folder.
- [ ] Creator/source and usage permission are recorded.
- [ ] Participant consent/privacy is resolved where applicable.
- [ ] Facts in the caption are verified.
- [ ] Alt text or decorative status is documented in page context.
- [ ] Dimensions, crop, format, file size, and visual quality are appropriate.
- [ ] Duplicate and obsolete derivatives are not committed.
- [ ] The page is tested at mobile and desktop sizes after adding the asset.

Related documents: [project plan](PROJECT_PLAN.md) and [content inventory](CONTENT_INVENTORY.md).
