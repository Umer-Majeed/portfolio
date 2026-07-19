"use client";

import { motion } from "framer-motion";

import HeroParticles from "./HeroParticles";
import HeroScanner from "./HeroScanner";
import HeroEnergyRing from "./HeroEnergyRing";
import HeroRingNodes from "./HeroRingNodes";
import HeroCore from "./HeroCore";
import HeroConnectionLines from "./HeroConnectionLines";
import HeroHUD from "./HeroHUD";

export default function HeroOrb() {
  return (
    <div className="relative flex h-[520px] w-[520px] items-center justify-center">

      {/* Ambient Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.45, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          h-[280px]
          w-[280px]
          rounded-full
          bg-cyan-400/20
          blur-[100px]
        "
      />

      {/* Energy Ring */}
      <HeroEnergyRing />

      {/* Outer Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          h-[420px]
          w-[420px]
          rounded-full
          border
          border-white/10
        "
      />

      {/* Ring Nodes */}
      <HeroRingNodes />

      {/* Middle Ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          h-[320px]
          w-[320px]
          rounded-full
          border
          border-cyan-400/20
        "
      />

      {/* Scanner */}
      <HeroScanner />

      {/* Inner Ring */}
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.04, 1],
        }}
        transition={{
          rotate: {
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          },
          scale: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="
          absolute
          h-[220px]
          w-[220px]
          rounded-full
          border
          border-white/20
        "
      />

      {/* Orbit Particles */}
      <HeroParticles />

      {/* Core Glow */}
      <motion.div
        animate={{
          scale: [1, 1.18, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          h-44
          w-44
          rounded-full
          bg-cyan-400/10
          blur-[55px]
        "
      />

      {/* AI Core */}
      <HeroConnectionLines />
      <HeroHUD />
      <HeroCore />

    </div>
  );
}