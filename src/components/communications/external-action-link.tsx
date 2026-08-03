import { ExternalLink } from "lucide-react";
import type { ReactNode } from "react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ExternalActionLinkProps = {
  href: string;
  label: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  icon?: ReactNode;
};

export function ExternalActionLink({ href, label, variant = "primary", className, icon }: ExternalActionLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(buttonVariants({ variant }), className)}
    >
      {icon}
      <span>{label}</span>
      <ExternalLink aria-hidden="true" className="size-4" />
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
