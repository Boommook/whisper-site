export type PlayerStatus = "active" | "inactive";

export type LeadershipRole =
  | "President"
  | "Vice President"
  | "Treasurer"
  | "Secretary"
  | "Public Relations Chair"
  | "Social Media Manager"
  | "Captain";

export type FieldRole = "Handler" | "Cutter" | "Hybrid";

export type PlayerPortrait = Readonly<{
  src: `/images/players/${string}` | `/api/roster-portraits/${string}`;
  alt?: string;
  width?: number;
  height?: number;
  photographerCredit?: string;
}>;

export type ApprovedSocialLink = Readonly<{
  label: string;
  href: `https://${string}`;
  publicationApproved: true;
}>;

export type PublicPlayer = Readonly<{
  id: string;
  displayName: string;
  classYear?: number;
  status: PlayerStatus;
  jerseyNumber?: number;
  fieldRole?: string;
  pronouns?: string;
  hometown?: string;
  major?: string;
  biography?: string;
  portrait?: PlayerPortrait;
  socialLink?: ApprovedSocialLink;
}>;

export type LeadershipAssignment = Readonly<{
  playerId: PublicPlayer["id"];
  role: LeadershipRole;
  sortOrder?: number;
}>;

export type SeasonMetadata = Readonly<{
  id: string;
  label: string;
  rosterHeading: string;
  publicationStatus: "awaiting-approval" | "published";
  lastVerified?: `${number}-${number}-${number}`;
}>;
