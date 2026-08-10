import { ArrowRight, MessagesSquare, ShieldCheck, UsersRound, Mail } from "lucide-react";
import Link from "next/link";

import { ActionLink } from "@/components/communications/action-link";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { contactPaths, publicRecruitmentActions, publicSocialLinks } from "@/config/communications";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Contact",
  "Contact WPI Whisper about playing, tryouts, tournaments, or the WPI frisbee community.",
  "/contact",
);

export default function ContactPage() {
  const paths = contactPaths.filter((path) => path.enabled && path.public);
  return (
    <>
      <PageHeader
        eyebrow="Contact WPI Whisper"
        title="Get in touch."
        description="Want to play, ask about intramurals or tryouts, or reach the team? Start here."
      />
      <Section className="py-[var(--space-section)]">
        <SectionHeading eyebrow="Contact Whisper" title="What do you need?" />
        {paths.length ? (
          <div className="mt-10 flex flex-col gap-6">
            {paths.map((path) => {
              const actions = publicRecruitmentActions.filter((item) =>
                path.actionIds.includes(item.id),
              );
              return (
                <article
                  key={path.id}
                  className="rounded-[var(--radius-panel)] border bg-[var(--surface)] p-7 shadow-[var(--shadow-soft)] sm:p-9"
                >
                  <div className="flex size-11 items-center justify-center rounded-full bg-[var(--brand-soft)] text-[var(--brand-primary)]">
                    {path.id === "joining" ? (
                      <UsersRound aria-hidden="true" className="size-5" />
                    ) : path.id === "leadership" ? (
                      <Mail aria-hidden="true" className="size-5" />
                    ) : (
                      <MessagesSquare aria-hidden="true" className="size-5" />
                    )}
                  </div>
                  <p className="eyebrow mt-6">{path.audience}</p>
                  <h3 className="mt-3 font-heading text-3xl font-black">{path.label}</h3>
                  <p className="mt-4 leading-7 text-[var(--text-muted)]">{path.description}</p>
                  <div className="mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                    {actions.map((item) => (
                      <ActionLink
                        key={item.id}
                        href={item.href}
                        label={item.label}
                        external={item.external}
                        variant={item.primary ? "primary" : "secondary"}
                        className="w-full sm:w-auto"
                      />
                    ))}
                    {path.id === "joining" ? (
                      <Link
                        href="/join"
                        className={buttonVariants({
                          variant: "secondary",
                          className: "w-full sm:w-auto",
                        })}
                      >
                        How to play
                        <ArrowRight aria-hidden="true" className="size-4" />
                      </Link>
                    ) : null}
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="mt-10 border-l-4 border-[var(--brand-primary)] bg-[var(--surface)] p-7">
            <h3 className="font-heading text-2xl font-black">
              Contact details coming soon.
            </h3>
            <p className="mt-3 leading-7 text-[var(--text-muted)]">
              Check Instagram below or come back later.
            </p>
          </div>
        )}
      </Section>
      <Section className="border-y bg-[var(--surface-muted)] py-[var(--space-section)]">
        <div className="flex flex-col gap-8 lg:max-w-2xl">
          <SectionHeading
            eyebrow="Instagram"
            title="Follow the team."
            description="See tournament photos and team updates at @wpimensultimate."
          />
          <div className="flex flex-wrap items-start gap-3">
            {publicSocialLinks.length ? (
              publicSocialLinks.map((social) => (
                <ActionLink
                  key={social.id}
                  href={social.href}
                  label={`${social.label} · ${social.username}`}
                  external
                  variant="secondary"
                />
              ))
            ) : (
              <p className="leading-7 text-[var(--text-muted)]">
                Our Instagram link is not available right now.
              </p>
            )}
          </div>
        </div>
      </Section>
      <Section className="py-[var(--space-section)]">
        <div className="grid gap-6 border-l-4 border-[var(--brand-primary)] bg-[var(--surface)] p-7 sm:p-10 md:grid-cols-[auto_1fr]">
          <ShieldCheck aria-hidden="true" className="size-8 text-[var(--brand-primary)]" />
          <div>
            <h2 className="font-heading text-2xl font-black">Keep personal information private.</h2>
            <p className="mt-3 max-w-3xl leading-7 text-[var(--text-muted)]">
              Do not send passwords, financial details, medical information, or government IDs through forms, Slack, Instagram, or email.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
