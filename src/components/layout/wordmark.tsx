import Link from "next/link";

import { cn } from "@/lib/utils";

export function Wordmark({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center gap-3 rounded-sm font-heading text-[1.05rem] font-black tracking-[-0.025em] text-[var(--text-primary)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--focus-ring)]",
        className,
      )}
      aria-label="WPI Whisper home"
    >
      <span
        aria-hidden="true"
        className="grid size-9 place-items-center rounded-full border-2 border-[var(--brand-primary)] text-xs text-[var(--brand-primary)] transition-colors group-hover:bg-[var(--brand-primary)] group-hover:text-white motion-reduce:transition-none"
      >
        W
      </span>
      <span>WPI Whisper</span>
    </Link>
  );
}
