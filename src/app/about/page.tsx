import type { Metadata } from "next";
import {
  ArrowRight,
  CircleGauge,
  Handshake,
  Sprout,
  UsersRound,
} from "lucide-react";
import Link from "next/link";

import { Callout } from "@/components/layout/callout";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { ValueCard } from "@/components/layout/value-card";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About WPI Whisper",
  description:
    "Learn about WPI Whisper, the men's club ultimate frisbee team at Worcester Polytechnic Institute.",
};

const values = [
  {
    title: "Competition",
    description:
      "An organized team environment gives players a shared reason to prepare, communicate, and compete.",
    icon: CircleGauge,
  },
  {
    title: "Improvement",
    description:
      "The team experience creates room to develop individual skills and learn how to contribute within a group.",
    icon: Sprout,
  },
  {
    title: "Teamwork",
    description:
      "Ultimate depends on trust, clear communication, and a commitment to the people sharing the field.",
    icon: Handshake,
  },
  {
    title: "Community",
    description:
      "A student club can connect WPI students through practices, competition, and time spent building a team together.",
    icon: UsersRound,
  },
] as const;

const clubExperience = [
  {
    label: "Practice",
    text: "Team practices provide structured time to work on individual fundamentals and coordinated play. Exact schedules are pending team approval.",
  },
  {
    label: "Competition",
    text: "Tournament participation gives the team opportunities to apply its preparation in organized ultimate. Confirmed events will be published on the schedule page.",
  },
  {
    label: "Development",
    text: "Players contribute to a team environment centered on learning, communication, and steady improvement.",
  },
  {
    label: "Student leadership",
    text: "Whisper is student-led. Approved officer and captain information will be added after publication details are confirmed.",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About WPI Whisper"
        title="A student team built around ultimate."
        description="Whisper is Worcester Polytechnic Institute's men's club ultimate frisbee team, providing WPI students with an organized environment to play, compete, improve, and build community."
      />

      <Section className="py-[var(--space-section)]">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <SectionHeading eyebrow="Team identity" title="Club sport. Shared purpose." />
          <div className="max-w-2xl space-y-5 text-lg leading-8 text-[var(--text-muted)]">
            <p>
              Whisper represents WPI through men&apos;s club ultimate frisbee. As a student team, it offers an organized setting for players to practice, compete, and work toward common goals.
            </p>
            <p>
              The club experience extends beyond individual play. It asks students to develop skills, communicate under pressure, support teammates, and contribute to the community they build together.
            </p>
            <p className="border-l-2 border-[var(--accent)] pl-5 text-base italic leading-7 text-[var(--text-subtle)]">
              Whisper is a club sport and student team; this site does not present it as an NCAA varsity program.
            </p>
          </div>
        </div>
      </Section>

      <Section className="border-y border-[var(--border)] bg-[var(--surface-muted)] py-[var(--space-section)]">
        <SectionHeading
          eyebrow="Program character"
          title="What the team works to bring to the field."
          description="These grounded principles describe the kind of team environment Whisper aims to support; they are not claims of measured outcomes."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <ValueCard key={value.title} {...value} />
          ))}
        </div>
      </Section>

      <Section className="py-[var(--space-section)]">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <SectionHeading
            eyebrow="The club experience"
            title="How the team operates."
            description="Specific schedules, costs, and competition dates will be published only after they are confirmed."
          />
          <ol className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
            {clubExperience.map((item, index) => (
              <li key={item.label} className="grid gap-3 py-6 sm:grid-cols-[3rem_10rem_1fr] sm:items-start">
                <span className="font-heading text-sm font-black text-[var(--brand-primary)]" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-heading text-lg font-black tracking-tight">{item.label}</h3>
                <p className="leading-7 text-[var(--text-muted)]">{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section className="border-y border-[var(--border)] bg-[var(--surface)] py-[var(--space-section)]">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-20">
          <article className="border-t-2 border-[var(--brand-primary)] pt-6">
            <p className="eyebrow">Team history</p>
            <h2 className="mt-3 font-heading text-3xl font-black tracking-[-0.035em]">
              The record is being assembled.
            </h2>
            <p className="mt-4 leading-7 text-[var(--text-muted)]">
              Whisper&apos;s full team history is currently being compiled with current players and alumni. Verified dates, milestones, and source material will be added after review.
            </p>
          </article>
          <article className="border-t-2 border-[var(--brand-primary)] pt-6">
            <p className="eyebrow">Leadership</p>
            <h2 className="mt-3 font-heading text-3xl font-black tracking-[-0.035em]">
              Led by WPI students.
            </h2>
            <p className="mt-4 leading-7 text-[var(--text-muted)]">
              Whisper is student-led. Names and roles are not yet approved for publication, but visitors can use the contact page as team contact information becomes available.
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-flex min-h-11 items-center gap-2 py-2 text-sm font-bold text-[var(--brand-primary)] underline decoration-2 decoration-transparent transition-colors hover:decoration-current focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--focus-ring)] motion-reduce:transition-none"
            >
              Contact the team
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </article>
        </div>
      </Section>

      <Section className="py-[var(--space-section)]">
        <Callout
          eyebrow="Your next step"
          title="See where you fit into the team."
          href="/join"
          linkLabel="Join Whisper"
        >
          <p>
            Explore the path for students interested in playing, or continue to the roster area as approved team information becomes available.
          </p>
          <Link
            href="/roster"
            className={buttonVariants({
              variant: "ghost",
              className:
                "mt-4 min-h-0 justify-start p-0 text-white underline decoration-white/30 hover:bg-transparent hover:text-white hover:decoration-white focus-visible:outline-white",
            })}
          >
            View the roster
          </Link>
        </Callout>
      </Section>
    </>
  );
}
