"use client";

import { motion } from "framer-motion";

const rows = [
  ["USER", "UMER MAJEED"],
  ["ROLE", "FULL STACK ENGINEER"],
  ["STATUS", "ONLINE"],
  ["LOCATION", "PAKISTAN"],
  ["SYSTEM", "READY"],
  ["VERSION", "OS v3.0"],
];

export default function HeroTerminal() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: .8 }}
      className="
        w-full
        max-w-xl
        rounded-3xl
        border
        border-cyan-400/20
        bg-black/40
        p-8
        backdrop-blur-xl
      "
    >
      <p className="text-cyan-400 font-mono tracking-[6px] text-xs">
        UMER.OS
      </p>

      <h1 className="mt-3 text-5xl font-black text-white">
        Artificial Intelligence Interface
      </h1>

      <div className="mt-10 space-y-4">
        {rows.map(([label, value]) => (
          <div
            key={label}
            className="
              flex
              justify-between
              border-b
              border-white/10
              pb-2
              font-mono
            "
          >
            <span className="text-gray-400">
              {label}
            </span>

            <span className="text-cyan-400">
              {value}
            </span>
          </div>
        ))}
      </div>

      <p className="mt-8 font-mono text-cyan-300">
        &gt; Initializing Interface...
      </p>
    </motion.div>
  );
}