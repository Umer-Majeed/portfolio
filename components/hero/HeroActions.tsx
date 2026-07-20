"use client";

import { motion } from "framer-motion";
import { ArrowRight, FolderOpen } from "lucide-react";

export default function HeroActions() {
  return (
    <div className="mt-10 flex flex-wrap gap-5">

      {/* Primary Button */}
      <motion.a
        href="#projects"
        whileHover={{
          scale: 1.05,
          y: -2,
        }}
        whileTap={{
          scale: 0.97,
        }}
        className="
          group
          relative
          flex
          items-center
          gap-3
          overflow-hidden
          rounded-xl
          border
          border-cyan-400/30
          bg-cyan-400/10
          px-7
          py-4
          font-medium
          text-cyan-300
          backdrop-blur-xl
        "
      >
        <span className="relative z-10">
          Launch System
        </span>

        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />

        <motion.div
          initial={{
            x: "-120%",
          }}
          whileHover={{
            x: "120%",
          }}
          transition={{
            duration: .7,
          }}
          className="
            absolute
            inset-y-0
            w-16
            bg-white/20
            blur-xl
          "
        />
      </motion.a>

      {/* Secondary Button */}
      <motion.a
        href="#projects"
        whileHover={{
          scale: 1.05,
          y: -2,
        }}
        whileTap={{
          scale: 0.97,
        }}
        className="
          flex
          items-center
          gap-3
          rounded-xl
          border
          border-white/10
          bg-white/[0.04]
          px-7
          py-4
          text-white
          backdrop-blur-xl
          transition-colors
          hover:border-cyan-400/30
        "
      >
        <FolderOpen size={18} />

        Explore Projects
      </motion.a>

    </div>
  );
}