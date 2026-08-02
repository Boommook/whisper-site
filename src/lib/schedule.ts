import type {
  GameOutcome,
  ScheduleEvent,
  ScheduleGame,
} from "@/types/schedule";

export function getGameOutcome(game: ScheduleGame): GameOutcome | undefined {
  if (
    game.status !== "completed" ||
    game.whisperScore === undefined ||
    game.opponentScore === undefined
  ) {
    return undefined;
  }
  if (game.whisperScore > game.opponentScore) return "win";
  if (game.whisperScore < game.opponentScore) return "loss";
  return "tie";
}

function compareWithOverride(a: ScheduleEvent, b: ScheduleEvent) {
  if (a.sortOrder !== undefined || b.sortOrder !== undefined) {
    const orderDifference = (a.sortOrder ?? 100) - (b.sortOrder ?? 100);
    if (orderDifference !== 0) return orderDifference;
  }
  return a.startDate.localeCompare(b.startDate) || a.name.localeCompare(b.name);
}

export function sortUpcomingEvents(events: readonly ScheduleEvent[]) {
  return [...events]
    .filter((event) => event.status !== "completed")
    .sort(compareWithOverride);
}

export function sortCompletedEvents(events: readonly ScheduleEvent[]) {
  return [...events]
    .filter((event) => event.status === "completed")
    .sort((a, b) => {
      if (a.sortOrder !== undefined || b.sortOrder !== undefined) {
        const orderDifference = (a.sortOrder ?? 100) - (b.sortOrder ?? 100);
        if (orderDifference !== 0) return orderDifference;
      }
      return b.startDate.localeCompare(a.startDate) || a.name.localeCompare(b.name);
    });
}
