"use client";

const links = [
  {
    name: "Home",
    href: "#hero",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Experience",
    href: "#experience",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "GitHub",
    href: "#github",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export default function FooterLinks() {
  return (
    <div>
      <h3 className="mb-8 text-2xl font-bold">
        Navigation
      </h3>

      <div className="space-y-5">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="
              group
              flex
              w-fit
              items-center
              gap-2
              text-gray-400
              transition-all
              duration-300
              hover:text-cyan-400
            "
          >
            <span>{link.name}</span>

            <span
              className="
                translate-x-[-10px]
                opacity-0
                transition-all
                duration-300
                group-hover:translate-x-0
                group-hover:opacity-100
              "
            >
              →
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}