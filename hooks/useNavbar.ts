"use client";

import { useEffect, useState } from "react";
import useActiveSection from "./useActiveSection";

export default function useNavbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const active = useActiveSection();

  // Navbar background + Hide/Show on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      setScrolled(currentScroll > 40);

      if (currentScroll < 20) {
        setVisible(true);
      } else if (currentScroll > lastScrollY) {
        // Scrolling Down
        setVisible(false);
      } else {
        // Scrolling Up
        setVisible(true);
      }

      setLastScrollY(currentScroll);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close mobile menu when screen becomes desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () =>
      window.removeEventListener("resize", handleResize);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenu ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenu]);

  // Actions
  const toggleMobileMenu = () => {
    setMobileMenu((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenu(false);
  };

  return {
    mobileMenu,
    scrolled,
    visible,
    active,

    toggleMobileMenu,
    closeMobileMenu,
  };
}