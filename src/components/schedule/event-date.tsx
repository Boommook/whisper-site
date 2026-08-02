import { CalendarDays, Clock3 } from "lucide-react";

import { formatEventDate, formatTime } from "@/lib/schedule-date";

type EventDateProps = {
  startDate: string;
  endDate?: string;
  startTime?: string;
  timezone?: string;
};

export function EventDate({ startDate, endDate, startTime, timezone }: EventDateProps) {
  const isRange = endDate !== undefined && endDate !== startDate;

  return (
    <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-[var(--text-muted)]">
      <span className="inline-flex items-center gap-2">
        <CalendarDays aria-hidden="true" className="size-4 shrink-0 text-[var(--brand-primary)]" />
        {isRange ? (
          <>
            <span aria-hidden="true">{formatEventDate(startDate, endDate)}</span>
            <span className="sr-only">
              From <time dateTime={startDate}>{formatEventDate(startDate)}</time> to{" "}
              <time dateTime={endDate}>{formatEventDate(endDate)}</time>
            </span>
          </>
        ) : (
          <time dateTime={startDate}>{formatEventDate(startDate)}</time>
        )}
      </span>
      {startTime && timezone ? (
        <span className="inline-flex items-center gap-2">
          <Clock3 aria-hidden="true" className="size-4 shrink-0 text-[var(--brand-primary)]" />
          <time dateTime={startTime}>{formatTime(startTime, timezone)}</time>
        </span>
      ) : null}
    </div>
  );
}
