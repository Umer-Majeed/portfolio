"use client";

import { motion } from "framer-motion";

export default function HeroCore() {
  return (
    <motion.div
      animate={{
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="relative z-30 flex items-center justify-center"
    >
      {/* Glow */}
      <div
        className="
          absolute
          h-40
          w-40
          rounded-full
          bg-cyan-400/20
          blur-[60px]
        "
      />

      {/* Hexagon */}
      <div
        className="
          relative
          flex
          h-28
          w-28
          items-center
          justify-center
          border
          border-cyan-400/50
          bg-[#07111d]/80
          backdrop-blur-xl
        "
        style={{
          clipPath:
            "polygon(25% 6%,75% 6%,100% 50%,75% 94%,25% 94%,0% 50%)",
        }}
      >
        <div className="text-center">
          <p className="font-mono text-[10px] tracking-[4px] text-cyan-300">
            AI
          </p>

          <p className="mt-1 text-sm font-bold tracking-[3px] text-white">
            CORE
          </p>
        </div>
      </div>
    </motion.div>
  );
}