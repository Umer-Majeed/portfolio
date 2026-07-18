"use client";

import ResumeButton from "./ResumeButton";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import MobileMenuButton from "./MobileMenuButton";

import { navItems } from "@/data/navigation";
import useNavbar from "@/hooks/useNavbar";

import {
  navbarBase,
  navbarScrolled,
  navbarTop,
} from "@/lib/navbar";

export default function Navbar() {
  const {
    mobileMenu,
    scrolled,
    visible,
    active,
    toggleMobileMenu,
    closeMobileMenu,
  } = useNavbar();

  return (
    <>
      <header
        className={`
          fixed
          inset-x-0
          top-5
          z-50
          px-4
          transition-transform
          duration-500
          ${
            visible
              ? "translate-y-0"
              : "-translate-y-32"
          }
        `}
      >
        <div
          className={`
            ${navbarBase}
            ${
              scrolled
                ? navbarScrolled
                : navbarTop
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
           <ResumeButton />

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