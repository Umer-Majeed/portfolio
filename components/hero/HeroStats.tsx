"use client";

import { motion } from "framer-motion";

const stats = [
  {
    title: "CPU LOAD",
    value: "98.4%",
  },
  {
    title: "MEMORY",
    value: "32 GB",
  },
  {
    title: "PROJECTS",
    value: "18+",
  },
  {
    title: "GITHUB",
    value: "ACTIVE",
  },
  {
    title: "UPTIME",
    value: "24/7",
  },
];

export default function HeroStats() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 40,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: .8,
      }}
      className="
        w-full
        max-w-xs
        rounded-3xl
        border
        border-cyan-400/20
        bg-black/40
        p-6
        backdrop-blur-xl
      "
    >
      <h3
        className="
          mb-6
          font-mono
          text-xs
          tracking-[5px]
          text-cyan-400
        "
      >
        SYSTEM STATUS
      </h3>

      <div className="space-y-5">
        {stats.map((item) => (
          <div
            key={item.title}
            className="border-b border-white/10 pb-4"
          >
            <p className="text-xs tracking-[3px] text-gray-400">
              {item.title}
            </p>

            <motion.h4
              animate={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="
                mt-2
                text-2xl
                font-bold
                text-cyan-400
              "
            >
              {item.value}
            </motion.h4>
          </div>
        ))}
      </div>
    </motion.div>
  );
}