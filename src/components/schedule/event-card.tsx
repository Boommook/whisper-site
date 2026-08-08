import { ChevronDown, ExternalLink, MapPin } from "lucide-react";

import { EventDate } from "@/components/schedule/event-date";
import { EventStatusBadge } from "@/components/schedule/event-status-badge";
import { ResultList } from "@/components/schedule/result-list";
import type { ScheduleEvent } from "@/types/schedule";

const typeLabels: Record<ScheduleEvent["type"], string> = {
  tournament: "Tournament",
  game: "Game",
  scrimmage: "Scrimmage",
  other: "Team event",
};

export function EventCard({
  event,
  collapseResults = false,
}: {
  event: ScheduleEvent;
  collapseResults?: boolean;
}) {
  const eventSummary = (
    <>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-[var(--brand-primary)]">
              {typeLabels[event.type]}
            </p>
            <h3 className="mt-2 break-words text-balance font-heading text-2xl font-black leading-tight tracking-[-0.015em] sm:text-3xl">
              {event.name}
            </h3>
          </div>
          <div className="shrink-0"><EventStatusBadge status={event.status} /></div>
        </div>

        <div className="mt-5"><EventDate {...event} /></div>

        {event.locationName || event.location ? (
          <p className="mt-4 flex items-start gap-2 text-sm text-[var(--text-muted)]">
            <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-[var(--brand-primary)]" />
            <span>
              {event.locationName ? <strong className="text-[var(--text-primary)]">{event.locationName}</strong> : null}
              {event.locationName && event.location ? " · " : null}
              {event.location}
            </span>
          </p>
        ) : null}

        {event.description ? <p className="mt-5 max-w-3xl leading-7 text-[var(--text-muted)]">{event.description}</p> : null}

        {event.externalUrl ? (
          <a
            href={event.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex min-h-11 items-center gap-2 py-2 text-sm font-bold text-[var(--brand-primary)] underline decoration-2 decoration-transparent transition-colors hover:decoration-current focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--focus-ring)] motion-reduce:transition-none"
          >
            View event details <ExternalLink aria-hidden="true" className="size-4" />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        ) : null}
    </>
  );

  const eventResults = (
    <>
        {event.games && event.games.length > 0 ? <ResultList games={event.games} /> : null}
        {event.status === "completed" && (!event.games || event.games.length === 0) ? (
          <p className="mt-6 border-t border-[var(--border)] pt-5 text-sm text-[var(--text-muted)]">
            This event is complete. No game-level results are available for public display.
          </p>
        ) : null}
    </>
  );

  return (
    <article className="overflow-hidden rounded-[var(--radius-panel)] border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-soft)]">
      <div className="h-1 bg-[var(--brand-primary)]" aria-hidden="true" />
      {collapseResults ? (
        <details className="group">
          <summary className="cursor-pointer list-none p-6 transition-colors hover:bg-[var(--surface-muted)] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[var(--focus-ring)] sm:p-8 [&::-webkit-details-marker]:hidden">
            {eventSummary}
            <span className="mt-6 flex min-h-11 items-center justify-between gap-4 border-t border-[var(--border)] pt-5 text-sm font-extrabold uppercase tracking-[0.1em] text-[var(--brand-primary)]">
              <span className="group-open:hidden">{event.games?.length ? "Show games" : "Show result details"}</span>
              <span className="hidden group-open:inline">Hide games</span>
              <ChevronDown
                aria-hidden="true"
                className="size-5 shrink-0 transition-transform group-open:rotate-180 motion-reduce:transition-none"
              />
            </span>
          </summary>
          <div className="px-6 pb-6 sm:px-8 sm:pb-8">{eventResults}</div>
        </details>
      ) : (
        <div className="p-6 sm:p-8">
          {eventSummary}
          {eventResults}
        </div>
      )}
    </article>
  );
}
