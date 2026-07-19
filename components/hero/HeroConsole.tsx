"use client";

import { motion } from "framer-motion";

const logs = [
  "BOOTING UMER.OS...",
  "Loading AI Modules...",
  "Scanning Portfolio...",
  "Syncing GitHub...",
  "Loading Projects...",
  "System Ready.",
];

export default function HeroConsole() {
  return (
    <div
      className="
        absolute
        bottom-10
        left-1/2
        w-[420px]
        -translate-x-1/2
        rounded-2xl
        border
        border-cyan-400/20
        bg-black/40
        p-5
        backdrop-blur-xl
      "
    >
      {logs.map((log, index) => (
        <motion.p
          key={log}
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: index * 0.4,
            duration: 0.4,
          }}
          className="font-mono text-sm text-cyan-300"
        >
          {">"} {log}
        </motion.p>
      ))}
    </div>
  );
}