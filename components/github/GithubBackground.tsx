"use client";

import { motion } from "framer-motion";

export default function GithubBackground() {
  return (
    <>
      <div className="absolute inset-0 bg-[#050816]" />

      <div
        className="
          absolute
          inset-0
          opacity-[0.04]
          [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)]
          [background-size:70px_70px]
        "
      />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [.15, .28, .15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="
          absolute
          -left-32
          top-20
          h-[520px]
          w-[520px]
          rounded-full
          bg-cyan-400/20
          blur-[180px]
        "
      />

      <motion.div
        animate={{
          scale: [1.15, 1, 1.15],
          opacity: [.08, .2, .08],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="
          absolute
          -right-40
          bottom-0
          h-[600px]
          w-[600px]
          rounded-full
          bg-violet-500/20
          blur-[220px]
        "
      />
    </>
  );
}