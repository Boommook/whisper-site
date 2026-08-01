import { Container } from "@/components/layout/container";
import { DesktopNavigation } from "@/components/layout/desktop-navigation";
import { MobileNavigation } from "@/components/layout/mobile-navigation";
import { Wordmark } from "@/components/layout/wordmark";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-[var(--border)] bg-[color-mix(in_srgb,var(--page-background)_92%,transparent)] backdrop-blur-md">
      <Container className="flex min-h-[var(--header-height)] items-center justify-between gap-5">
        <Wordmark />
        <DesktopNavigation />
        <MobileNavigation />
      </Container>
    </header>
  );
}
