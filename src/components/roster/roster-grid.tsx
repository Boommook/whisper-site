import { PlayerCard } from "@/components/roster/player-card";
import type { PublicPlayer } from "@/types/roster";

export function RosterGrid({ players }: { players: readonly PublicPlayer[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {players.map((player) => (
        <PlayerCard key={player.id} player={player} />
      ))}
    </div>
  );
}
