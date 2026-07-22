"use client";

import FooterBackground from "./FooterBackground";
import FooterCTA from "./FooterCTA";
import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import FooterSocials from "./FooterSocials";
import FooterAvailability from "./FooterAvailability";
import FooterBottom from "./FooterBottom";
import ScrollTopButton from "./ScrollTopButton";

export default function Footer() {
  return (
    <footer
      className="
        relative
        overflow-hidden
        bg-[#050816]
        px-6
        pt-32
        pb-12
      "
    >
      <FooterBackground />

      <div className="relative mx-auto max-w-7xl">

        {/* CTA */}
        <FooterCTA />

        {/* Main Footer */}
        <div
          className="
            border-t
            border-white/10
            pt-20
            grid
            gap-20
            lg:grid-cols-[1.3fr_1fr_1fr]
          "
        >
          {/* Left */}
          <FooterBrand />

          {/* Middle */}
          <FooterLinks />

          {/* Right */}
          <div className="flex flex-col">
            <FooterSocials />

            <div className="mt-10">
              <FooterAvailability />
            </div>
          </div>
        </div>

        {/* Bottom */}
        <FooterBottom />
      </div>

      <ScrollTopButton />
    </footer>
  );
}