"use client";

import OrbCore from "./OrbCore";
import OrbGlow from "./OrbGlow";
import OrbRing from "./OrbRing";

export default function HeroOrb() {
  return (
    <div
      className="
        relative
        flex
        h-[520px]
        w-[520px]
        items-center
        justify-center
      "
    >
      <OrbGlow />

      <OrbRing
        size={420}
        duration={40}
      />

      <OrbRing
        size={330}
        duration={28}
      />

      <OrbRing
        size={240}
        duration={18}
      />

      <OrbCore />
    </div>
  );
}