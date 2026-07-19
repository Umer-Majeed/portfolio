"use client";

import { motion } from "framer-motion";

const nodes = Array.from({ length: 8 });

export default function HeroRingNodes() {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute h-[420px] w-[420px]"
    >
      {nodes.map((_, index) => {
        const angle = (360 / nodes.length) * index;

        return (
          <div
            key={index}
            className="absolute left-1/2 top-1/2"
            style={{
              transform: `
                rotate(${angle}deg)
                translateY(-210px)
              `,
              transformOrigin: "center",
            }}
          >
            <div
              className="
                h-3
                w-3
                -translate-x-1/2
                rounded-full
                bg-cyan-300
                shadow-[0_0_18px_rgba(0,245,255,.8)]
              "
            />
          </div>
        );
      })}
    </motion.div>
  );
}