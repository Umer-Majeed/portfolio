"use client";

import { motion } from "framer-motion";

type Props = {
  icon: React.ReactNode;
  name: string;
};

export default function TechCard({
  icon,
  name,
}: Props) {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{
        scale: 1.08,
        y: -8,
      }}
      className="
      rounded-3xl
      border
      border-cyan-400/20
      bg-white/5
      backdrop-blur-xl
      p-7
      flex
      flex-col
      items-center
      justify-center
      gap-4
      transition-all
      duration-300
      hover:border-cyan-400
      hover:shadow-[0_0_35px_rgba(0,255,255,.25)]
      "
    >
      <div className="text-5xl text-cyan-400">
        {icon}
      </div>

      <h3 className="text-lg font-semibold">
        {name}
      </h3>
    </motion.div>
  );
}