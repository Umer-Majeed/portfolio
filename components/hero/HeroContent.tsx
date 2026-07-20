"use client";
import HeroTyping from "./HeroTyping";
import HeroActions from "./HeroActions";
export default function HeroScroll() {
  return (
    <div
      className="
        absolute
        bottom-10
        left-1/2
        -translate-x-1/2

      "
      
    >
      <span className="text-sm text-[#BDBDBD]">
        Scroll
      </span>
       <HeroTyping />
       <HeroActions />
    </div>
  );
}