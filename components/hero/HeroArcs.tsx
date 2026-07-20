"use client";

import { motion } from "framer-motion";

const arcs = [
  { rotate: 18, width: 120, delay: 0 },
  { rotate: 112, width: 90, delay: 0.7 },
  { rotate: 210, width: 140, delay: 1.3 },
];

export default function HeroArcs() {
  return (
    <>
      {arcs.map((arc, index) => (
        <motion.div
          key={index}
          animate={{
            opacity: [0, 0.9, 0],
            scale: [0.95, 1.05, 0.95],
          }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            delay: arc.delay,
            ease: "easeInOut",
          }}
          className="absolute"
          style={{ transform: `rotate(${arc.rotate}deg)` }}
        >
          <div
            className="
              h-[2px]
              rounded-full
              bg-cyan-300
              shadow-[0_0_18px_rgba(0,245,255,.9)]
            "
            style={{ width: arc.width }}
          />
        </motion.div>
      ))}
    </>
  );
}