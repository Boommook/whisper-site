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

export function getSeasonRecord(events: readonly ScheduleEvent[]) {
  const record = { wins: 0, losses: 0, ties: 0 };
  for (const event of events) {
    for (const game of event.games ?? []) {
      const outcome = getGameOutcome(game);
      if (outcome === "win") record.wins += 1;
      if (outcome === "loss") record.losses += 1;
      if (outcome === "tie") record.ties += 1;
    }
  }
  return record;
}

function compareWithOverride(a: ScheduleEvent, b: ScheduleEvent) {
  if (a.sortOrder !== undefined || b.sortOrder !== undefined) {
    const orderDifference = (a.sortOrder ?? 100) - (b.sortOrder ?? 100);
    if (orderDifference !== 0) return orderDifference;
  }
  return a.startDate.localeCompare(b.startDate) || a.name.localeCompare(b.name);
}

/**
 * Active events remain upcoming through their final scheduled day. After that,
 * every event moves to the past section even if its status was never updated.
 * This keeps stale cancelled, postponed, tentative, and scheduled records from
 * appearing indefinitely as future plans.
 */
export function sortUpcomingEvents(events: readonly ScheduleEvent[], today: string) {
  return [...events]
    .filter(
      (event) =>
        event.status !== "completed" && (event.endDate ?? event.startDate) >= today,
    )
    .sort(compareWithOverride);
}

export function sortPastEvents(events: readonly ScheduleEvent[], today: string) {
  return [...events]
    .filter(
      (event) =>
        event.status === "completed" || (event.endDate ?? event.startDate) < today,
    )
    .sort((a, b) => {
      if (a.sortOrder !== undefined || b.sortOrder !== undefined) {
        const orderDifference = (a.sortOrder ?? 100) - (b.sortOrder ?? 100);
        if (orderDifference !== 0) return orderDifference;
      }
      return b.startDate.localeCompare(a.startDate) || a.name.localeCompare(b.name);
    });
}
