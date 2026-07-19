"use client";

import { motion } from "framer-motion";

export default function HeroEnergyRing() {
  return (
    <motion.svg
      animate={{ rotate: 360 }}
      transition={{
        duration: 24,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute h-[460px] w-[460px]"
      viewBox="0 0 460 460"
    >
      <circle
        cx="230"
        cy="230"
        r="180"
        fill="none"
        stroke="rgba(0,245,255,.55)"
        strokeWidth="2"
        strokeDasharray="42 20"
        strokeLinecap="round"
      />

      <circle
        cx="230"
        cy="230"
        r="150"
        fill="none"
        stroke="rgba(255,255,255,.18)"
        strokeWidth="2"
        strokeDasharray="18 16"
        strokeLinecap="round"
      />
    </motion.svg>
  );
}