"use client";

import { motion } from "framer-motion";

type Props = {
  value: number;
};

export default function SkillBar({ value }: Props) {
  return (
    <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        className="
          h-full
          rounded-full
          bg-gradient-to-r
          from-cyan-400
          to-blue-500
        "
      />
    </div>
  );
}