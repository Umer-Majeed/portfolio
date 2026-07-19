import { container } from "@/lib/layout";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import HeroScroll from "./HeroScroll";
import HeroConsole from "./HeroConsole";
import HeroStats from "./HeroStats";
import HeroMouseGlow from "./HeroMouseGlow";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
    >
      <HeroBackground />
<HeroMouseGlow />
      <HeroConsole />

      <div
        className={`
          ${container}
          relative
          z-10
          min-h-screen
          grid
          items-center
          gap-12
          lg:grid-cols-[1fr_auto_320px]
        `}
      >
        {/* Left */}
        <HeroContent />

        {/* Center */}
        <HeroImage />

        {/* Right */}
        <HeroStats />
      </div>

      <HeroScroll />
    </section>
  );
}