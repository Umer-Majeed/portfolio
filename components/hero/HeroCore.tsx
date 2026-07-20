"use client";

import { motion } from "framer-motion";

export default function HeroCore() {
  return (
    <div className="relative flex items-center justify-center">

      {/* OUTER ENERGY */}

      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          opacity: [.2, .45, .2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="
        absolute
        h-48
        w-48
        rounded-full
        border
        border-cyan-400/20
      "
      />

      {/* SECOND */}

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
        absolute
        h-40
        w-40
        rounded-full
        border-2
        border-dashed
        border-cyan-400/30
      "
      />

      {/* THIRD */}

      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
        absolute
        h-28
        w-28
        rounded-full
        border
        border-white/20
      "
      />

      {/* CORE */}

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="
        relative
        z-50
        h-16
        w-16
        rounded-full
        bg-cyan-300
        shadow-[0_0_100px_rgba(0,255,255,.8)]
      "
      />
    </div>
  );
}