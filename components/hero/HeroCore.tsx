"use client";

import { motion } from "framer-motion";

export default function HeroCore() {
  return (
    <div className="relative flex items-center justify-center">

      {/* Outer Pulse */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.15, 0.45, 0.15],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          h-44
          w-44
          rounded-full
          border
          border-cyan-400/20
        "
      />

      {/* Reactor Ring */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          h-32
          w-32
          rounded-full
          border-2
          border-dashed
          border-cyan-300/40
        "
      />

      {/* Iris */}
      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          h-20
          w-20
          rounded-full
          border
          border-cyan-300/40
          bg-cyan-400/10
          backdrop-blur-md
        "
      />

      {/* Scanning Line */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          h-20
          w-[2px]
          bg-cyan-300
          shadow-[0_0_18px_rgba(0,255,255,.8)]
        "
      />

      {/* Core */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          boxShadow: [
            "0 0 30px rgba(0,255,255,.4)",
            "0 0 70px rgba(0,255,255,.9)",
            "0 0 30px rgba(0,255,255,.4)",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="
          relative
          z-20
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          bg-cyan-300
        "
      >
        <motion.div
          animate={{
            scale: [1, 0.6, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          className="
            h-3
            w-3
            rounded-full
            bg-black
          "
        />
      </motion.div>

    </div>
  );
}