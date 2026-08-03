# Communications maintenance

Public recruitment actions, community links, social accounts, and contact routing are configured in `src/config/communications.ts`; their types live in `src/types/communications.ts`. Page components must consume this configuration rather than duplicate URLs.

| Channel | Purpose | Time-sensitive | Current state |
| --- | --- | ---: | --- |
| Fall 2026 tryout form | Tryout registration | Yes | Enabled, primary |
| Fall 2026 club interest form | General recruitment interest | Yes | Enabled |
| WPI Frisbee Slack | Community communication | No | Enabled |
| Instagram `@wpimensultimate` | Public updates and media | No | Enabled |
| Captain/exec email | Direct leadership contact | No | Enabled: `gr-ateam_exec@wpi.edu` |

## Updating channels

- After the Fall 2026 cycle, set each seasonal form's `enabled` value to `false`. Never rely on the calendar to remove it automatically.
- For a new season, replace the label, description, `href`, and `season`; verify the published form in a private browser before enabling it.
- Exactly one active recruitment action should normally have `primary: true`.
- Update Instagram's canonical URL and username together. Replace the Slack signup URL only with a public, team-approved signup destination.
- If the leadership alias changes, update the `mailto:` address and its label together, then verify the link before publishing.
- Test every external link during launch QA and review seasonal CTAs before each recruitment cycle.

The pages intentionally omit disabled entries and remain useful through other verified routes. Never reuse private roster Sheet fields as public contact data; roster consent does not authorize publication of personal contact details.
