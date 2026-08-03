import type { Metadata } from "next";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";

import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { MediaCollectionCard } from "@/components/media/media-collection-card";
import { buttonVariants } from "@/components/ui/button";
import { mediaCollections } from "@/data/media";

export const metadata: Metadata = {
  title: "Media | WPI Whisper",
  description:
    "Explore tournament photography and event galleries featuring WPI Whisper men's ultimate frisbee.",
};

const portfolioUrl = "https://photo-makanapp.com/";

export default function MediaPage() {
  return (
    <>
      <PageHeader
        eyebrow="WPI Whisper / Media"
        title="Whisper in Action"
        description="Explore tournament photography, team moments, and highlights from WPI Whisper events. Our featured galleries are photographed and curated by photo.makanapp."
      />

      <Section className="py-[var(--space-section)]">
        <div className="flex flex-col gap-7 border-b border-[var(--border)] pb-10 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Event photography"
            title="Featured Collections"
            description="Selected tournament galleries from Whisper's season, presented here with links to the photographer's original collections."
          />
          <a
            href={portfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: "secondary", className: "shrink-0 sm:mb-1" })}
          >
            Explore All Photography
            <ExternalLink aria-hidden="true" className="size-4" />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
        <div className="mt-10 grid items-stretch gap-6 md:grid-cols-2 lg:gap-8">
          {mediaCollections.map((collection) => (
            <MediaCollectionCard key={collection.galleryUrl} collection={collection} />
          ))}
        </div>
      </Section>

      <Section className="border-y border-[var(--border)] bg-[var(--brand-secondary)] py-[var(--space-section)] text-white">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
          <div className="max-w-3xl">
            <p className="eyebrow !text-[var(--accent)]">Behind the lens</p>
            <h2 className="mt-4 text-balance font-heading text-4xl font-black tracking-[-0.045em] sm:text-5xl">
              Photography by photo.makanapp
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/75">
              Whisper’s featured event photography is captured and curated by photo.makanapp. Visit the full portfolio to explore additional sports, event, landscape, and automotive photography.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <a
              href={portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants()}
            >
              Visit Portfolio
              <ExternalLink aria-hidden="true" className="size-4" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a
              href={portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({
                variant: "ghost",
                className:
                  "border border-white/70 !text-white hover:border-white hover:bg-white/10 hover:!text-white",
              })}
            >
              View Sports Photography
              <ExternalLink aria-hidden="true" className="size-4" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>
      </Section>

      <Section className="py-[var(--space-section)]">
        <div className="grid gap-6 border-l-4 border-[var(--brand-primary)] bg-[var(--surface)] p-7 shadow-[var(--shadow-soft)] sm:p-10 md:grid-cols-[1fr_auto] md:items-center md:gap-12">
          <div>
            <p className="eyebrow">Share the moment</p>
            <h2 className="mt-3 font-heading text-3xl font-black tracking-[-0.035em]">
              Have photos from a Whisper event?
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-[var(--text-muted)]">
              Team members and alumni can share event photography with the club for consideration in future galleries.
            </p>
          </div>
          <Link href="/contact" className={buttonVariants({ variant: "secondary" })}>
            Contact the Team
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </Section>
    </>
  );
}
