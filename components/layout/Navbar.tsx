"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import ButtonTheme from "../ui/Button";
import Logo from "./Logo";
import { navItems } from "@/data/navigation";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navItems.map((item) =>
        document.querySelector(item.href)
      );

      sections.forEach((section) => {
        if (!section) return;

        const top = (section as HTMLElement).offsetTop - 120;
        const height = (section as HTMLElement).offsetHeight;

        if (window.scrollY >= top && window.scrollY < top + height) {
          setActive(section.id);
        }
      });
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "border-b border-cyan-400/20 bg-black/55 backdrop-blur-2xl shadow-[0_0_40px_rgba(0,245,255,.08)]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
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

          {/* Resume Button */}
          <ButtonTheme href="./resume.pdf">
            Resume
          </ButtonTheme>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="lg:hidden"
          >
            {mobileMenu ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed left-4 right-4 top-20 z-40 rounded-3xl border border-cyan-400/20 bg-[#07111d]/95 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex flex-col p-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenu(false)}
                  className={`rounded-xl px-4 py-4 transition ${
                    active === item.href.replace("#", "")
                      ? "bg-cyan-400 text-black"
                      : "text-gray-300 hover:bg-white/5"
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}