import { CalendarRange } from "lucide-react";

import type { SeasonMetadata } from "@/types/roster";

export function SeasonLabel({ season }: { season: SeasonMetadata }) {
  return (
    <div className="inline-flex min-h-10 items-center gap-2 border-l-2 border-[var(--brand-primary)] bg-[var(--surface-muted)] px-3 py-2 text-sm font-bold text-[var(--text-primary)]">
      <CalendarRange aria-hidden="true" className="size-4 text-[var(--brand-primary)]" />
      <span>{season.label}</span>
      {season.publicationStatus === "awaiting-approval" ? (
        <span className="text-[var(--text-muted)]">· Awaiting publication approval</span>
      ) : null}
    </div>
  );
}
