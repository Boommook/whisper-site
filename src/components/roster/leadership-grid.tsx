import type { LeadershipAssignment, PublicPlayer } from "@/types/roster";

export type PublicLeader = Readonly<{
  assignment: LeadershipAssignment;
  player: PublicPlayer;
}>;

export function LeadershipGrid({ leaders }: { leaders: readonly PublicLeader[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {leaders.map(({ assignment, player }) => (
        <article
          key={`${assignment.playerId}:${assignment.role}`}
          className="border-l-2 border-[var(--accent)] bg-[var(--surface)] p-5 shadow-[var(--shadow-soft)]"
        >
          <p className="text-xs font-extrabold uppercase tracking-[0.1em] text-[var(--brand-primary)]">
            {assignment.role}
          </p>
          <h3 className="mt-2 font-heading text-xl font-black tracking-tight">
            {player.displayName}
          </h3>
          {player.classYear !== undefined ? (
            <p className="mt-1 text-sm text-[var(--text-muted)]">Class of {player.classYear}</p>
          ) : null}
        </article>
      ))}
    </div>
  );
}
