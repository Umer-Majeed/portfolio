"use client";

import { motion } from "framer-motion";

export default function SectionBackground() {
  return (
    <>
      {/* Aurora Left */}
      <motion.div
        animate={{
          x: [-80, 80, -80],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -left-40
          top-0
          h-[520px]
          w-[520px]
          rounded-full
          bg-cyan-500/10
          blur-[180px]
          pointer-events-none
        "
      />

      {/* Aurora Right */}
      <motion.div
        animate={{
          x: [80, -80, 80],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-0
          top-40
          h-[450px]
          w-[450px]
          rounded-full
          bg-blue-500/10
          blur-[170px]
          pointer-events-none
        "
      />

      {/* Aurora Bottom */}
      <motion.div
        animate={{
          y: [-40, 40, -40],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          bottom-0
          h-[420px]
          w-[420px]
          -translate-x-1/2
          rounded-full
          bg-purple-500/10
          blur-[170px]
          pointer-events-none
        "
      />

      {/* Grid */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          pointer-events-none
          [background-image:linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)]
          [background-size:60px_60px]
        "
      />

      {/* Noise */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.02]
          mix-blend-soft-light
          pointer-events-none
          bg-[url('/noise.png')]
        "
      />
    </>
  );
}