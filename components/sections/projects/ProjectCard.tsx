"use client";

import { motion } from "framer-motion";

type Props = {
  title: string;
  year: string;
  status: string;
};

export default function ProjectCard({
  title,
  year,
  status,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        borderColor: "rgba(0,245,255,.4)",
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/[0.04]
        p-8
        backdrop-blur-xl
        transition-all
      "
    >
      <p className="font-mono text-xs tracking-[4px] text-cyan-400">
        {year}
      </p>

      <h3 className="mt-5 text-3xl font-bold text-white">
        {title}
      </h3>

      <div className="mt-10 flex items-center justify-between">
        <span className="text-[#BDBDBD]">
          {status}
        </span>

        <span
          className="
            font-mono
            text-sm
            tracking-[3px]
            text-cyan-400
          "
        >
          OPEN →
        </span>
      </div>

      <motion.div
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{
          duration: 1.2,
        }}
        className="
          absolute
          inset-y-0
          w-20
          bg-gradient-to-r
          from-transparent
          via-cyan-400/20
          to-transparent
          blur-xl
        "
      />
    </motion.div>
  );
}