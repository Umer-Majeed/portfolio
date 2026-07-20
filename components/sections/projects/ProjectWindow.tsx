"use client";

import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
};

export default function ProjectWindow({
  children,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -6,
      }}
      transition={{
        duration: 0.35,
      }}
      className="
        overflow-hidden
        rounded-3xl
        border
        border-cyan-400/15
        bg-[#07111d]
        shadow-[0_0_60px_rgba(0,255,255,.08)]
      "
    >
      {/* Window Header */}

      <div
        className="
          flex
          items-center
          justify-between
          border-b
          border-white/10
          bg-white/[0.03]
          px-5
          py-3
        "
      >
        <div className="flex gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-400" />
          <div className="h-3 w-3 rounded-full bg-green-500" />
        </div>

        <span className="font-mono text-[11px] tracking-[3px] text-cyan-400">
          DEPLOYMENT
        </span>

        <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
      </div>

      <div className="p-6">
        {children}
      </div>
    </motion.div>
  );
}