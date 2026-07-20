"use client";

import { motion } from "framer-motion";

const satellites = [
  { size: 16, radius: 180, duration: 16, delay: 0 },
  { size: 12, radius: 150, duration: 12, delay: 1 },
  { size: 14, radius: 210, duration: 20, delay: 2 },
];

export default function HeroSatellites() {
  return (
    <>
      {satellites.map((sat, index) => (
        <motion.div
          key={index}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: sat.duration,
            repeat: Infinity,
            ease: "linear",
            delay: sat.delay,
          }}
          className="absolute"
        >
          <div
            style={{
              transform: `translateX(${sat.radius}px)`,
            }}
          >
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: sat.delay,
              }}
              className="
                flex
                items-center
                justify-center
                rounded-full
                border
                border-cyan-400/40
                bg-[#07111d]
                shadow-[0_0_20px_rgba(0,255,255,.4)]
              "
              style={{
                width: sat.size,
                height: sat.size,
              }}
            >
              <div className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
            </motion.div>
          </div>
        </motion.div>
      ))}
    </>
  );
}