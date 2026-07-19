"use client";

import { motion } from "framer-motion";

const particles = [
  { size: 10, x: 170, y: 0, duration: 8 },
  { size: 8, x: -170, y: 0, duration: 10 },
  { size: 6, x: 0, y: 170, duration: 12 },
  { size: 12, x: 0, y: -170, duration: 9 },
  { size: 7, x: 120, y: -120, duration: 11 },
  { size: 9, x: -120, y: 120, duration: 13 },
];

export default function HeroParticles() {
  return (
    <>
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className="absolute"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div
            style={{
              transform: `translate(${particle.x}px, ${particle.y}px)`,
            }}
            className="flex items-center justify-center"
          >
            <motion.div
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.3,
              }}
              style={{
                width: particle.size,
                height: particle.size,
              }}
              className="
                rounded-full
                bg-cyan-400
                shadow-[0_0_18px_rgba(0,245,255,.8)]
              "
            />
          </div>
        </motion.div>
      ))}
    </>
  );
}