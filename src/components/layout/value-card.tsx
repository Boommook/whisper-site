import type { LucideIcon } from "lucide-react";

type ValueCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export function ValueCard({ title, description, icon: Icon }: ValueCardProps) {
  return (
    <article className="border-l-2 border-[var(--brand-primary)] bg-[var(--surface)] p-6 shadow-[var(--shadow-soft)] sm:p-7">
      <Icon aria-hidden="true" className="size-6 text-[var(--brand-primary)]" strokeWidth={1.8} />
      <h3 className="mt-5 font-heading text-xl font-black tracking-tight">{title}</h3>
      <p className="mt-3 leading-7 text-[var(--text-muted)]">{description}</p>
    </article>
  );
}
