"use client";

import { motion } from "framer-motion";

const logs = [
  "Loading AI Modules...",
  "React ✓",
  "Next.js ✓",
  "TypeScript ✓",
  "Node.js ✓",
  "MongoDB ✓",
  "OpenAI ✓",
  "Machine Learning ✓",
  "Deployment Ready ✓",
];

export default function SkillTerminal() {
  return (
    <div
      className="
        mt-16
        overflow-hidden
        rounded-3xl
        border
        border-cyan-400/20
        bg-black
      "
    >
      <div
        className="
          flex
          items-center
          gap-2
          border-b
          border-white/10
          bg-white/[0.04]
          px-5
          py-4
        "
      >
        <div className="h-3 w-3 rounded-full bg-red-500" />
        <div className="h-3 w-3 rounded-full bg-yellow-400" />
        <div className="h-3 w-3 rounded-full bg-green-500" />

        <span className="ml-3 font-mono text-xs tracking-[3px] text-cyan-400">
          AI TERMINAL
        </span>
      </div>

      <div className="space-y-2 p-6 font-mono text-sm">
        {logs.map((line, index) => (
          <motion.p
            key={line}
            initial={{
              opacity: 0,
              x: -20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: index * .08,
            }}
            className="text-green-400"
          >
            {line}
          </motion.p>
        ))}
      </div>
    </div>
  );
}