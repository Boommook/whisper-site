import { CalendarClock, Users } from "lucide-react";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";

export function ScheduleEmptyState() {
  return (
    <div className="relative overflow-hidden rounded-[var(--radius-panel)] border border-[var(--border)] bg-[var(--surface)] p-7 shadow-[var(--shadow-soft)] sm:p-10">
      <div aria-hidden="true" className="absolute -right-16 -top-16 size-48 rounded-full border-[1.75rem] border-[var(--brand-soft)]" />
      <div className="relative max-w-2xl">
        <span className="grid size-12 place-items-center rounded-full bg-[var(--brand-soft)] text-[var(--brand-primary)]">
          <CalendarClock aria-hidden="true" className="size-6" />
        </span>
        <h2 className="mt-6 text-balance font-heading text-2xl font-black tracking-[-0.03em] sm:text-3xl">
          Check back for the next schedule update.
        </h2>
        <p className="mt-4 leading-7 text-[var(--text-muted)]">
          There are no public events or results to share right now. Explore the team while you wait for the next season update.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Link href="/join" className={buttonVariants()}>Join Whisper</Link>
          <Link href="/roster" className={buttonVariants({ variant: "secondary" })}>
            <Users aria-hidden="true" className="size-4" /> Meet the roster
          </Link>
        </div>
      </div>
    </div>
  );
}
