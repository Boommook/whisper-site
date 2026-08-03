import { Clock3, ExternalLink, MapPin } from "lucide-react";

import { formatGameDate, formatTime } from "@/lib/schedule-date";
import { getGameOutcome } from "@/lib/schedule";
import type { ScheduleGame } from "@/types/schedule";

const outcomeLabels = { win: "Win", loss: "Loss", tie: "Tie" } as const;

export function GameResult({ game }: { game: ScheduleGame }) {
  const outcome = getGameOutcome(game);

  return (
    <li className="grid gap-3 border-t border-[var(--border)] py-5 first:border-t-0 first:pt-0 last:pb-0 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:gap-6">
      <div className="min-w-0">
        {game.round ? (
          <p className="text-xs font-extrabold uppercase tracking-[0.1em] text-[var(--text-subtle)]">
            {game.round}
          </p>
        ) : null}
        <p className="mt-1 break-words font-heading text-lg font-black tracking-tight">
          <span className="sr-only">Opponent: </span>{game.opponent}
        </p>
        {game.date || game.startTime || game.field ? (
          <p className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-[var(--text-muted)]">
            {game.date ? <time dateTime={game.date}>{formatGameDate(game.date)}</time> : null}
            {game.startTime && game.timezone ? (
              <span className="inline-flex items-center gap-1.5">
                <Clock3 aria-hidden="true" className="size-3.5" />
                <time dateTime={game.startTime}>{formatTime(game.startTime, game.timezone)}</time>
              </span>
            ) : null}
            {game.field ? (
              <span className="inline-flex items-center gap-1.5">
                <MapPin aria-hidden="true" className="size-3.5" />{game.field}
              </span>
            ) : null}
          </p>
        ) : null}
        {game.resultNote ? <p className="mt-2 text-sm text-[var(--text-muted)]">{game.resultNote}</p> : null}
        {game.externalUrl ? (
          <a
            href={game.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex min-h-11 items-center gap-2 py-2 text-sm font-bold text-[var(--brand-primary)] underline decoration-2 decoration-transparent transition-colors hover:decoration-current focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--focus-ring)] motion-reduce:transition-none"
          >
            Game details <ExternalLink aria-hidden="true" className="size-4" />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        ) : null}
      </div>

      {game.status === "completed" && outcome ? (
        <div className="flex items-center justify-between gap-4 sm:justify-end" aria-label={`${outcomeLabels[outcome]}, Whisper ${game.whisperScore}, ${game.opponent} ${game.opponentScore}`}>
          <span className="rounded-full bg-[var(--brand-soft)] px-3 py-1 text-xs font-extrabold uppercase tracking-[0.08em] text-[var(--brand-primary)]">
            {outcomeLabels[outcome]}
          </span>
          <span aria-hidden="true" className="whitespace-nowrap font-heading text-2xl font-black tabular-nums">
            {game.whisperScore}–{game.opponentScore}
          </span>
        </div>
      ) : (
        <span className="text-sm font-bold text-[var(--text-muted)]">
          {game.status === "cancelled" ? "Game cancelled" : "Scheduled"}
        </span>
      )}
    </li>
  );
}
