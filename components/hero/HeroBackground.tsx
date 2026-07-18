"use client";

import HeroGrid from "./HeroGrid";
import HeroGlow from "./HeroGlow";
import HeroParticles from "./HeroParticles";

export default function HeroBackground() {
  return (
    <>
      {/* Base Background */}
      <div className="absolute inset-0 bg-[var(--background)]" />

      {/* Grid */}
      <HeroGrid />

      {/* Glow */}
      <HeroGlow />

      {/* Particles */}
      <HeroParticles />

      {/* Noise Layer */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          mix-blend-soft-light
          pointer-events-none
        "
        style={{
          backgroundImage:
            "url('https://grainy-gradients.vercel.app/noise.svg')",
        }}
      />
    </>
  );
}