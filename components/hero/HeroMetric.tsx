"use client";

import { motion } from "framer-motion";

type Props = {
  label: string;
  value: string;
};

export default function HeroMetric({
  label,
  value,
}: Props) {
  return (
    <motion.div
      whileHover={{
        scale: 1.03,
      }}
      className="
        rounded-2xl
        border
        border-white/10
        bg-white/[0.03]
        p-5
        backdrop-blur-lg
      "
    >
      <p
        className="
          text-[10px]
          tracking-[4px]
          uppercase
          text-gray-400
        "
      >
        {label}
      </p>

      <motion.h3
        animate={{
          opacity: [.7, 1, .7],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="
          mt-2
          text-3xl
          font-black
          text-cyan-400
        "
      >
        {value}
      </motion.h3>
    </motion.div>
  );
}