import type { NavItem } from "@/data/navigation";
import NavLinkItem from "./NavLinkItem";

type NavLinksProps = {
  items: readonly NavItem[];
  active: string;
};

export default function NavLinks({
  items,
  active,
}: NavLinksProps) {
  return (
    <nav className="hidden items-center gap-8 lg:flex">
      {items.map((item) => (
        <NavLinkItem
          key={item.name}
          item={item}
          active={active}
        />
      ))}
    </nav>
  );
}