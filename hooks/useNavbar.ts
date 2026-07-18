"use client";

import { useEffect, useRef, useState } from "react";
import useActiveSection from "./useActiveSection";

export default function useNavbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);

  const lastScrollY = useRef(0);

  const active = useActiveSection();

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      setScrolled(currentScroll > 40);

      if (currentScroll <= 50) {
        setVisible(true);
      } else if (currentScroll > lastScrollY.current) {
        // scrolling down
        setVisible(false);
      } else {
        // scrolling up
        setVisible(true);
      }

      lastScrollY.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenu ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenu]);

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