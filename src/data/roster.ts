import type {
  LeadershipAssignment,
  PublicPlayer,
  SeasonMetadata,
} from "@/types/roster";

/**
 * Season wording remains generic until team leadership confirms the active
 * season label and roster for public use.
 */
export const currentSeason = {
  id: "current",
  label: "Current season",
  rosterHeading: "Active roster",
  publicationStatus: "awaiting-approval",
} as const satisfies SeasonMetadata;

/**
 * Add only verified, publication-approved player records. See
 * docs/ROSTER_MAINTENANCE.md before editing this export.
 */
export const currentRoster: readonly PublicPlayer[] =
  [] satisfies readonly PublicPlayer[];

/** Leadership assignments must reference players in currentRoster. */
export const publicLeadership: readonly LeadershipAssignment[] =
  [] satisfies readonly LeadershipAssignment[];
