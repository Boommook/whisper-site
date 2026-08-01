"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import type { NavigationItem } from "@/types/navigation";

type NavigationLinkProps = NavigationItem & {
  className?: string;
  onNavigate?: () => void;
};

export function NavigationLink({
  href,
  label,
  className,
  onNavigate,
}: NavigationLinkProps) {
  const pathname = usePathname();
  const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      href={href}
      onClick={onNavigate}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "rounded-sm text-sm font-semibold text-[var(--text-muted)] transition-colors hover:text-[var(--brand-primary)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--focus-ring)] motion-reduce:transition-none",
        isActive && "text-[var(--brand-primary)]",
        className,
      )}
    >
      {label}
    </Link>
  );
}
