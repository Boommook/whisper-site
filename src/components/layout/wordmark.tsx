import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

export function Wordmark({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center gap-3 rounded-sm font-heading text-[1.05rem] font-black tracking-[-0.01em] text-[var(--text-primary)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--focus-ring)]",
        className,
      )}
      aria-label="WPI Whisper home"
    >
      <span
        aria-hidden="true"
        className="relative size-10 shrink-0 transition-transform group-hover:scale-105 motion-reduce:transition-none"
      >
        <Image
          src="/img/whisper_light_notext.png"
          alt=""
          fill
          sizes="40px"
          unoptimized
          className="object-contain [[data-theme=dark]_&]:hidden"
        />
        <Image
          src="/img/whisper_dark_notext.png"
          alt=""
          fill
          sizes="40px"
          unoptimized
          className="hidden object-contain [[data-theme=dark]_&]:block"
        />
      </span>
      <span>WPI Whisper</span>
    </Link>
  );
}
