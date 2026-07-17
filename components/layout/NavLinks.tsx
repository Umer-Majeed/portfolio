import type { NavItem } from "@/data/navigation";

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
      {items.map((item) => {
        const isActive = active === item.href.replace("#", "");

        return (
          <a
            key={item.name}
            href={item.href}
            className={`
              relative
              py-2
              text-sm
              font-medium
              tracking-wide
              transition-all
              duration-300
              ${
                isActive
                  ? "text-cyan-400"
                  : "text-gray-300 hover:text-cyan-400"
              }
            `}
          >
            {item.name}

            <span
              className={`
                absolute
                bottom-0
                left-0
                h-[2px]
                rounded-full
                bg-cyan-400
                transition-all
                duration-300
                ${
                  isActive
                    ? "w-full opacity-100"
                    : "w-0 opacity-0"
                }
              `}
            />
          </a>
        );
      })}
    </nav>
  );
}