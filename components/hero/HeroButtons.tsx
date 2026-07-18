"use client";

import ButtonTheme from "../ui/Button";

export default function HeroButtons() {
  return (
    <div className="mt-12 flex flex-wrap gap-5">
      <ButtonTheme href="#projects">
        Explore Work
      </ButtonTheme>

      <ButtonTheme href="/resume.pdf">
        Resume
      </ButtonTheme>
    </div>
  );
}