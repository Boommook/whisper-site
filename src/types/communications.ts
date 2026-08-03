export type RecruitmentActionKind = "tryout-form" | "interest-form" | "community" | "email";

export type RecruitmentAction = Readonly<{
  id: string;
  kind: RecruitmentActionKind;
  label: string;
  description: string;
  href?: `https://${string}` | `mailto:${string}`;
  season?: string;
  enabled: boolean;
  public: boolean;
  external: boolean;
  primary?: boolean;
}>;

export type SocialLink = Readonly<{
  id: string;
  platform: "instagram";
  label: string;
  username?: string;
  href: `https://${string}`;
  accessibleLabel: string;
  verified: boolean;
  enabled: boolean;
  public: boolean;
}>;

export type ContactPath = Readonly<{
  id: string;
  label: string;
  description: string;
  audience: string;
  actionIds: readonly string[];
  enabled: boolean;
  public: boolean;
}>;
