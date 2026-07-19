"use client";

import { motion } from "framer-motion";

const modules = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "Tailwind CSS",
  "Framer Motion",
  "GSAP",
  "Three.js",
  "OpenAI API",
];

export default function InstallTerminal() {
  return (
    <div
      className="
        rounded-3xl
        border
        border-white/10
        bg-[#0b1120]/80
        backdrop-blur-xl
        overflow-hidden
      "
    >
      {/* Header */}
      <div
        className="
          flex
          items-center
          justify-between
          border-b
          border-white/10
          px-6
          py-4
        "
      >
        <div className="flex gap-2">
          <div className="h-3 w-3 rounded-full bg-red-400" />
          <div className="h-3 w-3 rounded-full bg-yellow-400" />
          <div className="h-3 w-3 rounded-full bg-green-400" />
        </div>

        <span className="font-mono text-xs tracking-[4px] text-cyan-400">
          INSTALL TERMINAL
        </span>
      </div>

      {/* Body */}

      <div className="space-y-3 p-6">
        {modules.map((module, index) => (
          <motion.div
            key={module}
            initial={{
              opacity: 0,
              x: -20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.08,
            }}
            className="flex justify-between"
          >
            <span className="font-mono text-sm text-white">
              Installing {module}
            </span>

            <span className="text-cyan-400">✓</span>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: 1.4,
          }}
          className="pt-5 font-mono text-cyan-400"
        >
          SYSTEM READY
        </motion.div>
      </div>
    </div>
  );
}