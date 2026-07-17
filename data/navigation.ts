export type NavItem = {
  name: string;
  href: string;
};

export const navItems: readonly NavItem[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Journey", href: "#experience" },
  { name: "Contact", href: "#contact" },
];