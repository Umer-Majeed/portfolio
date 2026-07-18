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
    scrolled,
    active,
    toggleMobileMenu,
    closeMobileMenu,
  } = useNavbar();

  return (
    <>
      <header className="fixed inset-x-0 top-5 z-50 px-4">
        <div
          className={`
            mx-auto
            flex
            h-20
            max-w-7xl
            items-center
            justify-between
            rounded-full
            border
            px-8
            transition-all
            duration-500
            ${
              scrolled
                ? "border-cyan-400/20 bg-black/60 backdrop-blur-2xl shadow-[0_15px_50px_rgba(0,245,255,.12)]"
                : "border-white/10 bg-white/5 backdrop-blur-xl"
            }
          `}
        >
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <NavLinks
            items={navItems}
            active={active}
          />

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* Resume Button */}
            <div className="hidden lg:block">
              <ButtonTheme href="/resume.pdf">
                Resume
              </ButtonTheme>
            </div>

            {/* Mobile Menu Button */}
            <MobileMenuButton
              open={mobileMenu}
              onClick={toggleMobileMenu}
            />
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        open={mobileMenu}
        items={navItems}
        active={active}
        onClose={closeMobileMenu}
      />
    </>
  );
}