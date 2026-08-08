import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Container className="grid min-h-[60vh] place-items-center py-16 text-center">
      <div className="max-w-xl">
        <p className="eyebrow">404 · Out of bounds</p>
        <h1 className="mt-4 font-heading text-5xl font-black tracking-[-0.02em] sm:text-6xl">
          This page was not found.
        </h1>
        <p className="mx-auto mt-5 max-w-md text-lg leading-8 text-[var(--text-muted)]">
          The address may be incorrect, or the page may have moved. The homepage is the best place to get back in play.
        </p>
        <Link href="/" className={buttonVariants({ className: "mt-8" })}>
          <ArrowLeft aria-hidden="true" className="size-4" />
          Return home
        </Link>
      </div>
    </Container>
  );
}
