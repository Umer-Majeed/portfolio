"use client";

import { motion } from "framer-motion";

export default function SkillRadar() {
  const labels = [
    "Frontend",
    "Backend",
    "AI",
    "Database",
    "DevOps",
    "Tools",
  ];

  return (
    <div
      className="
        relative
        flex
        h-[420px]
        items-center
        justify-center
      "
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          h-72
          w-72
          rounded-full
          border
          border-cyan-400/20
        "
      />

      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          h-56
          w-56
          rounded-full
          border
          border-cyan-400/10
        "
      />

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="
          absolute
          h-24
          w-24
          rounded-full
          bg-cyan-400/10
          blur-2xl
        "
      />

      <div className="relative h-72 w-72">
        {labels.map((item, index) => {
          const angle = (360 / labels.length) * index;

          return (
            <div
              key={item}
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: `rotate(${angle}deg) translate(120px) rotate(-${angle}deg)`,
                transformOrigin: "0 0",
              }}
            >
              <div
                className="
                  rounded-full
                  border
                  border-cyan-400/20
                  bg-[#08101d]
                  px-3
                  py-2
                  text-xs
                  font-mono
                  text-cyan-300
                "
              >
                {item}
              </div>
            </div>
          );
        })}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-cyan-400/30
            bg-cyan-400/10
            px-6
            py-4
            font-bold
            text-cyan-300
          "
        >
          AI
        </div>
      </div>
    </div>
  );
}