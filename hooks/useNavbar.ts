"use client";

import { useEffect, useState } from "react";
import useActiveSection from "./useActiveSection";

export default function useNavbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const active = useActiveSection();

  // Navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

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

  // Lock body scroll
  useEffect(() => {
    if (mobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

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
    active,

    toggleMobileMenu,
    closeMobileMenu,
  };
}