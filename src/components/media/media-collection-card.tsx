import { CalendarDays, ExternalLink, MapPin } from "lucide-react";
import Image from "next/image";

import { buttonVariants } from "@/components/ui/button";
import type { MediaCollection } from "@/types/media";

export function MediaCollectionCard({ collection }: { collection: MediaCollection }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-panel)] border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-soft)] transition-[transform,border-color,box-shadow] hover:-translate-y-1 hover:border-[var(--border-strong)] hover:shadow-lg focus-within:border-[var(--brand-primary)] motion-reduce:transition-none">
      <div className="relative aspect-[4/3] overflow-hidden bg-[var(--surface-muted)]">
        <Image
          src={collection.image}
          alt={collection.imageAlt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.025] motion-reduce:transition-none"
        />
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1 bg-[var(--brand-primary)]" />
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-[var(--text-subtle)]">
          <span className="inline-flex items-center gap-2">
            <CalendarDays aria-hidden="true" className="size-4 text-[var(--brand-primary)]" />
            {collection.date}
          </span>
          <span className="inline-flex items-center gap-2">
            <MapPin aria-hidden="true" className="size-4 text-[var(--brand-primary)]" />
            {collection.location}
          </span>
        </div>
        <h3 className="mt-5 font-heading text-3xl font-black tracking-[-0.015em]">
          {collection.title}
        </h3>
        <p className="mt-4 leading-7 text-[var(--text-muted)]">{collection.description}</p>
        <p className="mt-5 text-sm font-bold text-[var(--text-subtle)]">
          Photography by {collection.creditName}
        </p>
        <a
          href={collection.galleryUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonVariants({ className: "mt-6 w-full sm:w-fit" })}
        >
          {collection.buttonLabel}
          <ExternalLink aria-hidden="true" className="size-4" />
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </div>
    </article>
  );
}
