import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

type LinkCardProps = {
  title: string;
  description: string;
  href: `/${string}`;
  icon: LucideIcon;
};

export function LinkCard({ title, description, href, icon: Icon }: LinkCardProps) {
  return (
    <Link
      href={href}
      className="group relative flex min-h-64 flex-col border-t-2 border-[var(--border-strong)] py-6 pr-4 transition-colors hover:border-[var(--brand-primary)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--focus-ring)] motion-reduce:transition-none"
    >
      <span className="grid size-11 place-items-center rounded-full bg-[var(--brand-soft)] text-[var(--brand-primary)] transition-colors group-hover:bg-[var(--brand-primary)] group-hover:text-white motion-reduce:transition-none">
        <Icon aria-hidden="true" className="size-5" strokeWidth={2} />
      </span>
      <h3 className="mt-8 font-heading text-2xl font-black tracking-[-0.025em] text-[var(--text-primary)]">
        {title}
      </h3>
      <p className="mt-3 max-w-sm leading-7 text-[var(--text-muted)]">{description}</p>
      <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-bold text-[var(--brand-primary)]">
        Explore
        <ArrowUpRight
          aria-hidden="true"
          className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none"
        />
      </span>
    </Link>
  );
}
