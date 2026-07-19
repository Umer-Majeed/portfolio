"use client";

import { motion } from "framer-motion";

type Props = {
  year: string;
  company: string;
  role: string;
  description: string;
};

export default function LogEntry({
  year,
  company,
  role,
  description,
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -40,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true }}
      className="
        relative
        rounded-3xl
        border
        border-white/10
        bg-white/[0.04]
        p-8
        backdrop-blur-xl
      "
    >
      <div className="absolute left-0 top-8 h-10 w-1 rounded-r-full bg-cyan-400" />

      <p className="font-mono text-xs tracking-[4px] text-cyan-400">
        {year}
      </p>

      <h3 className="mt-3 text-2xl font-bold text-white">
        {role}
      </h3>

      <p className="mt-2 text-[#BDBDBD]">
        {company}
      </p>

      <p className="mt-6 leading-8 text-[#BDBDBD]">
        {description}
      </p>
    </motion.div>
  );
}