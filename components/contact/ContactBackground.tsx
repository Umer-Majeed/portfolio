"use client";

import { motion } from "framer-motion";

export default function ContactBackground() {
  return (
    <>
      {/* Background */}
      <div className="absolute inset-0 -z-30 bg-[#050816]" />

      {/* Grid */}
      <div
        className="
          absolute
          inset-0
          -z-20
          opacity-[0.05]
          [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)]
          [background-size:70px_70px]
        "
      />

      {/* Cyan Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.25, 0.4, 0.25],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="
          absolute
          left-0
          top-0
          -z-10
          h-[450px]
          w-[450px]
          rounded-full
          bg-cyan-400/20
          blur-[140px]
        "
      />

      {/* Purple Glow */}
      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="
          absolute
          bottom-0
          right-0
          -z-10
          h-[500px]
          w-[500px]
          rounded-full
          bg-violet-500/20
          blur-[160px]
        "
      />
    </>
  );
}