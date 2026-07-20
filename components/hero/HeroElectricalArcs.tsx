"use client";

import { motion } from "framer-motion";

const arcs = [
  {
    rotate: 20,
    delay: 0,
  },
  {
    rotate: 110,
    delay: 1,
  },
  {
    rotate: 210,
    delay: 2,
  },
];

export default function HeroElectricArcs() {
  return (
    <>
      {arcs.map((arc, i) => (
        <motion.div
          key={i}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 0.25,
            delay: arc.delay,
            repeat: Infinity,
            repeatDelay: 2,
          }}
          style={{
            transform: `rotate(${arc.rotate}deg)`,
          }}
          className="
            absolute
            h-[300px]
            w-[2px]
            bg-cyan-300
            shadow-[0_0_25px_rgba(0,255,255,.8)]
          "
        />
      ))}
    </>
  );
}