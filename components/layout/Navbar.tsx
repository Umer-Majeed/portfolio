"use client";

import ButtonTheme from "../ui/Button";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import MobileMenuButton from "./MobileMenuButton";

import { navItems } from "@/data/navigation";
import useNavbar from "@/hooks/useNavbar";

export default function Navbar() {
  const {
    mobileMenu,
    setMobileMenu,
    scrolled,
    active,
  } = useNavbar();

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
          <NavLinks
            items={navItems}
            active={active}
          />

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* Desktop Resume Button */}
            <div className="hidden lg:block">
              <ButtonTheme href="/resume.pdf">
                Resume
              </ButtonTheme>
            </div>

            {/* Mobile Menu Button */}
            <MobileMenuButton
              open={mobileMenu}
              onClick={() => setMobileMenu(!mobileMenu)}
            />
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        open={mobileMenu}
        items={navItems}
        active={active}
        onClose={() => setMobileMenu(false)}
      />
    </>
  );
}