import { ArrowRight, CalendarDays, CircleUserRound, UsersRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Callout } from "@/components/layout/callout";
import { Container } from "@/components/layout/container";
import { LinkCard } from "@/components/layout/link-card";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "WPI Whisper Men's Ultimate Frisbee",
  "Play ultimate at WPI through Whisper's intramural league or competitive men's team. Beginners are welcome.",
  "/",
);

const primaryPaths = [
  {
    title: "Join Us",
    description: "Find the way you want to play and get connected.",
    href: "/join",
    icon: UsersRound,
  },
  {
    title: "Meet the Team",
    description: "Meet the competitive-team roster.",
    href: "/roster",
    icon: CircleUserRound,
  },
  {
    title: "Schedule & Results",
    description: "See upcoming tournaments and past results.",
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
            <p className="eyebrow">Ultimate at WPI</p>
            <h1 className="mt-5 text-balance font-heading flex flex-col text-[clamp(3.5rem,11vw,7.75rem)] font-black leading-[0.84] tracking-[-0.02em] text-[var(--text-primary)]">
              <span className="whitespace-nowrap">Play fast.</span>
              <span className="whitespace-nowrap text-[var(--brand-primary)]">Build together.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-[var(--text-muted)] sm:text-xl sm:leading-9">
              Whisper is the home of men&apos;s ultimate at WPI, from our intramural league to our competitive college team. Never played before? You&apos;re welcome here.
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
                About Whisper
              </Link>
            </div>
          </div>
          <div aria-hidden="true" className="hidden lg:block" />
        </Container>
      </section>

      <Section className="py-[var(--space-section)]">
        <p className="eyebrow">Two ways to play</p>
        <div className="mt-8 grid items-center gap-10 lg:grid-cols-[minmax(12rem,0.7fr)_1.3fr] lg:gap-16">
          <div
            aria-hidden="true"
            className="relative mx-auto aspect-square w-full max-w-[18rem] lg:mx-0 lg:max-w-none"
          >
            <Image
              src="/img/goat-logo.png"
              alt=""
              fill
              sizes="18rem"
              unoptimized
              className="object-contain"
            />
          </div>
          <div>
            <h2 className="max-w-3xl text-balance font-heading text-3xl font-black leading-tight tracking-[-0.015em] sm:text-5xl">
              Play ultimate however you want.
            </h2>
            <div className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-muted)]">
              <h3 className="text-[var(--text-primary)] font-bold">Intramural League</h3> 
              <p>a low-pressure way to play, learn the game, and meet people. Open to all WPI students in fall and spring.</p>
            </div>
            <div className="mt-4 max-w-2xl text-lg leading-8 text-[var(--text-muted)]">
              <h3 className="text-[var(--text-primary)] font-bold">Competitive Team</h3> 
              <p>try out, practice, travel, and represent WPI against other colleges.</p>
            </div>
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
          eyebrow="Whisper"
          title="Jump in or follow along."
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
          title="Never played? That&apos;s completely fine."
          href="/join"
          linkLabel="Explore joining Whisper"
        >
        <p>
          Join the intramural league, try out for the competitive team, or come meet the community first.
        </p>
        </Callout>
      </Section>
    </>
  );
}
