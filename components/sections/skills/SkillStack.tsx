"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import SkillCategory from "./SkillCategory";
import { skillCategories } from "./skillsData";

gsap.registerPlugin(ScrollTrigger);

export default function SkillStack() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      const cards = gsap.utils.toArray<HTMLElement>(".skill-category");

      gsap.set(cards[0], { x: -900 });
      gsap.set(cards[1], { x: 900 });
      gsap.set(cards[2], { y: 600 });
      gsap.set(cards[3], { x: -900 });
      gsap.set(cards[4], { x: 900 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=4500",
          scrub: 1,
          pin: true,
          pinSpacing: true,
        },
      });

      tl.to(cards[0], {
        x: -440,
        duration: 1,
      })

      .to(cards[1], {
        x: -220,
        duration: 1,
      })

      .to(cards[2], {
        x: 0,
        y: 0,
        duration: 1,
      })

      .to(cards[3], {
        x: 220,
        duration: 1,
      })

      .to(cards[4], {
        x: 440,
        duration: 1,
      });

    }, sectionRef);

    return () => ctx.revert();

  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden"
    >
      <div className="flex h-full items-center justify-center">

        <div className="relative h-[450px] w-full max-w-7xl">

          {skillCategories.map((category) => (

            <div
              key={category.title}
              className="
                skill-category
                absolute
                left-1/2
                top-1/2
                w-[300px]
                -translate-x-1/2
                -translate-y-1/2
              "
            >
              <SkillCategory
                title={category.title}
                skills={category.skills}
              />
            </div>

          ))}

        </div>

      </div>
    </section>
  );
}