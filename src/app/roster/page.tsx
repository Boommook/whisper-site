import type { Metadata } from "next";

import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { EmptyRosterState } from "@/components/roster/empty-roster-state";
import {
  LeadershipGrid,
  type PublicLeader,
} from "@/components/roster/leadership-grid";
import { RosterGrid } from "@/components/roster/roster-grid";
import { SeasonLabel } from "@/components/roster/season-label";
import { currentRoster, currentSeason, publicLeadership } from "@/data/roster";
import { validateRosterData } from "@/lib/validate-roster";

export const metadata: Metadata = {
  title: "WPI Whisper Roster",
  description:
    "View the public roster and team leadership for WPI Whisper men's club ultimate frisbee as approved information becomes available.",
};

validateRosterData({
  season: currentSeason,
  players: currentRoster,
  leadership: publicLeadership,
});

const activePlayers = currentRoster.filter((player) => player.status === "active");
const playerById = new Map(currentRoster.map((player) => [player.id, player]));
const leaders = publicLeadership
  .map((assignment) => ({
    assignment,
    player: playerById.get(assignment.playerId),
  }))
  .filter((leader): leader is PublicLeader => leader.player !== undefined)
  .sort((a, b) => (a.assignment.sortOrder ?? 100) - (b.assignment.sortOrder ?? 100));

export default function RosterPage() {
  return (
    <>
      <PageHeader
        eyebrow="WPI Whisper roster"
        title="The team behind every point."
        description="This page is the public home for approved current-player and student-leadership information for WPI Whisper's competitive team."
      />

      <Section className="py-[var(--space-section)]">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div>
            <SeasonLabel season={currentSeason} />
          </div>
          <div>
            <h2 className="max-w-2xl text-balance font-heading text-3xl font-black leading-tight tracking-[-0.04em] sm:text-4xl">
              Meet the current team.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--text-muted)]">
              This roster is reserved for current competitive-team players. Only information reviewed and approved for public display will appear here.
            </p>
          </div>
        </div>
      </Section>

      {leaders.length > 0 ? (
        <Section className="border-y border-[var(--border)] bg-[var(--surface-muted)] py-[var(--space-section)]">
          <SectionHeading
            eyebrow="Student leadership"
            title="Public team leadership."
            description="Leadership assignments shown here are linked to approved current-player records."
          />
          <div className="mt-10">
            <LeadershipGrid leaders={leaders} />
          </div>
        </Section>
      ) : null}

      <Section className="border-t border-[var(--border)] bg-[var(--surface-muted)] py-[var(--space-section)]">
        <SectionHeading
          eyebrow={currentSeason.label}
          title={currentSeason.rosterHeading}
          description="Approved current-player information will appear here when the team is ready to publish it."
        />
        <div className="mt-10">
          {activePlayers.length > 0 ? (
            <RosterGrid players={activePlayers} />
          ) : (
            <EmptyRosterState />
          )}
        </div>
      </Section>
    </>
  );
}
