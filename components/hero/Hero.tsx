import { container } from "@/lib/layout";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import HeroScroll from "./HeroScroll";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
    >
      <HeroBackground />

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