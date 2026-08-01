import { siteNavigation } from "@/config/navigation";
import { NavigationLink } from "@/components/layout/navigation-link";

export function DesktopNavigation() {
  return (
    <nav aria-label="Primary navigation" className="hidden md:block">
      <ul className="flex items-center gap-1 lg:gap-2">
        {siteNavigation.map((item) => (
          <li key={item.href}>
            <NavigationLink {...item} className="block px-2.5 py-2 lg:px-3" />
          </li>
        ))}
      </ul>
    </nav>
  );
}
