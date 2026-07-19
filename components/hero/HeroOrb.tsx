"use client";

import { motion } from "framer-motion";

export default function HeroOrb() {
  return (
    <div className="relative flex items-center justify-center">

      {/* Ambient Glow */}

      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          h-[260px]
          w-[260px]
          rounded-full
          bg-cyan-400/20
          blur-[90px]
        "
      />

      {/* Outer Ring */}

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          repeat: Infinity,
          duration: 28,
          ease: "linear",
        }}
        className="
          absolute
          h-[420px]
          w-[420px]
          rounded-full
          border
          border-white/10
        "
      />

      {/* Middle Ring */}

      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          repeat: Infinity,
          duration: 18,
          ease: "linear",
        }}
        className="
          absolute
          h-[320px]
          w-[320px]
          rounded-full
          border
          border-cyan-400/20
        "
      />

      {/* Inner Ring */}

      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.04, 1],
        }}
        transition={{
          rotate: {
            repeat: Infinity,
            duration: 10,
            ease: "linear",
          },
          scale: {
            repeat: Infinity,
            duration: 4,
          },
        }}
        className="
          absolute
          h-[220px]
          w-[220px]
          rounded-full
          border
          border-white/20
        "
      />

      {/* Core */}

      <motion.div
        animate={{
          scale: [1, 1.12, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="
          h-28
          w-28
          rounded-full
          bg-cyan-400
          shadow-[0_0_80px_rgba(0,245,255,.5)]
        "
      />

    </div>
  );
}