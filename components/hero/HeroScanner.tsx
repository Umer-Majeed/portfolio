"use client";

import { motion } from "framer-motion";

export default function HeroScanner() {
  return (
    <motion.div
      animate={{
        rotate: 360,
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "linear",
      }}
      className="
        absolute
        h-[430px]
        w-[430px]
        rounded-full
      "
    >
      <div
        className="
          absolute
          left-1/2
          top-0
          h-24
          w-[2px]
          -translate-x-1/2
          rounded-full
          bg-gradient-to-b
          from-cyan-400
          to-transparent
          shadow-[0_0_25px_rgba(0,245,255,.9)]
        "
      />
    </motion.div>
  );
}