"use client";

import { motion } from "framer-motion";

export default function HeroScanLines() {
  return (
    <motion.div
      animate={{
        y: [0, 40],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear",
      }}
      className="
        pointer-events-none
        absolute
        inset-0
        opacity-[0.04]
      "
      style={{
        backgroundImage: `
          linear-gradient(
            to bottom,
            transparent 50%,
            rgba(255,255,255,.12) 51%,
            transparent 52%
          )
        `,
        backgroundSize: "100% 8px",
      }}
    />
  );
}