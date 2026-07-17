import type { NavItem } from "@/data/navigation";

type NavLinkItemProps = {
  item: NavItem;
  active: string;
  mobile?: boolean;
  onClick?: () => void;
};

export default function NavLinkItem({
  item,
  active,
  mobile = false,
  onClick,
}: NavLinkItemProps) {
  const isActive = active === item.href.replace("#", "");

  if (mobile) {
    return (
      <a
        href={item.href}
        onClick={onClick}
        className={`rounded-xl px-4 py-4 transition-all duration-300 ${
          isActive
            ? "bg-cyan-400 text-black"
            : "text-gray-300 hover:bg-white/5"
        }`}
      >
        {item.name}
      </a>
    );
  }

  return (
    <a
      href={item.href}
      className={`group relative py-2 text-sm font-medium tracking-wide transition-all duration-300 ${
        isActive
          ? "text-cyan-400"
          : "text-gray-300 hover:text-cyan-400"
      }`}
    >
      {item.name}

      <span
        className={`absolute bottom-0 left-0 h-[2px] rounded-full bg-cyan-400 transition-all duration-300 ${
          isActive
            ? "w-full opacity-100"
            : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
        }`}
      />
    </a>
  );
}