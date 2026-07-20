"use client";

import { motion } from "framer-motion";

export default function ProjectWindow({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: .6,
      }}
      className="
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-[#0d1017]
        shadow-[0_20px_60px_rgba(0,0,0,.45)]
        backdrop-blur-xl
      "
    >
      {children}
    </motion.div>
  );
}