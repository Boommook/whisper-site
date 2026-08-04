import { ExternalLink } from "lucide-react";
import Image from "next/image";

import { Container } from "@/components/layout/container";
import { Wordmark } from "@/components/layout/wordmark";
import { publicSocialLinks } from "@/config/communications";

export function SiteFooter() {
  return (
    <footer className="relative isolate overflow-hidden border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="absolute bottom-0 right-0 z-0 h-[88%] aspect-[1794/2438]">
        <Image
          src="/img/wpi-towers.png"
          alt=""
          fill
          sizes="(min-width: 640px) 11rem, 8rem"
          className="footer-towers object-contain object-[right_bottom] opacity-[0.13]"
        />
      </div>
      <Container className="relative z-10 flex flex-col gap-5 py-8 sm:flex-row sm:items-end sm:justify-between">
        <div><Wordmark /><p className="mt-3 max-w-md text-sm leading-6 text-[var(--text-muted)]">WPI Whisper is Worcester Polytechnic Institute&apos;s men&apos;s club ultimate frisbee team.</p></div>
        <div className="flex flex-col gap-2 sm:items-end">
          {publicSocialLinks.map((social) => <a key={social.id} href={social.href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 text-sm font-bold text-[var(--brand-primary)] underline decoration-transparent hover:decoration-current focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--focus-ring)]">{social.username}<ExternalLink aria-hidden="true" className="size-4" /><span className="sr-only"> on Instagram (opens in a new tab)</span></a>)}
          <p className="text-xs font-semibold tracking-wide text-[var(--text-subtle)]">Worcester Polytechnic Institute · Men&apos;s Ultimate</p>
        </div>
      </Container>
    </footer>
  );
}
