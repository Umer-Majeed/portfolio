"use client";

import { motion } from "framer-motion";

export default function HeroScroll() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0.4, 1, 0.4],
        y: [0, 8, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="
        absolute
        bottom-8
        left-1/2
        z-20
        flex
        -translate-x-1/2
        flex-col
        items-center
        gap-3
      "
    >
      {/* Mouse */}
      <div
        className="
          relative
          flex
          h-14
          w-8
          justify-center
          rounded-full
          border
          border-cyan-400/40
        "
      >
        <motion.div
          animate={{
            y: [6, 22, 6],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
          }}
          className="
            mt-2
            h-2
            w-2
            rounded-full
            bg-cyan-400
            shadow-[0_0_10px_rgba(0,245,255,.8)]
          "
        />
      </div>

      {/* Text */}
      <div className="text-center">
        <p
          className="
            font-mono
            text-[10px]
            tracking-[5px]
            text-cyan-300
          "
        >
          SCROLL TO INITIALIZE
        </p>

        <p
          className="
            mt-1
            text-[11px]
            text-[#BDBDBD]
          "
        >
          Explore Umer.OS
        </p>
      </div>
    </motion.div>
  );
}