import { Container } from "@/components/layout/container";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <header className="relative isolate overflow-hidden border-b border-[var(--border)] bg-[var(--surface)]">
      <div
        aria-hidden="true"
        className="absolute -right-28 -top-28 -z-10 size-80 rounded-full border-[3rem] border-[var(--brand-soft)] sm:right-[8%] sm:size-96"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-1 w-1/3 bg-[var(--brand-primary)]"
      />
      <Container className="py-16 sm:py-20 lg:py-24">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-balance font-heading text-5xl font-black leading-[0.96] tracking-[-0.055em] text-[var(--text-primary)] sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-[var(--text-muted)] sm:text-xl">
          {description}
        </p>
      </Container>
    </header>
  );
}
