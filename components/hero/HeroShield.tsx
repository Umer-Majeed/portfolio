"use client";

import { motion } from "framer-motion";

export default function HeroShield() {
  return (
    <motion.div
      animate={{
        rotate: 360,
        opacity: [0.15, 0.35, 0.15],
        scale: [1, 1.02, 1],
      }}
      transition={{
        rotate: {
          duration: 45,
          repeat: Infinity,
          ease: "linear",
        },
        opacity: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        },
        scale: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      className="
        absolute
        h-[360px]
        w-[360px]
        rounded-full
        border
        border-cyan-400/20
      "
      style={{
        clipPath:
          "polygon(25% 6.7%,75% 6.7%,100% 50%,75% 93.3%,25% 93.3%,0% 50%)",
      }}
    />
  );
}