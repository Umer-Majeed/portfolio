"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

type Props = {
  children: ReactNode;
};

export default function ProjectWindow({
  children,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.015,
      }}
      transition={{
        duration: 0.35,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-[#08101d]/90
        backdrop-blur-2xl
        shadow-[0_0_40px_rgba(0,0,0,.45)]
      "
    >
      {/* Animated Border */}
      <div
        className="
          absolute
          inset-0
          rounded-3xl
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
          bg-[linear-gradient(120deg,transparent,rgba(0,255,255,.08),transparent)]
        "
      />

      {/* Window Header */}
      <div
        className="
          flex
          items-center
          justify-between
          border-b
          border-white/10
          px-5
          py-4
          bg-white/[0.03]
        "
      >
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-500" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-green-500" />
        </div>

        <div
          className="
            font-mono
            text-[11px]
            tracking-[3px]
            text-cyan-400
          "
        >
          PROJECT.EXE
        </div>

        <div
          className="
            rounded-full
            border
            border-green-400/20
            bg-green-400/10
            px-3
            py-1
            font-mono
            text-[10px]
            tracking-[2px]
            text-green-400
          "
        >
          ONLINE
        </div>
      </div>

      {/* Content */}
      <div className="relative p-6">
        {children}
      </div>

      {/* Scanner */}
      <motion.div
        initial={{
          x: "-120%",
        }}
        whileHover={{
          x: "140%",
        }}
        transition={{
          duration: 1.4,
        }}
        className="
          pointer-events-none
          absolute
          inset-y-0
          w-24
          bg-gradient-to-r
          from-transparent
          via-cyan-400/20
          to-transparent
          blur-xl
        "
      />

      {/* Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -bottom-20
          left-1/2
          h-40
          w-40
          -translate-x-1/2
          rounded-full
          bg-cyan-400/10
          blur-[90px]
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />
    </motion.div>
  );
}