"use client";

import { ArrowUp } from "lucide-react";

export default function ScrollTopButton() {
  function scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <button
      onClick={scrollTop}
      className="
        group
        fixed
        bottom-8
        right-8
        z-50
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-full
        border
        border-cyan-400/20
        bg-[#0b1220]/80
        backdrop-blur-xl
        transition-all
        hover:-translate-y-1
        hover:border-cyan-400
        hover:bg-cyan-400
        hover:text-black
      "
    >
      <ArrowUp
        className="
          transition-transform
          group-hover:-translate-y-1
        "
        size={22}
      />
    </button>
  );
}