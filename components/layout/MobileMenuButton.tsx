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
      aria-label="Toggle Menu"
      className="lg:hidden"
    >
      {open ? <X size={30} /> : <Menu size={30} />}
    </button>
  );
}