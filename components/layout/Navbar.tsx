"use client";

import { motion } from "framer-motion";
import { useActiveSection } from "@/context/ActiveSectionContext";

const links = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Journey", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { active } = useActiveSection();

  return (
    <header className="fixed left-0 right-0 top-6 z-50 flex justify-center px-4">
      <nav
        className="
          flex
          w-full
          max-w-6xl
          items-center
          justify-between
          rounded-full
          border
          border-white/10
          bg-white/5
          px-8
          py-4
          backdrop-blur-xl
          shadow-[0_0_35px_rgba(0,245,255,0.08)]
        "
      >
        {/* Logo */}

        <a
          href="#home"
          className="
            text-lg
            font-bold
            tracking-[0.25em]
            text-cyan-400
            transition
            hover:scale-105
          "
        >
          UMER OS
        </a>

        {/* Desktop Menu */}

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const section = link.href.replace("#", "");
            const isActive = active === section;

            return (
              <a
                key={link.name}
                href={link.href}
                className="
                  relative
                  px-2
                  py-2
                  text-sm
                  font-medium
                  uppercase
                  tracking-wider
                  transition-all
                  duration-300
                "
              >
                <span
                  className={
                    isActive
                      ? "text-cyan-400"
                      : "text-gray-300 hover:text-cyan-400"
                  }
                >
                  {link.name}
                </span>

                {isActive && (
                  <motion.span
                    layoutId="navbar-indicator"
                    className="
                      absolute
                      -bottom-2
                      left-0
                      h-[2px]
                      w-full
                      rounded-full
                      bg-cyan-400
                      shadow-[0_0_15px_rgba(0,245,255,.8)]
                    "
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                )}
              </a>
            );
          })}
        </div>
      </nav>
    </header>
  );
}