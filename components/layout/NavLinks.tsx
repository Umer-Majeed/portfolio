type NavItem = {
  name: string;
  href: string;
};

type NavLinksProps = {
  items: NavItem[];
  active: string;
};

export default function NavLinks({
  items,
  active,
}: NavLinksProps) {
  return (
    <nav className="hidden items-center gap-8 lg:flex">
      {items.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className={`transition-all duration-300 hover:text-cyan-400 ${
            active === item.href.replace("#", "")
              ? "text-cyan-400"
              : "text-gray-300"
          }`}
        >
          {item.name}
        </a>
      ))}
    </nav>
  );
}