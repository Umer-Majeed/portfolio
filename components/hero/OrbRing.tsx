"use client";

import { motion } from "framer-motion";

type OrbRingProps = {
  size: number;
  duration: number;
};

export default function OrbRing({
  size,
  duration,
}: OrbRingProps) {
  return (
    <motion.div
      animate={{
        rotate: 360,
      }}
      transition={{
        repeat: Infinity,
        ease: "linear",
        duration,
      }}
      className="
        absolute
        rounded-full
        border
        border-white/10
      "
      style={{
        width: size,
        height: size,
      }}
    />
  );
}