"use client";

export default function HeroGlow() {
  return (
    <>
      {/* Top Left Glow */}
      <div
        className="
          absolute
          -left-40
          top-0
          h-[500px]
          w-[500px]
          rounded-full
          bg-cyan-400/15
          blur-[180px]
          pointer-events-none
        "
      />

      {/* Bottom Right Glow */}
      <div
        className="
          absolute
          -right-40
          bottom-0
          h-[500px]
          w-[500px]
          rounded-full
          bg-cyan-400/10
          blur-[200px]
          pointer-events-none
        "
      />

      {/* Center Glow */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[350px]
          w-[350px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-400/10
          blur-[150px]
          pointer-events-none
        "
      />
    </>
  );
}