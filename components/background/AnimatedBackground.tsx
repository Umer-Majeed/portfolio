"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#050816]">

      {/* Grid */}

      <div
        className="
        absolute
        inset-0
        bg-[linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)]
        bg-[size:60px_60px]
        "
      />

      {/* Orb 1 */}

      <motion.div
        animate={{
          x: [0, 120, -80, 0],
          y: [0, -120, 100, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        top-20
        left-20
        w-96
        h-96
        rounded-full
        bg-cyan-400/20
        blur-[120px]
        "
      />

      {/* Orb 2 */}

      <motion.div
        animate={{
          x: [0, -120, 100, 0],
          y: [0, 120, -80, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        bottom-20
        right-20
        w-[500px]
        h-[500px]
        rounded-full
        bg-purple-500/20
        blur-[150px]
        "
      />

      {/* Orb 3 */}

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="
        absolute
        top-1/2
        left-1/2
        w-72
        h-72
        rounded-full
        bg-sky-400/20
        blur-[120px]
        -translate-x-1/2
        -translate-y-1/2
        "
      />
    </div>
  );
}