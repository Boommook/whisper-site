import type { ContactPath, RecruitmentAction, SocialLink } from "@/types/communications";

export const recruitmentActions: readonly RecruitmentAction[] = [
  {
    id: "fall-2026-tryouts",
    kind: "tryout-form",
    label: "Register for Fall 2026 Tryouts",
    description: "Planning to try out for the competitive team? Complete this form and the Fall 2026 interest form.",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSeLDmXLHD-nQbE0-TmTlpGVfzIjPlvJAlclQJ_Ax3PzXU6kVQ/viewform?usp=publish-editor",
    season: "Fall 2026",
    enabled: true,
    public: true,
    external: true,
    primary: true,
  },
  {
    id: "fall-2026-interest",
    kind: "interest-form",
    label: "Complete the Fall 2026 Interest Form",
    description: "Use this for intramurals, competitive interest, or if you are not sure yet. Competitive tryout players must complete both forms.",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSe7SMgyYYIkN_qP47T0lVXmmv7j2hRMT1L41O2KfKink4XmOg/viewform?usp=publish-editor",
    season: "Fall 2026",
    enabled: true,
    public: true,
    external: true,
  },
  {
    id: "wpi-frisbee-slack",
    kind: "community",
    label: "Join the WPI Frisbee Slack",
    description: "Meet the WPI frisbee community and get current updates. Slack does not register you for tryouts.",
    href: "https://wpifrisbee.slack.com/signup#/domain-signup",
    enabled: true,
    public: true,
    external: true,
  },
  {
    id: "captain-exec-email",
    kind: "email",
    label: "Email the Whisper executive board",
    description: "Contact Whisper's captains and executive board with team questions.",
    href: "mailto:gr-ateam_exec@wpi.edu",
    enabled: true,
    public: true,
    external: false,
  },
];

export const socialLinks: readonly SocialLink[] = [
  {
    id: "instagram",
    platform: "instagram",
    label: "WPI Men’s Ultimate",
    username: "@wpimensultimate",
    href: "https://www.instagram.com/wpimensultimate",
    accessibleLabel: "Follow WPI Men’s Ultimate on Instagram",
    verified: true,
    enabled: true,
    public: true,
  },
];

export const contactPaths: readonly ContactPath[] = [
  {
    id: "joining",
    label: "Want to play?",
    description: "For intramurals or general interest, complete the interest form. For competitive tryouts, complete both forms.",
    audience: "Intramurals and competitive tryouts",
    actionIds: ["fall-2026-tryouts", "fall-2026-interest"],
    enabled: true,
    public: true,
  },
  {
    id: "community",
    label: "Join the community",
    description: "Join Slack to meet the community and get current details.",
    audience: "Slack and community",
    actionIds: ["wpi-frisbee-slack"],
    enabled: true,
    public: true,
  },
  {
    id: "leadership",
    label: "Email the team",
    description: "Email Whisper's captains and executive board with team or tournament questions.",
    audience: "Team and tournament questions",
    actionIds: ["captain-exec-email"],
    enabled: true,
    public: true,
  },
];

export const publicRecruitmentActions = recruitmentActions.filter(
  (action): action is RecruitmentAction & { href: NonNullable<RecruitmentAction["href"]> } =>
    action.enabled && action.public && Boolean(action.href),
);
export const publicSocialLinks = socialLinks.filter(
  (link) => link.enabled && link.public && link.verified,
);
