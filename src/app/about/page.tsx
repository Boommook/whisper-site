import type { Metadata } from "next";
import {
  ArrowRight,
  Handshake,
  MessageSquare,
  Scale,
  Sprout,
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
    title: "Spirit of the Game",
    description:
      "Ultimate is self-refereed. Players are expected to compete hard while communicating fairly, respecting opponents, and owning calls on the field.",
    icon: Scale,
  },
  {
    title: "Improvement",
    description:
      "The club exists to educate and train students in ultimate. Practices and competition create room for beginners and experienced players to develop together.",
    icon: Sprout,
  },
  {
    title: "Teamwork",
    description:
      "Strong culture means working hard and staying close as teammates—through wins, losses, practices, and the everyday work of building a program.",
    icon: Handshake,
  },
  {
    title: "Communication",
    description:
      "Clear expectations and open communication help players with different schedules and experience levels stay engaged and contribute meaningfully.",
    icon: MessageSquare,
  },
] as const;

const clubExperience = [
  {
    label: "Fall league",
    text: "A larger, more casual league gives students a welcoming place to play, learn, and stay involved. It is open to club members and can support PE and Wellness credit when registration slots are available.",
  },
  {
    label: "Competitive team",
    text: "The competitive team holds tryouts in the fall and rosters players who want to compete against other schools. The main USAU college season is in the spring, with a couple of tournaments or games in the fall as well. Athletic backgrounds are welcome even without prior ultimate experience.",
  },
  {
    label: "Practice & competition",
    text: "The competitive team practices twice a week in the fall and spring. Exact times and venues change with field availability each term.",
  },
  {
    label: "Student leadership",
    text: "Whisper is student-run. An elected executive board organizes the club, and coaches help mentor the competitive team through practices, strategy, and competition.",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About WPI Whisper"
        title="A student-run club sport built around ultimate."
        description="Whisper is Worcester Polytechnic Institute's men's club ultimate frisbee team. The club educates and trains WPI students in the sport and competes against other schools."
        backgroundImage="/img/whisper-about.jpeg"
        photoCredit={{
          name: "Luca Makarushka-Napp",
          href: "https://photo-makanapp.com/",
        }}
      />

      <Section className="py-[var(--space-section)]">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <SectionHeading eyebrow="Team identity" title="Club sport. Shared purpose." />
          <div className="max-w-2xl space-y-5 text-lg leading-8 text-[var(--text-muted)]">
            <p>
              Whisper is a student-run club sport at WPI. Membership is open to currently enrolled students who want to play ultimate in an organized setting—whether that means the competitive team, a more casual league experience, or both.
            </p>
            <p>
              The program balances competition with community. Players learn the game, support one another, and build a team environment that works for dedicated competitors and students balancing other commitments.
            </p>
          </div>
        </div>
      </Section>

      <Section className="border-y border-[var(--border)] bg-[var(--surface-muted)] py-[var(--space-section)]">
        <SectionHeading
          eyebrow="Team culture"
          title="Principles that guide how Whisper plays."
          description="These expectations shape participation on and off the field. They describe the culture the team works to uphold, not a claim of perfection."
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
            title="How participation works."
            description="Whisper includes both a competitive team and a broader league experience for WPI students."
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
            <p className="eyebrow">Membership</p>
            <h2 className="mt-3 font-heading text-3xl font-black tracking-[-0.035em]">
              Open to WPI students.
            </h2>
            <p className="mt-4 leading-7 text-[var(--text-muted)]">
              Any currently enrolled WPI student may join the club. The Worcester Polytechnic Institute Ultimate Frisbee Club does not discriminate in membership or activities on the basis of race, creed, gender, age, nationality, disability, marital status, or sexual orientation.
            </p>
          </article>
          <article className="border-t-2 border-[var(--brand-primary)] pt-6">
            <p className="eyebrow">Leadership</p>
            <h2 className="mt-3 font-heading text-3xl font-black tracking-[-0.035em]">
              Led by an elected student board.
            </h2>
            <p className="mt-4 leading-7 text-[var(--text-muted)]">
              Rostered competitive-team members elect an executive board that includes a president, vice president, treasurer, secretary, and public relations chair. Coaches support the competitive team with practice planning, development, and competition. Reach out through the contact page for team inquiries.
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
          title="Find your place with Whisper."
          href="/join"
          linkLabel="Join Whisper"
        >
          <p>
            Ready to play? Head to Join for pathways into the club, or browse the roster to see who makes up the team.
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
