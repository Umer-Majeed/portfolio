"use client";

export default function HeroImage() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Outer Ring */}

      <div
        className="
          h-[430px]
          w-[430px]
          rounded-full
          border
          border-cyan-400/20
        "
      />

      {/* Inner Ring */}

      <div
        className="
          absolute
          h-[300px]
          w-[300px]
          rounded-full
          border
          border-cyan-400/30
        "
      />

      {/* Core */}

      <div
        className="
          absolute
          h-32
          w-32
          rounded-full
          bg-cyan-400
          blur-2xl
          opacity-60
        "
      />
    </div>
  );
}