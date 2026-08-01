import { Container } from "@/components/layout/container";
import { Wordmark } from "@/components/layout/wordmark";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)]">
      <Container className="flex flex-col gap-5 py-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Wordmark />
          <p className="mt-3 max-w-md text-sm leading-6 text-[var(--text-muted)]">
            A student-led website foundation. Official team content and branding are still under review.
          </p>
        </div>
        <p className="text-xs font-semibold tracking-wide text-[var(--text-subtle)]">
          Worcester Polytechnic Institute · Men&apos;s Ultimate
        </p>
      </Container>
    </footer>
  );
}
