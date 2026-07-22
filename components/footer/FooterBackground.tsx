"use client";

import { motion } from "framer-motion";

export default function FooterBackground() {
  return (
    <>
      {/* Aurora 1 */}
      <motion.div
        animate={{
          x: [-80, 100, -80],
          y: [0, -60, 0],
        }}
        transition={{
          duration: 26,
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
          blur-[170px]
        "
      />

      {/* Aurora 2 */}
      <motion.div
        animate={{
          x: [100, -100, 100],
          y: [0, 70, 0],
        }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-0
          top-32
          h-[450px]
          w-[450px]
          rounded-full
          bg-blue-500/10
          blur-[170px]
        "
      />

      {/* Aurora 3 */}
      <motion.div
        animate={{
          y: [-50, 50, -50],
        }}
        transition={{
          duration: 20,
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
          blur-[180px]
        "
      />

      {/* Grid */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          [background-image:linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)]
          [background-size:60px_60px]
        "
      />
    </>
  );
}