import type { ContactPath, RecruitmentAction, SocialLink } from "@/types/communications";

export const recruitmentActions: readonly RecruitmentAction[] = [
  {
    id: "fall-2026-tryouts",
    kind: "tryout-form",
    label: "Register for Fall 2026 Tryouts",
    description: "For WPI students planning to participate in Fall 2026 tryouts. Tryout participants must also complete the Fall 2026 interest form.",
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
    description: "For every interested student. Complete this form even if you are unsure about tryouts or do not want to play competitively. Tryout participants must complete both forms.",
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
    description: "Connect with the WPI frisbee community and receive team communication. Slack signup does not register you for tryouts.",
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
    label: "Joining or trying out",
    description: "Students trying out should complete both Fall 2026 forms. Students who are unsure or do not want to play competitively should complete only the interest form.",
    audience: "Current and prospective WPI students",
    actionIds: ["fall-2026-tryouts", "fall-2026-interest"],
    enabled: true,
    public: true,
  },
  {
    id: "community",
    label: "WPI frisbee community",
    description: "Join the public Slack signup to connect with the community and receive team communication.",
    audience: "Current WPI students and interested players",
    actionIds: ["wpi-frisbee-slack"],
    enabled: true,
    public: true,
  },
  {
    id: "leadership",
    label: "Team leadership",
    description: "Email Whisper's captains and executive board for team questions that are not covered by the recruitment forms.",
    audience: "Players, families, alumni, and community members",
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
