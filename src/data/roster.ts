import type { SeasonMetadata } from "@/types/roster";

/**
 * Season wording remains generic until team leadership confirms the active
 * season label and roster for public use.
 */
export const currentSeason = {
  id: "current",
  label: "Current season",
  rosterHeading: "Active roster",
  publicationStatus: "published",
} as const satisfies SeasonMetadata;
