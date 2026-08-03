"use client";

import { useEffect } from "react";

import { Button } from "@/components/ui/button";

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
        <h1 className="mt-4 font-heading text-4xl font-black tracking-[-0.05em] sm:text-5xl">
          This page could not be displayed.
        </h1>
        <p className="mx-auto mt-5 max-w-md text-lg leading-8 text-[var(--text-muted)]">
          Please try again. If the problem continues, return to the homepage and use another route.
        </p>
        <Button type="button" onClick={reset} className="mt-8">
          Try again
        </Button>
      </div>
    </section>
  );
}
