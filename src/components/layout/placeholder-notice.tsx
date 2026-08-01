import { ClipboardCheck } from "lucide-react";

export function PlaceholderNotice() {
  return (
    <div className="grid gap-4 rounded-[var(--radius-panel)] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow-soft)] sm:grid-cols-[auto_1fr] sm:p-8">
      <span className="grid size-11 place-items-center rounded-full bg-[var(--brand-soft)] text-[var(--brand-primary)]">
        <ClipboardCheck aria-hidden="true" className="size-5" />
      </span>
      <div>
        <h2 className="font-heading text-xl font-bold tracking-tight text-[var(--text-primary)]">
          Foundation in place
        </h2>
        <p className="mt-2 max-w-2xl leading-7 text-[var(--text-muted)]">
          This page is intentionally limited to its structure. Verified team content will be added in a later milestone after review by the appropriate team owner.
        </p>
      </div>
    </div>
  );
}
