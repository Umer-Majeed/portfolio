"use client";

import { motion } from "framer-motion";

const lines = [
  {
    width: 180,
    rotate: 0,
  },
  {
    width: 180,
    rotate: 90,
  },
  {
    width: 180,
    rotate: 45,
  },
  {
    width: 180,
    rotate: -45,
  },
];

export default function HeroConnectionLines() {
  return (
    <>
      {lines.map((line, index) => (
        <div
          key={index}
          className="absolute left-1/2 top-1/2"
          style={{
            transform: `translate(-50%,-50%) rotate(${line.rotate}deg)`,
          }}
        >
          <div
            className="relative overflow-hidden rounded-full bg-white/10"
            style={{
              width: line.width,
              height: 2,
            }}
          >
            <motion.div
              animate={{
                x: [-40, line.width],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
                delay: index * 0.3,
              }}
              className="
                absolute
                top-0
                h-full
                w-10
                rounded-full
                bg-cyan-400
                blur-[2px]
              "
            />
          </div>
        </div>
      ))}
    </>
  );
}