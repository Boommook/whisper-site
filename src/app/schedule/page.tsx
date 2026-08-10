import { CalendarRange } from "lucide-react";

import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { EventCard } from "@/components/schedule/event-card";
import { ScheduleEmptyState } from "@/components/schedule/schedule-empty-state";
import { SectionEmptyState } from "@/components/schedule/section-empty-state";
import { scheduleEvents, scheduleSeason } from "@/data/schedule";
import { getSeasonRecord, sortPastEvents, sortUpcomingEvents } from "@/lib/schedule";
import { getCurrentDateInTimeZone } from "@/lib/schedule-date";
import { validateScheduleData } from "@/lib/validate-schedule";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Schedule & Results",
  "See WPI Whisper's upcoming tournaments and results for the current competitive season.",
  "/schedule",
);

validateScheduleData({ season: scheduleSeason, events: scheduleEvents });

const seasonRecord = getSeasonRecord(scheduleEvents);
const hasResults = seasonRecord.wins + seasonRecord.losses + seasonRecord.ties > 0;

export const revalidate = 3600;

export default function SchedulePage() {
  const today = getCurrentDateInTimeZone("America/New_York");
  const upcomingEvents = sortUpcomingEvents(scheduleEvents, today);
  const pastEvents = sortPastEvents(scheduleEvents, today);
  return (
    <>
      <PageHeader
        eyebrow="Schedule & results"
        title="Every tournament. Every result."
        description="The competitive team&apos;s current season at a glance."
      />

      <Section className="py-[var(--space-section)]">
        <div className="grid items-start gap-x-10 gap-y-5 lg:grid-cols-[0.72fr_1.28fr] lg:gap-x-20">
          <div className="inline-flex w-fit min-h-10 items-center gap-2 border-l-2 border-[var(--brand-primary)] bg-[var(--surface-muted)] px-3 py-2 text-sm font-bold lg:col-start-1 lg:row-start-1">
            <CalendarRange aria-hidden="true" className="size-4 text-[var(--brand-primary)]" />
            <span>{scheduleSeason.label}</span>
          </div>
          {hasResults ? (
            <p className="text-sm font-bold text-[var(--text-muted)] lg:col-start-1 lg:row-start-2">
              Season record{" "}
              <span className="font-heading text-2xl font-black tabular-nums text-[var(--text-primary)]">
                {seasonRecord.wins}–{seasonRecord.losses}
                {seasonRecord.ties > 0 ? `–${seasonRecord.ties}` : ""}
              </span>
              {seasonRecord.ties > 0 ? " (W–L–T)" : " (W–L)"}
            </p>
          ) : null}
          <h2 className="max-w-2xl text-balance font-heading text-3xl font-black leading-tight tracking-[-0.015em] sm:text-4xl lg:col-start-2 lg:row-start-1">
            {hasResults ? "Season record" : "Current season"}
          </h2>
          <p className="max-w-2xl text-lg leading-8 text-[var(--text-muted)] lg:col-start-2 lg:row-start-2">
            {scheduleSeason.description ?? "Upcoming tournaments and past results."}
          </p>
        </div>
      </Section>

      {scheduleEvents.length === 0 ? (
        <Section className="border-t border-[var(--border)] bg-[var(--surface-muted)] py-[var(--space-section)]">
          <ScheduleEmptyState />
        </Section>
      ) : (
        <>
          <Section className="border-t border-[var(--border)] bg-[var(--surface-muted)] py-[var(--space-section)]">
            <SectionHeading
              eyebrow="Up next"
              title="Upcoming events"
            />
            <div className="mt-10 grid gap-6">
              {upcomingEvents.length > 0 ? upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              )) : <SectionEmptyState>There are no upcoming public events on the calendar.</SectionEmptyState>}
            </div>
          </Section>

          <Section className="border-t border-[var(--border)] py-[var(--space-section)]">
            <SectionHeading
              eyebrow="In the books"
              title="Past events & results"
            />
            <div className="mt-10 grid gap-6">
              {pastEvents.length > 0 ? pastEvents.map((event) => (
                <EventCard key={event.id} event={event} collapseResults={event.type === "tournament"} />
              )) : <SectionEmptyState>No past events or public results are available yet.</SectionEmptyState>}
            </div>
          </Section>
        </>
      )}
    </>
  );
}
