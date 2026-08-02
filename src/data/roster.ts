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
  publicationStatus: "published",
} as const satisfies SeasonMetadata;

/**
 * Add only verified, publication-approved player records. See
 * docs/ROSTER_MAINTENANCE.md before editing this export.
 */
export const currentRoster: readonly PublicPlayer[] =
  [
    { id: "aman-siddiqi", displayName: "Aman Siddiqi", status: "active", jerseyNumber: 11, classYear: 2028, fieldRole: "Handler" },
    { id: "austin-zold", displayName: "Austin Zold", status: "active", jerseyNumber: 22, classYear: 2027, fieldRole: "Cutter" },
    { id: "ben-haugsjaa-habink", displayName: "Ben Haugsjaa-Habink", status: "active", jerseyNumber: 19, classYear: 2027, fieldRole: "Cutter" },
    { id: "blake-burkey", displayName: "Blake Burkey", status: "active", jerseyNumber: 20, classYear: 2027, fieldRole: "Handler" },
    { id: "brandon-gu", displayName: "Brandon Gu", status: "active", jerseyNumber: 2, classYear: 2029, fieldRole: "Cutter" },
    { id: "cole-bennett", displayName: "Cole Bennett", status: "active", jerseyNumber: 81, classYear: 2027, fieldRole: "Cutter" },
    { id: "colin-masucci", displayName: "Colin Masucci", status: "inactive", jerseyNumber: 14, classYear: 2026, fieldRole: "Cutter" },
    { id: "davi-paiva", displayName: "Davi Paiva", status: "active", jerseyNumber: 6, classYear: 2028, fieldRole: "Handler" },
    { id: "dhaniel-ramos", displayName: "Dhaniel Ramos", status: "active", jerseyNumber: 10, classYear: 2027, fieldRole: "Handler" },
    { id: "josh-dunlap", displayName: "Josh Dunlap", status: "active", jerseyNumber: 5, classYear: 2027, fieldRole: "Cutter" },
    { id: "eric-impink", displayName: "Eric Impink", status: "active", jerseyNumber: 16, classYear: 2026, fieldRole: "Handler" },
    { id: "felix-sutherlin", displayName: "Felix Sutherlin", status: "active", jerseyNumber: 30, classYear: 2028, fieldRole: "Cutter" },
    { id: "gabriel-rapoza", displayName: "Gabriel Rapoza", status: "active", jerseyNumber: 69, classYear: 2027, fieldRole: "Cutter" },
    { id: "gus-grinley", displayName: "Gus", status: "active", jerseyNumber: 9, classYear: 2027, fieldRole: "Cutter" },
    { id: "jack-cooney", displayName: "Jack Cooney", status: "inactive", jerseyNumber: 4, classYear: 2027, fieldRole: "Cutter" },
    { id: "jack-dawson", displayName: "Jack Dawson", status: "active", jerseyNumber: 23, classYear: 2029, fieldRole: "Cutter" },
    { id: "joe-molder", displayName: "Joe Molder", status: "inactive", jerseyNumber: 0, classYear: 2027, fieldRole: "Hybrid" },
    { id: "john-cassell", displayName: "John Cassell", status: "active", jerseyNumber: 15, classYear: 2027, fieldRole: "Cutter" },
    { id: "jake-burke", displayName: "Jake Burke", status: "active", jerseyNumber: 8, classYear: 2026, fieldRole: "Cutter" },
    { id: "kyle-doll", displayName: "Kyle Doll", status: "active", jerseyNumber: 26, classYear: 2027, fieldRole: "Cutter" },
    { id: "malcolm-cooper", displayName: "Malcolm Cooper", status: "active", jerseyNumber: 29, classYear: 2029, fieldRole: "Hybrid" },
    { id: "matthew-carlesi", displayName: "Matthew Carlesi", status: "active", jerseyNumber: 67, classYear: 2027, fieldRole: "Cutter" },
    { id: "max-jansen", displayName: "Max Jansen", status: "active", jerseyNumber: 32, classYear: 2028, fieldRole: "Hybrid" },
    { id: "nathaniel-powers", displayName: "Powers", status: "active", jerseyNumber: 18, classYear: 2026, fieldRole: "Hybrid" },
    { id: "robbie-galpern-levin", displayName: "Robbie Galpern Levin", status: "active", jerseyNumber: 37, classYear: 2027, fieldRole: "Handler" },
    { id: "seamus-harte", displayName: "Seamus Harte", status: "active", jerseyNumber: 99, classYear: 2027, fieldRole: "Hybrid" },
    { id: "sean-lendrum", displayName: "Sean Lendrum", status: "inactive", jerseyNumber: 45, classYear: 2025, fieldRole: "Handler"   },
    { id: "spencer-mann", displayName: "Spencer Mann", status: "active", jerseyNumber: 7, classYear: 2029, fieldRole: "Hybrid" },
    { id: "tristan-suplis", displayName: "Tristan Suplis", status: "active", jerseyNumber: 13, classYear: 2029, fieldRole: "Cutter" },
    { id: "tyler-gillman", displayName: "Tyler Gillman", status: "active", jerseyNumber: 43, classYear: 2027, fieldRole: "Cutter" },
  ] satisfies readonly PublicPlayer[];

/** Leadership assignments must reference players in currentRoster. */
export const publicLeadership: readonly LeadershipAssignment[] =
  [
    { playerId: "seamus-harte", role: "President" },
    { playerId: "aman-siddiqi", role: "Vice President" },
    { playerId: "max-jansen", role: "Treasurer" },
    { playerId: "kyle-doll", role: "Secretary" },
    { playerId: "cole-bennett", role: "Public Relations Chair" },
    { playerId: "dhaniel-ramos", role: "Social Media Manager" },
  ] satisfies readonly LeadershipAssignment[];
