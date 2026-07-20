"use client";

import { motion } from "framer-motion";

const streams = [
  { angle: 0, delay: 0 },
  { angle: 60, delay: .5 },
  { angle: 120, delay: 1 },
  { angle: 180, delay: 1.5 },
  { angle: 240, delay: 2 },
  { angle: 300, delay: 2.5 },
];

export default function HeroDataStreams() {
  return (
    <>
      {streams.map((stream, i) => (
        <motion.div
          key={i}
          style={{
            rotate: `${stream.angle}deg`,
          }}
          className="absolute"
        >
          <div className="relative h-[170px] w-[2px]">

            <div className="absolute inset-0 bg-white/5" />

            <motion.div
              animate={{
                y: [0, 170],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: stream.delay,
                ease: "linear",
              }}
              className="
                absolute
                left-1/2
                h-4
                w-2
                -translate-x-1/2
                rounded-full
                bg-cyan-300
                shadow-[0_0_18px_rgba(0,255,255,.9)]
              "
            />
          </div>
        </motion.div>
      ))}
    </>
  );
}