"use client";

import { motion } from "framer-motion";

interface TechBadgeProps {
  name: string;
}

export default function TechBadge({
  name,
}: TechBadgeProps) {
  return (
    <motion.span
      whileHover={{
        scale: 1.08,
        y: -3,
      }}
      transition={{
        duration: 0.2,
      }}
      className="
        inline-flex
        items-center
        justify-center
        rounded-full
        border
        border-cyan-400/20
        bg-cyan-400/10
        px-5
        py-2
        text-sm
        font-medium
        text-cyan-300
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-cyan-400
        hover:bg-cyan-400/20
        hover:shadow-[0_0_20px_rgba(0,245,255,.25)]
      "
    >
      {name}
    </motion.span>
  );
}