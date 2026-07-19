"use client";

import { motion } from "framer-motion";

const info = [
  ["NAME", "UMER"],
  ["ROLE", "FULL STACK ENGINEER"],
  ["STATUS", "ONLINE"],
  ["LOCATION", "PAKISTAN"],
  ["SPECIALIZATION", "AI + WEB"],
];

export default function ProfileCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .7 }}
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/[0.04]
        p-8
        backdrop-blur-xl
      "
    >
      <div className="mb-8 flex items-center justify-between">
        <span className="font-mono tracking-[5px] text-cyan-400">
          SYSTEM PROFILE
        </span>

        <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
          ONLINE
        </span>
      </div>

      <div className="space-y-6">
        {info.map(([label, value]) => (
          <div
            key={label}
            className="flex items-center justify-between border-b border-white/5 pb-4"
          >
            <span className="font-mono text-xs tracking-[3px] text-[#BDBDBD]">
              {label}
            </span>

            <span className="font-semibold text-white">
              {value}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}