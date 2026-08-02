import { ExternalLink } from "lucide-react";
import Image from "next/image";

import type { PublicPlayer } from "@/types/roster";

function getInitials(displayName: string) {
  return displayName
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join("");
}

export function PlayerCard({ player }: { player: PublicPlayer }) {
  return (
    <article className="overflow-hidden border-t-2 border-[var(--border-strong)] bg-[var(--surface)] shadow-[var(--shadow-soft)]">
      <div className="relative aspect-[4/3] overflow-hidden bg-[var(--surface-muted)]">
        {player.portrait ? (
          <Image
            src={player.portrait.src}
            alt={player.portrait.alt}
            width={player.portrait.width}
            height={player.portrait.height}
            className="size-full object-cover"
          />
        ) : (
          <div
            aria-hidden="true"
            className="grid size-full place-items-center bg-[linear-gradient(135deg,var(--surface-muted),var(--brand-soft))] font-heading text-5xl font-black text-[var(--brand-primary)]"
          >
            {getInitials(player.displayName)}
          </div>
        )}
        {player.jerseyNumber !== undefined ? (
          <span className="absolute bottom-3 right-3 grid min-h-10 min-w-10 place-items-center bg-[var(--brand-secondary)] px-2 text-sm font-black text-white">
            <span className="sr-only">Jersey number </span>
            {player.jerseyNumber}
          </span>
        ) : null}
      </div>
      <div className="p-5 sm:p-6">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="font-heading text-2xl font-black tracking-[-0.025em]">
            {player.displayName}
          </h3>
          <span className="text-sm font-bold text-[var(--brand-primary)]">
            Class of {player.classYear}
          </span>
        </div>
        {player.pronouns ? (
          <p className="mt-1 text-sm text-[var(--text-subtle)]">{player.pronouns}</p>
        ) : null}
        {player.fieldRole ? (
          <p className="mt-4 text-sm font-bold text-[var(--text-primary)]">{player.fieldRole}</p>
        ) : null}
        {player.major || player.hometown ? (
          <dl className="mt-4 grid gap-2 border-t border-[var(--border)] pt-4 text-sm">
            {player.major ? (
              <div className="grid grid-cols-[5rem_1fr] gap-3">
                <dt className="font-bold text-[var(--text-subtle)]">Major</dt>
                <dd>{player.major}</dd>
              </div>
            ) : null}
            {player.hometown ? (
              <div className="grid grid-cols-[5rem_1fr] gap-3">
                <dt className="font-bold text-[var(--text-subtle)]">Hometown</dt>
                <dd>{player.hometown}</dd>
              </div>
            ) : null}
          </dl>
        ) : null}
        {player.biography ? (
          <p className="mt-4 leading-7 text-[var(--text-muted)]">{player.biography}</p>
        ) : null}
        {player.socialLink ? (
          <a
            href={player.socialLink.href}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex min-h-11 items-center gap-2 py-2 text-sm font-bold text-[var(--brand-primary)] underline decoration-2 decoration-transparent transition-colors hover:decoration-current focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--focus-ring)] motion-reduce:transition-none"
          >
            {player.socialLink.label}
            <ExternalLink aria-hidden="true" className="size-4" />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        ) : null}
      </div>
    </article>
  );
}
