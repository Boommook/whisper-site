# Media maintenance

Public gallery covers live in `public/img/`. Structured metadata lives in `src/data/media.ts` and follows `src/types/media.ts`. The Media page renders only records with `publicationApproved: true`.

Before adding media, confirm publication rights and participant consent. Every record needs a stable ID, contextual alt text, event/date context, local dimensions, caption-quality description, creator credit and URL, and a verified public destination. Do not identify participants unless that identification is approved. Decorative images should use empty alt text; meaningful gallery images should not.

Optimize a right-sized WebP, AVIF, or suitable JPEG before committing, retain the archival original outside the deployment, and preserve a stable aspect ratio. Keep player portraits separate from general team/event media. Private Drive folders are source storage—not a public image host—and their IDs, credentials, and arbitrary contents must never be exposed.

To add an approved gallery, copy its cover into `public/img/`, add one typed record, verify the external HTTPS URL, and set `publicationApproved` only after approval. Future verified video links should use a narrow typed extension and remain links unless an accessible embed has a clear benefit. With zero approved records, `/media` renders an intentional approval-pending state and links visitors to Join.
