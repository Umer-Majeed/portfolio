"use client";

import { motion } from "framer-motion";

type Props = {
  title: string;
};

export default function SkillChip({ title }: Props) {
  return (
    <motion.div
      whileHover={{
        scale: 1.08,
        y: -8,
      }}
      whileTap={{
        scale: 0.95,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-cyan-400/20
        bg-white/[0.04]
        px-8
        py-5
        backdrop-blur-xl
        cursor-default
      "
    >
      {/* Hover Glow */}
      <div
        className="
          absolute
          inset-0
          opacity-0
          group-hover:opacity-100
          transition
          duration-500
          bg-cyan-400/10
          blur-xl
        "
      />

      <div className="relative">
        <p
          className="
            relative
            z-10
            font-semibold
            tracking-wide
            text-white
            transition
            duration-300
            group-hover:text-cyan-300
          "
        >
          {title}
        </p>
      </div>
    </motion.div>
  );
}