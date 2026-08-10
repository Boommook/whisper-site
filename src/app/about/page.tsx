import {
  ArrowRight,
  Handshake,
  MessageSquare,
  Scale,
  Sprout,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Callout } from "@/components/layout/callout";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { ValueCard } from "@/components/layout/value-card";
import { buttonVariants } from "@/components/ui/button";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "About",
  "Meet WPI Whisper, the student-run home of men's ultimate at WPI.",
  "/about",
);

const values = [
  {
    title: "Spirit of the Game",
    description:
      "Compete hard. Make fair calls. Respect the people across from you.",
    icon: Scale,
  },
  {
    title: "Improvement",
    description:
      "We help each other get better, whether it is your first throw or your hundredth game.",
    icon: Sprout,
  },
  {
    title: "Teamwork",
    description:
      "We work for each other on the field and show up for each other off it.",
    icon: Handshake,
  },
  {
    title: "Communication",
    description:
      "We speak clearly, listen, and keep our teammates in the loop.",
    icon: MessageSquare,
  },
] as const;

const clubExperience = [
  {
    label: "Intramural Ultimate",
    text: "Our fall and spring league is open to all WPI students, regardless of gender. It is beginner-friendly, social, and lower-pressure; PE and Wellness credit may be available when registration slots are open.",
  },
  {
    label: "Competitive Ultimate",
    text: "Our men's team holds tryouts in the fall, generally practices Tuesday and Thursday evenings, and competes against other colleges. The main USAU season is in spring, with some competition in fall.",
  },
  {
    label: "One club",
    text: "Some students play intramurals, some compete, and some do both. Both are real parts of the Whisper community.",
  },
  {
    label: "Student leadership",
    text: "An elected student board runs the club. Coaches lead the competitive team at practices and tournaments.",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About WPI Whisper"
        title="The home of men&apos;s ultimate at WPI."
        description="We run an intramural league and a competitive college team. You can play one, both, or just start by meeting the community."
        backgroundImage="/img/whisper-about.jpeg"
        photoCredit={{
          name: "Luca Makarushka-Napp",
          href: "https://photo-makanapp.com/",
        }}
      />

      <Section className="py-[var(--space-section)]">
        <p className="eyebrow">About Whisper</p>
        <div className="mt-3 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:items-start">
          <div>
            <h2 className="max-w-2xl text-balance font-heading text-3xl font-black leading-tight tracking-[-0.015em] text-[var(--text-primary)] sm:text-4xl">
              Ultimate built by WPI students.
            </h2>
            <div className="mt-8 w-60">
              <Image
                src="/img/WPIAthleticsLogo.png"
                alt="Worcester Polytechnic Institute Athletics Logo"
                width={1080}
                height={403}
                sizes="240px"
                className="h-auto w-full in-data-[theme=dark]:invert"
              />
            </div>
          </div>
          <div className="max-w-2xl space-y-5 text-lg leading-8 text-[var(--text-muted)]">
            <p>
              Whisper brings together WPI students who want to play ultimate. We welcome complete beginners, experienced players, and everyone in between. You will also find us tossing on the quad a lot, feel free to join us!
            </p>
          </div>
        </div>
      </Section>

      <Section className="border-y border-[var(--border)] bg-[var(--surface-muted)] py-[var(--space-section)]">
        <SectionHeading
          eyebrow="Team culture"
          title="What Whisper stands for."
          description="How we try to show up for the game and for each other."
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
            eyebrow="Two ways to play"
            title="Choose what works for you."
            description="Intramural and competitive ultimate share one community."
            className="w-fit text-nowrap"
          />
          <ol className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
            {clubExperience.map((item, index) => (
              <li key={item.label} className="grid gap-3 py-6 sm:grid-cols-[3rem_10rem_1fr] sm:items-start">
                <span className="font-heading text-sm font-black text-[var(--brand-primary)]" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-heading text-lg font-black ">{item.label}</h3>
                <p className="leading-7 text-[var(--text-muted)]">{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section className="border-y border-[var(--border)] bg-[var(--surface-muted)] py-[var(--space-section)]">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20 lg:items-start">
          <SectionHeading
            eyebrow="Competitive team life"
            title="More than practices and tournaments."
            description="The competitive team hangs out off the field too."
          />
          <div className="max-w-2xl space-y-5 text-lg leading-8 text-[var(--text-muted)]">
            <p>
              Beyond twice-weekly practices and college competition, the competitive team builds community through occasional parties and hangouts, a team formal, and other social events through the year.
            </p>
            <p>
              Players also field an intramural basketball team together—another way teammates stay connected when ultimate season is quiet.
            </p>
          </div>
        </div>
      </Section>

      <Section className="py-[var(--space-section)]">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-20">
          <article className="border-t-2 border-[var(--brand-primary)] pt-6">
            <p className="eyebrow">Membership</p>
            <h2 className="mt-3 font-heading text-3xl font-black tracking-[-0.015em]">
              Open to WPI students.
            </h2>
            <p className="mt-4 leading-7 text-[var(--text-muted)]">
              The intramural league is open to every currently enrolled WPI student, regardless of gender. The competitive men&apos;s team fills its roster through tryouts. 
            </p>
          </article>
          <article className="border-t-2 border-[var(--brand-primary)] pt-6">
            <p className="eyebrow">Leadership</p>
            <h2 className="mt-3 font-heading text-3xl font-black tracking-[-0.015em]">
              Led by an elected student board.
            </h2>
            <p className="mt-4 leading-7 text-[var(--text-muted)]">
              Competitive-team players elect our executive board. Coaches lead the competitive team through practices and competition.
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
            Ready to play? See the intramural and competitive options on the Join page.
          </p>
          <Link
            href="/roster"
            className={buttonVariants({
              variant: "ghost",
              className:
                "mt-4 inline-flex min-h-11 items-center px-0! bg-none hover:bg-transparent  py-2 text-sm font-bold text-[var(--brand-primary)] underline decoration-2 decoration-transparent transition-colors hover:decoration-current focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--focus-ring)] motion-reduce:transition-none",
            })}
          >
            View the roster
          </Link>
        </Callout>
      </Section>
    </>
  );
}
