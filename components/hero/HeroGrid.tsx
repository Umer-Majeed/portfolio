"use client";

export default function HeroGrid() {
  return (
    <>
      {/* Vertical Lines */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.08]
          pointer-events-none
        "
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,.08) 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      {/* Radial Fade */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,transparent_20%,#3B3B3B_90%)]
        "
      />
    </>
  );
}