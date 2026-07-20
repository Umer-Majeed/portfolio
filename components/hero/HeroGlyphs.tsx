"use client";

import { motion } from "framer-motion";

const glyphs = [
  "◈",
  "◉",
  "✦",
  "⬢",
  "◌",
  "△",
  "◇",
  "✧",
];

export default function HeroGlyphs() {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{
        duration: 18,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute h-36 w-36"
    >
      {glyphs.map((glyph, index) => {
        const angle = (360 / glyphs.length) * index;
        const radius = 65;

        const x = Math.cos((angle * Math.PI) / 180) * radius;
        const y = Math.sin((angle * Math.PI) / 180) * radius;

        return (
          <motion.div
            key={index}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: index * 0.2,
            }}
            className="absolute text-cyan-300"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <span className="text-lg font-bold">
              {glyph}
            </span>
          </motion.div>
        );
      })}
    </motion.div>
  );
}