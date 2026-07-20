"use client";
import HeroSatellites from "./HeroSatellites";
import HeroShield from "./HeroShield";
import { motion } from "framer-motion";
import HeroGlyphs from "./HeroGlyphs";
import HeroCore from "./HeroCore";
import HeroEnergyRing from "./HeroEnergyRing";
import HeroScanner from "./HeroScanner";
import HeroRingNodes from "./HeroRingNodes";
import HeroParticles from "./HeroParticles";
import HeroConnectionLines from "./HeroConnectionLines";
import HeroHUD from "./HeroHUD";
import HeroMagnetic from "./HeroMagnetic";
import HeroElectricalArcs from "./HeroElectricalArcs";

export default function HeroOrb() {
  return (
    <HeroMagnetic>
      <div className="relative flex h-[520px] w-[520px] items-center justify-center">

        {/* Background Glow */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.4, 0.15],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            h-[320px]
            w-[320px]
            rounded-full
            bg-cyan-400/20
            blur-[120px]
          "
        />

        {/* Main Energy Ring */}
        <HeroEnergyRing />

        {/* Outer Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            absolute
            h-[430px]
            w-[430px]
            rounded-full
            border
            border-white/10
          "
        />

        {/* Rotating Nodes */}
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
<HeroShield />
        {/* Inner Ring */}
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.03, 1],
          }}
          transition={{
            rotate: {
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            },
            scale: {
              duration: 3,
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
<HeroSatellites />
        {/* Connection Lines */}
        <HeroConnectionLines />

        {/* Electric Arcs */}
        <HeroElectricalArcs />

        {/* Core Glow */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.7, 0.3],
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
            blur-[70px]
          "
        />

        {/* HUD Overlay */}
        <HeroHUD />

<HeroGlyphs />

        {/* AI Core */}
        <HeroCore />

      </div>
    </HeroMagnetic>
  );
}