"use client";

import ExperienceCard from "./ExperienceCard";
import { experienceData } from "./experienceData";

export default function ExperienceTimeline() {
  return (
    <div className="relative mt-20">

      <div
        className="
          absolute
          left-6
          top-0
          h-full
          w-[2px]
          bg-cyan-400/20
        "
      />

      <div className="space-y-14">

        {experienceData.map((item) => (
          <div
            key={item.year + item.title}
            className="relative flex gap-8"
          >
            <div
              className="
                relative
                z-10
                mt-10
                h-4
                w-4
                rounded-full
                bg-cyan-400
                shadow-[0_0_20px_rgba(0,255,255,.6)]
              "
            />

            <div className="flex-1">
              <ExperienceCard item={item} />
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}