"use client";

import { motion } from "framer-motion";
import type { NavItem } from "@/data/navigation";

type NavLinkItemProps = {
  item: NavItem;
  active: string;
  mobile?: boolean;
  onClick?: () => void;
};

export default function NavLinkItem({
  item,
  active,
  mobile = false,
  onClick,
}: NavLinkItemProps) {
  const isActive = active === item.href.replace("#", "");

  // Mobile Navigation
  if (mobile) {
    return (
      <a
        href={item.href}
        onClick={onClick}
        className={`rounded-xl px-4 py-4 transition-all duration-300 ${
          isActive
            ? "bg-cyan-400 text-black"
            : "text-gray-300 hover:bg-white/5"
        }`}
      >
        {item.name}
      </a>
    );
  }

  // Desktop Navigation
  return (
    <a
      href={item.href}
      className={`group relative py-2 text-sm font-medium tracking-wide transition-colors duration-300 ${
        isActive
          ? "text-cyan-400"
          : "text-gray-300 hover:text-cyan-400"
      }`}
    >
      {item.name}

      {/* Active Animated Indicator */}
      {isActive && (
        <motion.span
          layoutId="navbar-indicator"
          className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,.8)]"
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 30,
          }}
        />
      )}

      {/* Hover Underline */}
      {!isActive && (
        <span
          className="
            absolute
            bottom-0
            left-0
            h-[2px]
            w-0
            rounded-full
            bg-cyan-400
            opacity-0
            transition-all
            duration-300
            group-hover:w-full
            group-hover:opacity-100
          "
        />
      )}
    </a>
  );
}