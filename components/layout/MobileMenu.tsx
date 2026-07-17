"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { NavItem } from "@/data/navigation";

type MobileMenuProps = {
  open: boolean;
  active: string;
  items: readonly NavItem[];
  onClose: () => void;
};

export default function MobileMenu({
  open,
  active,
  items,
  onClose,
}: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed left-4 right-4 top-20 z-40 rounded-3xl border border-cyan-400/20 bg-[#07111d]/95 backdrop-blur-2xl lg:hidden"
        >
          <div className="flex flex-col p-6">
            {items.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={onClose}
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
  );
}