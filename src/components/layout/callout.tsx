import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

import { CalloutOrbit } from "@/components/layout/callout-orbit";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CalloutProps = {
  eyebrow: string;
  title: string;
  children: ReactNode;
  linkLabel: string;
  href: `/${string}`;
};

export function Callout({ eyebrow, title, children, linkLabel, href }: CalloutProps) {
  return (
    <div className="relative isolate overflow-hidden bg-[--brand-secondary] px-6 py-10 text-black in-data-[theme=dark]:text-white sm:px-10 sm:py-12 lg:grid lg:grid-cols-[1fr_auto] lg:items-end lg:gap-12 lg:px-14">
      <CalloutOrbit />
      <div className="max-w-2xl">
        <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-[var(--accent)]">
          {eyebrow}
        </p>
        <h2 className="mt-3 text-balance font-heading text-3xl font-black leading-tight tracking-[-0.015em] sm:text-4xl">
          {title}
        </h2>
        <div className="mt-4 text-pretty leading-7 text-black/75 in-data-[theme=dark]:text-white/75">{children}</div>
      </div>
      <Link
        href={href}
        className={cn(
          buttonVariants({ variant: "secondary" }),
          "mt-8 border-white/40 bg-black text-white hover:border-white hover:bg-[var(--brand-soft)] hover:text-[var(--brand-primary)] in-data-[theme=dark]:bg-white in-data-[theme=dark]:text-black lg:mt-0",
        )}
      >
        {linkLabel}
        <ArrowRight aria-hidden="true" className="size-4" />
      </Link>
    </div>
  );
}
