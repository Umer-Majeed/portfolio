"use client";

import { motion } from "framer-motion";

type Props = {
  name: string;
  delay: number;
};

export default function ModuleCard({
  name,
  delay,
}: Props) {
  return (
    <motion.div
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
        delay,
      }}
      className="
        flex
        items-center
        justify-between
        rounded-2xl
        border
        border-white/10
        bg-white/[0.04]
        px-6
        py-5
        backdrop-blur-xl
      "
    >
      <span className="font-mono tracking-[3px] text-white">
        {name}
      </span>

      <span className="text-cyan-400">
        ✓
      </span>
    </motion.div>
  );
}