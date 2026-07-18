"use client";

import { motion } from "framer-motion";

export default function HeroGlow() {
  return (
    <>
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -left-40
          top-0
          h-[500px]
          w-[500px]
          rounded-full
          bg-cyan-400
          blur-[180px]
          pointer-events-none
        "
        style={{ opacity: 0.15 }}
      />

      <motion.div
        animate={{
          scale: [1.1, 0.95, 1.1],
          opacity: [0.08, 0.18, 0.08],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -right-40
          bottom-0
          h-[500px]
          w-[500px]
          rounded-full
          bg-cyan-400
          blur-[220px]
          pointer-events-none
        "
        style={{ opacity: 0.1 }}
      />
    </>
  );
}