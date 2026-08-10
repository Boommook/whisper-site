import { ArrowRight, CheckCircle2, Instagram, Slack } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { ActionLink } from "@/components/communications/action-link";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { publicRecruitmentActions, publicSocialLinks } from "@/config/communications";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "How to Play Ultimate at WPI",
  "Join WPI ultimate through the intramural league or competitive men's team. Beginners are welcome.",
  "/join",
);

const action = (id: string) => publicRecruitmentActions.find((item) => item.id === id);
const tryoutAction = action("fall-2026-tryouts");
const interestAction = action("fall-2026-interest");
const slackAction = action("wpi-frisbee-slack");
const instagram = publicSocialLinks.find((item) => item.id === "instagram");

const expectations = [
  ["New players", "Never played ultimate? That's completely fine."],
  ["Intramural season", "The league runs in fall and spring and is open to all WPI students."],
  ["Competitive season", "The team practices twice a week in fall and spring. Its main college season is in spring, with some fall competition."],
  ["What to bring", "Check Slack or the signup forms for current equipment and field details."],
  ["Time", "Intramural and competitive ultimate have different commitments. Ask for the current schedule before deciding."],
  ["Costs", "Current costs are shared before you commit."],
] as const;

const faqs = [
  ["Which Fall 2026 forms do I need?", "For competitive tryouts, complete both the interest form and tryout form. For intramurals—or if you are not sure yet—complete the interest form."],
  ["Who can join the intramural league vs. the competitive team?", "The intramural league is open to all WPI students regardless of gender and runs in both fall and spring. The competitive team is men's only and fills its roster through tryouts."],
  ["Do I need ultimate experience?", "No. Beginners are welcome in intramurals and at competitive tryouts."],
  ["When does the team practice?", "The competitive team generally practices twice a week in fall and spring. Exact days, times, and locations are confirmed each season through team communication."],
  ["What should I bring?", "Check the forms or Slack before you come. What you need depends on the session and field conditions."],
  ["How much does it cost?", "Costs can change by season. We will share current costs before you commit."],
  ["Should I join Slack?", "Yes. It is the easiest way to meet the frisbee community and get current details. You still need both forms if you plan to try out."],
] as const;

