import { container } from "@/lib/layout";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import HeroScroll from "./HeroScroll";
import HeroConsole from "./HeroConsole";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
    >
      <HeroBackground />
<HeroConsole />
      <div
        className={`
          ${container}
          relative
          z-10
          flex
          min-h-screen
          items-center
          justify-between
          gap-20
        `}
      >
        <HeroContent />

        <HeroImage />
      </div>

      <HeroScroll />
    </section>
  );
}