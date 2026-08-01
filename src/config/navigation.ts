import type { NavigationItem } from "@/types/navigation";

export const siteNavigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Roster", href: "/roster" },
  { label: "Schedule", href: "/schedule" },
  { label: "Join", href: "/join" },
  { label: "Media", href: "/media" },
  { label: "Contact", href: "/contact" },
] as const satisfies readonly NavigationItem[];
