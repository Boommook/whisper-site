import { ExternalLink, Mail } from "lucide-react";
import type { ReactNode } from "react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ActionLinkProps = {
  href: `https://${string}` | `mailto:${string}`;
  label: string;
  external: boolean;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  icon?: ReactNode;
};

export function ActionLink({
  href,
  label,
  external,
  variant = "primary",
  className,
  icon,
}: ActionLinkProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn(buttonVariants({ variant }), className)}
    >
      {icon ?? (!external ? <Mail aria-hidden="true" className="size-4" /> : null)}
      <span>{label}</span>
      {external ? <ExternalLink aria-hidden="true" className="size-4" /> : null}
      {external ? <span className="sr-only"> (opens in a new tab)</span> : null}
    </a>
  );
}
