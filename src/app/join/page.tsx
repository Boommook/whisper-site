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
  "Join Whisper",
  "Learn how WPI students can connect with Whisper, express interest, and register for Fall 2026 men's ultimate frisbee tryouts.",
  "/join",
);

const action = (id: string) => publicRecruitmentActions.find((item) => item.id === id);
const tryoutAction = action("fall-2026-tryouts");
const interestAction = action("fall-2026-interest");
const slackAction = action("wpi-frisbee-slack");
const instagram = publicSocialLinks.find((item) => item.id === "instagram");

const expectations = [
  ["Experience", "Prior ultimate experience is not required. Athletic experience can help, and prospective players should be ready to learn."],
  ["Season structure", "Whisper includes a broader fall league and a competitive team. The main college season is in spring, with some competition in fall."],
  ["Practices and tournaments", "The competitive team generally practices twice a week in fall and spring. Current times, locations, and tournament logistics are confirmed each season."],
  ["Equipment", "What to bring can vary by session and field conditions. Confirm current equipment expectations through the recruitment forms or team communication."],
  ["Time commitment", "Commitment differs between the broader league and competitive team. Ask for the current schedule before deciding which path fits."],
  ["Costs", "Costs and dues can change. Current costs will be shared before a player commits; no unverified figure is published here."],
] as const;

const faqs = [
  ["Which Fall 2026 form should I complete?", "If you plan to attend Fall 2026 tryouts, complete both the club interest form and the tryout form. If you are unsure about trying out or do not want to play competitively, complete only the club interest form."],
  ["Do I need ultimate experience?", "No. Team source materials explicitly welcome athletes without prior ultimate experience who are ready to learn."],
  ["When does the team practice?", "The competitive team generally practices twice a week in fall and spring. Exact days, times, and locations are confirmed each season through team communication."],
  ["What should I bring?", "Equipment expectations may depend on the session and conditions. Use the forms or Slack to confirm current guidance before attending."],
  ["How much does it cost?", "Costs can change by season. Current costs will be shared before a player commits."],
  ["Should I join the Slack?", "Interested WPI students can use Slack to connect with the frisbee community and receive communication. Slack signup does not replace either required form for students planning to try out."],
  ["Where can I follow the team?", "The verified public account is WPI Men’s Ultimate on Instagram, @wpimensultimate. Do not rely on social media alone for every schedule change."],
] as const;

export default function JoinPage() {
  return (
    <>
      <PageHeader eyebrow="Join Whisper" title="Find your way onto the field." description="Whether you are new to ultimate or ready to compete, start here to understand the team and choose the right Fall 2026 action." />

      <Section className="py-[var(--space-section)]">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <SectionHeading eyebrow="Who can join" title="A WPI student team with room to learn." description="Whisper is WPI’s men’s ultimate frisbee club team. Membership is open to currently enrolled WPI students, with a broader league experience and a selected competitive team." />
            <div className="relative mt-7 h-20 w-52 overflow-hidden border border-[var(--border)] bg-white px-4 shadow-[var(--shadow-soft)]">
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
            <p className="mt-4 text-lg leading-8 text-[var(--text-muted)]">Prior ultimate experience is not required. Players from other athletic backgrounds are welcome to learn the sport; competitive-team placement still follows the team’s seasonal tryout process.</p>
            <Link href="/about" className="mt-5 inline-flex min-h-11 items-center gap-2 font-bold text-[var(--brand-primary)] underline decoration-2 decoration-transparent hover:decoration-current focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--focus-ring)]">Learn about Whisper <ArrowRight aria-hidden="true" className="size-4" /></Link>
          </div>
        </div>
      </Section>

      <Section className="border-y border-[var(--border)] bg-[var(--surface-muted)] py-[var(--space-section)]">
        <SectionHeading eyebrow="Fall 2026" title="Choose the action that matches your intent." description="Trying out? Complete both forms. Unsure about tryouts or interested only in noncompetitive play? Complete the interest form only." />
        <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-2">
          {interestAction ? (
            <article className="flex flex-col rounded-[var(--radius-panel)] border bg-[var(--surface)] p-7 sm:p-9">
              <p className="eyebrow">Broader interest</p>
              <h3 className="mt-3 font-heading text-3xl font-black">Stay informed</h3>
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
                Competitive play
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
        <SectionHeading eyebrow="What to expect" title="Useful context, without stale promises." />
        <dl className="mt-10 grid gap-px overflow-hidden border bg-[var(--border)] sm:grid-cols-2 lg:grid-cols-3">
          {expectations.map(([term, description]) => <div key={term} className="bg-[var(--surface)] p-6"><dt className="font-heading text-xl font-black">{term}</dt><dd className="mt-3 leading-7 text-[var(--text-muted)]">{description}</dd></div>)}
        </dl>
      </Section>

      <Section className="border-y border-[var(--border)] bg-[var(--surface)] py-[var(--space-section)]">
        <SectionHeading eyebrow="Recruitment process" title="Four clear next steps." />
        <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {["Tell us you are interested|Every interested student should complete the Fall 2026 interest form.", "Register for tryouts|Planning to try out? Complete the Fall 2026 tryout form in addition to the interest form.", "Connect with the team|Join Slack and follow @wpimensultimate for community communication and public updates.", "Confirm current details|Get current practices, tryout logistics, equipment expectations, and costs through team communication."].map((step, index) => { const [title, text] = step.split("|"); return <li key={title} className="border-t-2 border-[var(--brand-primary)] pt-5"><span className="text-sm font-black text-[var(--brand-primary)]">0{index + 1}</span><h3 className="mt-3 font-heading text-xl font-black">{title}</h3><p className="mt-3 leading-7 text-[var(--text-muted)]">{text}</p></li>; })}
        </ol>
      </Section>

      <Section className="py-[var(--space-section)]">
        <SectionHeading eyebrow="FAQ" title="Questions before you start." />
        <div className="mt-8 divide-y border-y">
          {faqs.map(([question, answer]) => <details key={question} className="group"><summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-5 font-heading text-lg font-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--focus-ring)]">{question}<CheckCircle2 aria-hidden="true" className="size-5 shrink-0 text-[var(--brand-primary)]" /></summary><p className="max-w-3xl pb-6 leading-7 text-[var(--text-muted)]">{answer}</p></details>)}
        </div>
      </Section>

      <Section className="pb-[var(--space-section)] pt-0">
        <div className="bg-[var(--brand-secondary)] p-8 text-white sm:p-12 lg:flex lg:items-end lg:justify-between lg:gap-12"><div><p className="text-xs font-extrabold uppercase tracking-[0.12em] text-[var(--accent)]">Ready for the next point?</p><h2 className="mt-3 font-heading text-3xl font-black sm:text-4xl">Take the right Fall 2026 step.</h2><p className="mt-4 max-w-2xl text-white/75">Students trying out must complete both the interest form and tryout form. If you are unsure or do not want to play competitively, complete only the interest form.</p></div><div className="mt-7 flex flex-col items-start gap-3 lg:mt-0">{interestAction ? <ActionLink href={interestAction.href!} label={interestAction.label} external={interestAction.external} /> : null}{tryoutAction ? <ActionLink href={tryoutAction.href!} label={tryoutAction.label} external={tryoutAction.external} variant="secondary" className="border-white/70 bg-transparent !text-white hover:bg-white/10 hover:!text-white" /> : null}{!interestAction && !tryoutAction ? <Link href="/contact" className={buttonVariants()}>View current contact options</Link> : null}</div></div>
      </Section>
    </>
  );
}
