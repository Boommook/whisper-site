import type { ScheduleEvent, ScheduleSeason } from "@/types/schedule";

/**
 * A specific label and date range must not be published until team leadership
 * confirms the season. See docs/SCHEDULE_MAINTENANCE.md before editing.
 */
export const scheduleSeason = {
  id: "current",
  label: "Current season",
  description: "Upcoming events and verified results will appear here.",
  publicationStatus: "awaiting-approval",
} as const satisfies ScheduleSeason;

/** Add only verified, publication-approved event and result records. */
export const scheduleEvents: readonly ScheduleEvent[] =
  [] satisfies readonly ScheduleEvent[];
