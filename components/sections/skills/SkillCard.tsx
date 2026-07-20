"use client";

import { motion } from "framer-motion";
import SkillBar from "./SkillBar";

type Props = {
  name: string;
  level: number;
};

export default function SkillCard({
  name,
  level,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      transition={{
        duration: .25,
      }}
      className="
        group
        rounded-2xl
        border
        border-white/10
        bg-white/[0.04]
        p-5
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-cyan-400/30
        hover:shadow-[0_0_35px_rgba(0,255,255,.12)]
      "
    >
      <div className="flex items-center justify-between">

        <h4
          className="
            text-base
            font-semibold
            text-white
            transition-colors
            duration-300
            group-hover:text-cyan-300
          "
        >
          {name}
        </h4>

        <span
          className="
            rounded-full
            border
            border-cyan-400/20
            bg-cyan-400/10
            px-3
            py-1
            font-mono
            text-xs
            tracking-[2px]
            text-cyan-300
          "
        >
          {level}%
        </span>

      </div>

      <SkillBar value={level} />
    </motion.div>
  );
}