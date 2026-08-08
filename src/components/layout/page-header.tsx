import Image from "next/image";

import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  backgroundImage?: `/${string}`;
  photoCredit?: Readonly<{
    name: string;
    href: `https://${string}`;
  }>;
};

export function PageHeader({
  eyebrow,
  title,
  description,
  backgroundImage,
  photoCredit,
}: PageHeaderProps) {
  return (
    <header
      className={cn(
        "relative isolate overflow-hidden border-b border-[var(--border)] bg-[var(--surface)]",
        backgroundImage && "bg-[var(--brand-secondary)]",
      )}
    >
      {backgroundImage ? (
        <>
          <Image
            src={backgroundImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className="-z-20 object-cover object-top"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(18,15,15,0.9)_0%,rgba(18,15,15,0.72)_52%,rgba(18,15,15,0.42)_100%)]"
          />
        </>
      ) : (
        <div
          aria-hidden="true"
          className="absolute -right-28 -top-28 -z-10 size-80 rounded-full border-[3rem] border-[var(--brand-soft)] sm:right-[8%] sm:size-96"
        />
      )}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-1 w-1/3 bg-[var(--brand-primary)]"
      />
      <Container className="py-16 sm:py-20 lg:py-24">
        <p className={cn("eyebrow", backgroundImage && "text-[var(--accent)]")}>{eyebrow}</p>
        <h1
          className={cn(
            "mt-4 max-w-4xl text-balance font-heading text-5xl font-black leading-[0.96] tracking-[-0.02em] text-[var(--text-primary)] sm:text-6xl lg:text-7xl",
            backgroundImage && "text-white",
          )}
        >
          {title}
        </h1>
        <p
          className={cn(
            "mt-6 max-w-2xl text-pretty text-lg leading-8 text-[var(--text-muted)] sm:text-xl",
            backgroundImage && "text-white/85",
          )}
        >
          {description}
        </p>
      </Container>
      {backgroundImage && photoCredit ? (
        <a
          href={photoCredit.href}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-3 right-5 z-10 rounded-sm bg-black/55 px-2 py-1 text-xs font-semibold text-white/85 underline decoration-white/40 transition-colors hover:text-white hover:decoration-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none sm:right-8"
        >
          Photo: {photoCredit.name}
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      ) : null}
    </header>
  );
}
