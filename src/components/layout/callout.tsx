import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

import { buttonVariants } from "@/components/ui/button";

type CalloutProps = {
  eyebrow: string;
  title: string;
  children: ReactNode;
  linkLabel: string;
  href: `/${string}`;
};

export function Callout({ eyebrow, title, children, linkLabel, href }: CalloutProps) {
  return (
    <div className="relative isolate overflow-hidden bg-[var(--brand-secondary)] px-6 py-10 text-white sm:px-10 sm:py-12 lg:grid lg:grid-cols-[1fr_auto] lg:items-end lg:gap-12 lg:px-14">
      <div
        aria-hidden="true"
        className="absolute -right-24 -top-28 -z-10 size-72 rounded-full border-[2.25rem] border-white/8"
      />
      <div className="max-w-2xl">
        <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-[var(--accent)]">
          {eyebrow}
        </p>
        <h2 className="mt-3 text-balance font-heading text-3xl font-black leading-tight tracking-[-0.035em] sm:text-4xl">
          {title}
        </h2>
        <div className="mt-4 text-pretty leading-7 text-white/75">{children}</div>
      </div>
      <Link
        href={href}
        className={buttonVariants({
          variant: "secondary",
          className:
            "mt-8 border-white/40 bg-white text-[var(--brand-secondary)] hover:border-white hover:bg-[var(--brand-soft)] lg:mt-0",
        })}
      >
        {linkLabel}
        <ArrowRight aria-hidden="true" className="size-4" />
      </Link>
    </div>
  );
}
