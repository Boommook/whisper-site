export type SchedulePublicationStatus = "awaiting-approval" | "published";

export type ScheduleEventType = "tournament" | "game" | "scrimmage" | "other";

export type ScheduleEventStatus =
  | "tentative"
  | "scheduled"
  | "in-progress"
  | "completed"
  | "cancelled"
  | "postponed";

export type ScheduleGameStatus = "scheduled" | "completed" | "cancelled";

export type ScheduleSeason = Readonly<{
  id: string;
  label: string;
  description?: string;
  publicationStatus: SchedulePublicationStatus;
  startDate?: string;
  endDate?: string;
}>;

export type ScheduleGame = Readonly<{
  id: string;
  opponent: string;
  status: ScheduleGameStatus;
  round?: string;
  date?: string;
  startTime?: string;
  timezone?: string;
  field?: string;
  whisperScore?: number;
  opponentScore?: number;
  resultNote?: string;
  externalUrl?: `https://${string}`;
}>;

export type ScheduleEvent = Readonly<{
  id: string;
  name: string;
  type: ScheduleEventType;
  status: ScheduleEventStatus;
  startDate: string;
  endDate?: string;
  startTime?: string;
  timezone?: string;
  locationName?: string;
  location?: string;
  description?: string;
  externalUrl?: `https://${string}`;
  games?: readonly ScheduleGame[];
  sortOrder?: number;
}>;

export type ScheduleDataset = Readonly<{
  season: ScheduleSeason;
  events: readonly ScheduleEvent[];
}>;

export type GameOutcome = "win" | "loss" | "tie";
