import { ArrowRight, ClipboardList } from "lucide-react";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";

export function EmptyRosterState() {
  return (
    <div className="relative isolate overflow-hidden border border-[var(--border)] bg-[var(--surface)] px-6 py-10 shadow-[var(--shadow-soft)] sm:px-10 sm:py-12">
      <div
        aria-hidden="true"
        className="absolute -right-20 -top-24 -z-10 size-64 rounded-full border-[2.25rem] border-[var(--brand-soft)]"
      />
      <span className="grid size-12 place-items-center rounded-full bg-[var(--brand-soft)] text-[var(--brand-primary)]">
        <ClipboardList aria-hidden="true" className="size-6" />
      </span>
      <h3 className="mt-6 max-w-xl font-heading text-3xl font-black tracking-[-0.035em]">
        The active roster is being prepared.
      </h3>
      <p className="mt-4 max-w-2xl leading-7 text-[var(--text-muted)]">
        Player information has not yet been approved for public release. The roster will appear here after the team confirms the current season, public fields, and publication permissions.
      </p>
      <div className="mt-7 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap">
        <Link href="/join" className={buttonVariants({ className: "w-full min-[420px]:w-auto" })}>
          Learn how to join
          <ArrowRight aria-hidden="true" className="size-4" />
        </Link>
        <Link
          href="/about"
          className={buttonVariants({ variant: "secondary", className: "w-full min-[420px]:w-auto" })}
        >
          About Whisper
        </Link>
        <Link
          href="/schedule"
          className={buttonVariants({ variant: "ghost", className: "w-full min-[420px]:w-auto" })}
        >
          Schedule &amp; results
        </Link>
      </div>
    </div>
  );
}
