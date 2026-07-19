"use client";

export default function HeroNoise() {
  return (
    <div
      className="
        pointer-events-none
        absolute
        inset-0
        opacity-[0.025]
        mix-blend-overlay
      "
      style={{
        backgroundImage: `
          radial-gradient(circle, rgba(255,255,255,.25) 1px, transparent 1px)
        `,
        backgroundSize: "6px 6px",
      }}
    />
  );
}