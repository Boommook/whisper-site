"use client";

import { useEffect } from "react";
import Link from "next/link";

import { Button, buttonVariants } from "@/components/ui/button";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[page error]", error);
  }, [error]);

  return (
    <section className="mx-auto grid min-h-[60vh] w-full max-w-[var(--content-width)] place-items-center px-5 py-16 text-center sm:px-8">
      <div className="max-w-xl">
        <p className="eyebrow">Something went wrong</p>
        <h1 className="mt-4 font-heading text-4xl font-black tracking-[-0.02em] sm:text-5xl">
          This page could not be displayed.
        </h1>
        <p className="mx-auto mt-5 max-w-md text-lg leading-8 text-[var(--text-muted)]">
          Please try again. If the problem continues, return to the homepage and use another route.
        </p>
        <div className="mt-8 flex flex-col items-center gap-2">
          <Button type="button" onClick={reset}>
            Try again
          </Button>
          <Link href="/" className={buttonVariants({ variant: "ghost" })}>
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
}
