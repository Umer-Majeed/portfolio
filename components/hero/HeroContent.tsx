"use client";

import HeroHeading from "./HeroHeading";
import HeroButtons from "./HeroButtons";

export default function HeroContent() {
  return (
    <div className="relative z-20 max-w-2xl">
      <p className="mb-4 text-cyan-400 tracking-[0.35em] uppercase">
        AI Powered Portfolio
      </p>

      <HeroHeading />

      <p className="mt-8 max-w-xl text-lg leading-8 text-[#BDBDBD]">
        I build premium frontend experiences that combine
        modern design, smooth animations and clean
        architecture.
      </p>

      <HeroButtons />
    </div>
  );
}