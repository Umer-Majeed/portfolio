"use client";

import { motion } from "framer-motion";

export default function HeroBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: .3 }}
      className="
        inline-flex
        items-center
        gap-3
        rounded-full
        border
        border-cyan-400/20
        bg-white/5
        px-5
        py-2
        backdrop-blur-xl
      "
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
      </span>

      <span className="font-mono text-xs tracking-[3px] text-cyan-300">
        SYSTEM ONLINE
      </span>
    </motion.div>
  );
}