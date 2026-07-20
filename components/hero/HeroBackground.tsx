"use client";

import HeroGrid from "./HeroGrid";
import HeroGlow from "./HeroGlow";
import HeroParticles from "./HeroParticles";
import HeroNoise from "./HeroNoise";
import HeroScanLines from "./HeroScanLines";
import HeroStarfield from "./HeroStarfield";
export default function HeroBackground() {
  return (
    <>
      {/* Base Background */}
      <div className="absolute inset-0 bg-[var(--background)]" />

      {/* Animated Grid */}
      <HeroGrid />

      {/* Ambient Glow */}
      <HeroGlow />

      {/* Floating Background Particles */}
      <HeroParticles />
<HeroStarfield />
      {/* Display Noise */}
      <HeroNoise />

      {/* CRT Scan Lines */}
      <HeroScanLines />

      {/* Vignette */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,transparent_15%,rgba(0,0,0,.55)_100%)]
          pointer-events-none
        "
      />
    </>
  );
}