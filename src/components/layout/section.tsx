import type { HTMLAttributes } from "react";

import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

export function Section({ className, children, ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <section className={cn("py-12 sm:py-16", className)} {...props}>
      <Container>{children}</Container>
    </section>
  );
}