export default function JoinPage() {
  return (
    <>
      <PageHeader eyebrow="Join Whisper" title="How to play ultimate at WPI." description="Join the intramural league, try out for the competitive team, or meet the community while you decide." />

      <Section className="py-[var(--space-section)]">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <SectionHeading eyebrow="How do you want to play?" title="Two options. One community." description="Intramurals are open to all WPI students. The competitive men’s team holds tryouts each fall." />
            <div className="relative mt-7 h-20 w-52 overflow-hidden">
              <Image
                src="/img/WPIAthleticsLogo.png"
                alt="WPI Athletics"
                fill
                sizes="208px"
                className="scale-125 object-contain"
              />
            </div>
          </div>
          <div className="border-l-4 border-[var(--brand-primary)] bg-[var(--surface)] p-7 sm:p-9">
            <h3 className="font-heading text-2xl font-black">New to ultimate?</h3>
            <p className="mt-4 text-lg leading-8 text-[var(--text-muted)]">You do not need experience to join the intramural league or come to competitive tryouts. We will help you learn.</p>
            <Link href="/about" className="mt-5 inline-flex min-h-11 items-center gap-2 font-bold text-[var(--brand-primary)] underline decoration-2 decoration-transparent hover:decoration-current focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--focus-ring)]">Learn about Whisper <ArrowRight aria-hidden="true" className="size-4" /></Link>
          </div>
        </div>
      </Section>

      <Section className="border-y border-[var(--border)] bg-[var(--surface-muted)] py-[var(--space-section)]">
        <SectionHeading eyebrow="Fall 2026" title="Choose how you want to get involved." description="Intramurals or not sure yet? Complete the interest form. Competitive tryouts? Complete both forms." />
        <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-2">
          {interestAction ? (
            <article className="flex flex-col rounded-[var(--radius-panel)] border bg-[var(--surface)] p-7 sm:p-9">
              <p className="eyebrow">Intramural League</p>
              <h3 className="mt-3 font-heading text-3xl font-black">Play casually</h3>
              <p className="mt-4 leading-7 text-[var(--text-muted)]">{interestAction.description}</p>
              <ActionLink
                href={interestAction.href!}
                label={interestAction.label}
                external={interestAction.external}
                variant="secondary"
                className="mt-4 pt-2"
              />
            </article>
          ) : null}
          {tryoutAction ? (
            <article className="flex flex-col rounded-[var(--radius-panel)] bg-[var(--brand-secondary)] p-7 text-white sm:p-9">
              <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-[var(--accent)]">
                Competitive Team
              </p>
              <h3 className="mt-3 font-heading text-3xl font-black">Fall 2026 Tryouts</h3>
              <p className="mt-4 leading-7 text-white/75">{tryoutAction.description}</p>
              <ActionLink
                href={tryoutAction.href!}
                label={tryoutAction.label}
                external={tryoutAction.external}
                className="mt-auto pt-2"
              />
            </article>
          ) : null}
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {slackAction ? <ActionLink href={slackAction.href!} label={slackAction.label} external={slackAction.external} icon={<Slack aria-hidden="true" className="size-5 text-[var(--brand-primary)]" />} variant="ghost" className="justify-start border border-[var(--border)] bg-[var(--surface)]" /> : null}
          {instagram ? <ActionLink href={instagram.href} label={`${instagram.accessibleLabel} (${instagram.username})`} external icon={<Instagram aria-hidden="true" className="size-5 text-[var(--brand-primary)]" />} variant="ghost" className="justify-start border border-[var(--border)] bg-[var(--surface)]" /> : null}
        </div>
      </Section>

      <Section className="py-[var(--space-section)]">
        <SectionHeading eyebrow="What to expect" title="What to know before you play." />
        <dl className="mt-10 grid gap-px overflow-hidden border bg-[var(--border)] sm:grid-cols-2 lg:grid-cols-3">
          {expectations.map(([term, description]) => <div key={term} className="bg-[var(--surface)] p-6"><dt className="font-heading text-xl font-black">{term}</dt><dd className="mt-3 leading-7 text-[var(--text-muted)]">{description}</dd></div>)}
        </dl>
      </Section>

      <Section className="py-[var(--space-section)]">
        <SectionHeading eyebrow="FAQ" title="What new players ask." />
        <div className="mt-8 divide-y border-y">
          {faqs.map(([question, answer]) => <details key={question} className="group"><summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-5 font-heading text-lg font-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--focus-ring)]">{question}<CheckCircle2 aria-hidden="true" className="size-5 shrink-0 text-[var(--brand-primary)]" /></summary><p className="max-w-3xl pb-6 leading-7 text-[var(--text-muted)]">{answer}</p></details>)}
        </div>
      </Section>

      <Section className="pb-[var(--space-section)] pt-0">
        <div className="bg-[var(--brand-secondary)] text-white mb-8 lg:flex lg:items-end lg:justify-between lg:gap-12">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-[var(--accent)]">
              Ready for the next point?
              </p>
            <h2 className="mt-3 font-heading text-3xl font-black sm:text-4xl">Find your way onto the field.</h2>
            <p className="mt-4 max-w-2xl text-white/75">Students trying out must complete both the interest form and tryout form. If you are unsure or do not want to play competitively, complete only the interest form.</p>
          </div>
          <div className="mt-7 flex flex-col items-start gap-3 lg:mt-0">{interestAction ? <ActionLink href={interestAction.href!} label={interestAction.label} external={interestAction.external} /> : null}{tryoutAction ? <ActionLink href={tryoutAction.href!} label={tryoutAction.label} external={tryoutAction.external} variant="secondary" className="border-white/70 bg-transparent !text-white hover:bg-white/10 hover:!text-white" /> : null}{!interestAction && !tryoutAction ? <Link href="/contact" className={buttonVariants()}>View current contact options</Link> : null}
          </div>
        </div>
      </Section>
    </>
  );
}
