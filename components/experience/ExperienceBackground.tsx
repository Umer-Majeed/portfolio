"use client";

import { motion } from "framer-motion";

export default function ExperienceBackground() {
  return (
    <>
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [.1, .2, .1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="
          absolute
          left-1/2
          top-40
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-cyan-400/20
          blur-[150px]
        "
      />

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 80,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          left-1/2
          top-52
          h-[600px]
          w-[600px]
          -translate-x-1/2
          rounded-full
          border
          border-cyan-400/10
        "
      />
    </>
  );
}