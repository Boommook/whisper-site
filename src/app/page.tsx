import type { Metadata } from "next";
import { ArrowRight, CalendarDays, CircleUserRound, UsersRound } from "lucide-react";
import Link from "next/link";

import { Callout } from "@/components/layout/callout";
import { Container } from "@/components/layout/container";
import { LinkCard } from "@/components/layout/link-card";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "WPI Whisper Men's Ultimate Frisbee",
  description:
    "WPI Whisper is Worcester Polytechnic Institute's men's club ultimate frisbee team. Learn about the team and how to get involved.",
};

const primaryPaths = [
  {
    title: "Join Whisper",
    description:
      "See how WPI students get involved, from casual play to the competitive team.",
    href: "/join",
    icon: UsersRound,
  },
  {
    title: "Meet the Team",
    description: "Browse the roster of players who practice and compete with Whisper.",
    href: "/roster",
    icon: CircleUserRound,
  },
  {
    title: "Schedule & Results",
    description: "Find tournaments, games, and results across Whisper's fall and spring season.",
    href: "/schedule",
    icon: CalendarDays,
  },
] as const;

export default function HomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-[var(--border)] bg-[var(--surface)]">
        <div className="hero-field" aria-hidden="true">
          <span className="hero-field__line" />
          <span className="hero-field__disc" />
          <span className="hero-field__arc" />
        </div>
        <Container className="relative grid min-h-[calc(100svh-var(--header-height))] items-center py-16 sm:py-20 lg:grid-cols-[minmax(0,1.05fr)_minmax(20rem,.65fr)] lg:gap-16 lg:py-24">
          <div className="relative z-10 max-w-4xl">
            <p className="eyebrow">WPI men&apos;s club ultimate frisbee</p>
            <h1 className="mt-5 text-balance font-heading text-[clamp(3.5rem,11vw,7.75rem)] font-black leading-[0.84] tracking-[-0.065em] text-[var(--text-primary)]">
              Play fast.
              <span className="block text-[var(--brand-primary)]">Build together.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-[var(--text-muted)] sm:text-xl sm:leading-9">
              WPI Whisper is Worcester Polytechnic Institute&apos;s men&apos;s club ultimate frisbee team—a student-run program for players who want to learn, compete, and grow with teammates.
            </p>
            <div className="mt-8 flex flex-col gap-3 min-[400px]:flex-row min-[400px]:items-center">
              <Link href="/join" className={buttonVariants({ className: "w-full min-[400px]:w-auto" })}>
                Join Whisper
                <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
              <Link
                href="/about"
                className={buttonVariants({
                  variant: "secondary",
                  className: "w-full min-[400px]:w-auto",
                })}
              >
                Learn about the team
              </Link>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="relative mx-auto mt-14 hidden aspect-square w-full max-w-md lg:block"
          >
            <div className="absolute inset-[12%] rounded-full border-[clamp(2rem,4vw,4.5rem)] border-[var(--brand-soft)]" />
            <div className="absolute inset-[29%] rounded-full border border-[var(--brand-primary)]/25" />
            <div className="absolute right-[7%] top-[20%] h-px w-[70%] -rotate-[28deg] bg-[var(--brand-primary)]/35" />
          </div>
        </Container>
      </section>

      <Section className="py-[var(--space-section)]">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start lg:gap-20">
          <p className="eyebrow lg:pt-2">The team</p>
          <div>
            <h2 className="max-w-3xl text-balance font-heading text-3xl font-black leading-tight tracking-[-0.04em] sm:text-5xl">
              Train together. Compete with purpose. Welcome every skill level.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-muted)]">
              Whisper exists to educate and train WPI students in ultimate frisbee, with room for both a competitive team and a more casual league experience. Prior ultimate experience helps, but it is not required—athletes who are ready to learn are a common and welcome part of the team.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex min-h-11 items-center gap-2 py-2 text-sm font-bold text-[var(--brand-primary)] underline decoration-2 decoration-transparent transition-colors hover:decoration-current focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--focus-ring)] motion-reduce:transition-none"
            >
              More about Whisper
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
        </div>
      </Section>

      <Section className="border-y border-[var(--border)] bg-[var(--surface)] py-[var(--space-section)]">
        <SectionHeading
          eyebrow="Find your route"
          title="Start with what matters to you."
          description="Whether you want to join, follow the roster, or check the season schedule, these paths get you there."
        />
        <div className="mt-10 grid gap-8 md:grid-cols-3 md:gap-6 lg:gap-10">
          {primaryPaths.map((path) => (
            <LinkCard key={path.href} {...path} />
          ))}
        </div>
      </Section>

      <Section className="py-[var(--space-section)]">
        <Callout
          eyebrow="Interested in playing?"
          title="All skill levels are welcome."
          href="/join"
          linkLabel="Explore joining Whisper"
        >
          <p>
            Membership is open to currently enrolled WPI students. Start with the Join page to learn how fall league, tryouts, and the competitive team fit together—and how to take the next step.
          </p>
        </Callout>
      </Section>
    </>
  );
}
