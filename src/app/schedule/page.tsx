import { CalendarRange } from "lucide-react";
import type { Metadata } from "next";

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

export const metadata: Metadata = {
  title: "WPI Whisper Schedule & Results",
  description:
    "Find upcoming WPI Whisper events and verified game results as public schedule information becomes available.",
};

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
        title="Every event. Every verified result."
        description="Follow WPI Whisper's upcoming competition and review completed events in one clear season view."
      />

      <Section className="py-[var(--space-section)]">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div>
            <div className="inline-flex min-h-10 items-center gap-2 border-l-2 border-[var(--brand-primary)] bg-[var(--surface-muted)] px-3 py-2 text-sm font-bold">
              <CalendarRange aria-hidden="true" className="size-4 text-[var(--brand-primary)]" />
              <span>{scheduleSeason.label}</span>
            </div>
            {hasResults ? (
              <p className="mt-4 text-sm font-bold text-[var(--text-muted)]">
                Season record{" "}
                <span className="font-heading text-2xl font-black tabular-nums text-[var(--text-primary)]">
                  {seasonRecord.wins}–{seasonRecord.losses}
                  {seasonRecord.ties > 0 ? `–${seasonRecord.ties}` : ""}
                </span>
                {seasonRecord.ties > 0 ? " (W–L–T)" : " (W–L)"}
              </p>
            ) : null}
          </div>
          <div>
            <h2 className="max-w-2xl text-balance font-heading text-3xl font-black leading-tight tracking-[-0.04em] sm:text-4xl">
              Plan ahead. Catch up afterward.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--text-muted)]">
              {scheduleSeason.description ?? "Event details and verified results are organized by season."}
            </p>
          </div>
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
              eyebrow="On the calendar"
              title="Upcoming events"
              description="Scheduled competition, tentative plans, and important event updates appear here in date order."
            />
            <div className="mt-10 grid gap-6">
              {upcomingEvents.length > 0 ? upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              )) : <SectionEmptyState>There are no upcoming public events on the calendar.</SectionEmptyState>}
            </div>
          </Section>

          <Section className="border-t border-[var(--border)] py-[var(--space-section)]">
            <SectionHeading
              eyebrow="Final whistle"
              title="Past events & results"
              description="Completed events include verified scores. Other past events retain their latest published status."
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
