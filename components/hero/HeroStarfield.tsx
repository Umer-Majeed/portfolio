"use client";

import { motion } from "framer-motion";

const stars = Array.from({ length: 120 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1,
  duration: Math.random() * 4 + 2,
  delay: Math.random() * 4,
}));

export default function HeroStarfield() {
  return (
    <>
      {stars.map((star) => (
        <motion.div
          key={star.id}
          initial={{
            opacity: 0.2,
            scale: 1,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.8, 1],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
          className="absolute rounded-full bg-cyan-300"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
            boxShadow: "0 0 12px rgba(0,255,255,.8)",
          }}
        />
      ))}
    </>
  );
}