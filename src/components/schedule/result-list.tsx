import { GameResult } from "@/components/schedule/game-result";
import type { ScheduleGame } from "@/types/schedule";

export function ResultList({ games }: { games: readonly ScheduleGame[] }) {
  return (
    <div className="mt-6 border-t border-[var(--border)] pt-6">
      <h3 className="text-sm font-extrabold uppercase tracking-[0.1em] text-[var(--text-subtle)]">
        Games
      </h3>
      <ul className="mt-4">
        {games.map((game) => <GameResult key={game.id} game={game} />)}
      </ul>
    </div>
  );
}
