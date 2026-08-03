import type { Metadata } from "next";
import { ArrowRight, MessagesSquare, ShieldCheck, UsersRound } from "lucide-react";
import Link from "next/link";

import { ExternalActionLink } from "@/components/communications/external-action-link";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { contactPaths, publicRecruitmentActions, publicSocialLinks } from "@/config/communications";

export const metadata: Metadata = {
  title: "Contact WPI Whisper",
  description: "Find verified recruitment, community, and public-update channels for WPI Whisper men’s ultimate frisbee.",
};

export default function ContactPage() {
  const paths = contactPaths.filter((path) => path.enabled && path.public);
  return <>
    <PageHeader eyebrow="Contact WPI Whisper" title="Choose the right route." description="Use the verified path that best matches your question. Recruitment forms, community Slack, and public Instagram are available while the team’s complete leadership email address is still being confirmed." />
    <Section className="py-[var(--space-section)]">
      <SectionHeading eyebrow="Verified channels" title="Start with your reason for reaching out." description="These public destinations are maintained centrally so incomplete or unverified contact details never become broken links." />
      {paths.length ? <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {paths.map((path) => { const actions = publicRecruitmentActions.filter((item) => path.actionIds.includes(item.id)); return <article key={path.id} className="rounded-[var(--radius-panel)] border bg-[var(--surface)] p-7 shadow-[var(--shadow-soft)] sm:p-9">
          <div className="flex size-11 items-center justify-center rounded-full bg-[var(--brand-soft)] text-[var(--brand-primary)]">{path.id === "joining" ? <UsersRound aria-hidden="true" className="size-5" /> : <MessagesSquare aria-hidden="true" className="size-5" />}</div>
          <p className="eyebrow mt-6">{path.audience}</p><h2 className="mt-3 font-heading text-3xl font-black">{path.label}</h2><p className="mt-4 leading-7 text-[var(--text-muted)]">{path.description}</p>
          <div className="mt-6 flex flex-col items-start gap-3">{actions.map((item) => <ExternalActionLink key={item.id} href={item.href!} label={item.label} variant={item.primary ? "primary" : "secondary"} />)}{path.id === "joining" ? <Link href="/join" className={buttonVariants({ variant: "ghost", className: "px-0" })}>Read the Join guide <ArrowRight aria-hidden="true" className="size-4" /></Link> : null}</div>
        </article>; })}
      </div> : <div className="mt-10 border-l-4 border-[var(--brand-primary)] bg-[var(--surface)] p-7"><h2 className="font-heading text-2xl font-black">Public contact details are being confirmed.</h2><p className="mt-3 leading-7 text-[var(--text-muted)]">No direct destination is currently enabled. Check the verified public account below or return later for updated contact routes.</p></div>}
    </Section>
    <Section className="border-y bg-[var(--surface-muted)] py-[var(--space-section)]"><div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20"><SectionHeading eyebrow="Public updates and media" title="Follow the verified team account." description="Instagram is the approved public social destination. It is useful for updates and media, but should not be treated as the only source for changing logistics." /><div className="flex items-center">{publicSocialLinks.length ? publicSocialLinks.map((social) => <ExternalActionLink key={social.id} href={social.href} label={`${social.label} · ${social.username}`} variant="secondary" />) : <p className="leading-7 text-[var(--text-muted)]">No official public social account is currently enabled.</p>}</div></div></Section>
    <Section className="py-[var(--space-section)]"><div className="grid gap-6 border-l-4 border-[var(--brand-primary)] bg-[var(--surface)] p-7 sm:p-10 md:grid-cols-[auto_1fr]"><ShieldCheck aria-hidden="true" className="size-8 text-[var(--brand-primary)]" /><div><h2 className="font-heading text-2xl font-black">Share only what is needed.</h2><p className="mt-3 max-w-3xl leading-7 text-[var(--text-muted)]">Do not submit passwords, financial information, medical details, government identifiers, or other sensitive personal information through public forms, Slack, or social messages. The captain/exec alias is not shown as an email link until its complete address is verified.</p></div></div></Section>
  </>;
}
