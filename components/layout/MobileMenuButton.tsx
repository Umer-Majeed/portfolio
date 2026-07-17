"use client";

import { Menu, X } from "lucide-react";

type MobileMenuButtonProps = {
  open: boolean;
  onClick: () => void;
};

export default function MobileMenuButton({
  open,
  onClick,
}: MobileMenuButtonProps) {
  return (
    <button
      onClick={onClick}
      aria-label="Toggle Navigation"
      className="
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-xl
        border
        border-cyan-400/20
        bg-white/5
        text-white
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-cyan-400
        hover:text-cyan-400
        lg:hidden
      "
    >
      {open ? <X size={22} /> : <Menu size={22} />}
    </button>
  );
}