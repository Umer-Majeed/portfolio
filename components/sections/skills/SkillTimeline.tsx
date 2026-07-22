"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const items = [
  "Frontend",
  "Backend",
  "AI",
  "Database",
  "Tools",
];

export default function SkillTimeline() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const x1 = useTransform(scrollYProgress, [0, .25], [-700, 0]);
  const x2 = useTransform(scrollYProgress, [.15, .40], [-700, 0]);
  const x3 = useTransform(scrollYProgress, [.35, .60], [-700, 0]);
  const x4 = useTransform(scrollYProgress, [.55, .80], [700, 0]);
  const x5 = useTransform(scrollYProgress, [.75, 1], [700, 0]);

  const opacity1 = useTransform(scrollYProgress, [0, .12], [0, 1]);
  const opacity2 = useTransform(scrollYProgress, [.15, .28], [0, 1]);
  const opacity3 = useTransform(scrollYProgress, [.35, .48], [0, 1]);
  const opacity4 = useTransform(scrollYProgress, [.55, .68], [0, 1]);
  const opacity5 = useTransform(scrollYProgress, [.75, .88], [0, 1]);

  return (
    <section
      ref={ref}
      className="relative h-[350vh]"
    >
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">

        <div className="flex items-center gap-10">

          <motion.div
            style={{
              x: x1,
              opacity: opacity1,
            }}
            className="rounded-2xl border border-cyan-400/20 bg-white/[0.04] px-8 py-6 backdrop-blur-xl"
          >
            {items[0]}
          </motion.div>

          <motion.div
            style={{
              x: x2,
              opacity: opacity2,
            }}
            className="rounded-2xl border border-cyan-400/20 bg-white/[0.04] px-8 py-6 backdrop-blur-xl"
          >
            {items[1]}
          </motion.div>

          <motion.div
            style={{
              x: x3,
              opacity: opacity3,
            }}
            className="rounded-2xl border border-cyan-400/20 bg-white/[0.04] px-8 py-6 backdrop-blur-xl"
          >
            {items[2]}
          </motion.div>

          <motion.div
            style={{
              x: x4,
              opacity: opacity4,
            }}
            className="rounded-2xl border border-cyan-400/20 bg-white/[0.04] px-8 py-6 backdrop-blur-xl"
          >
            {items[3]}
          </motion.div>

          <motion.div
            style={{
              x: x5,
              opacity: opacity5,
            }}
            className="rounded-2xl border border-cyan-400/20 bg-white/[0.04] px-8 py-6 backdrop-blur-xl"
          >
            {items[4]}
          </motion.div>

        </div>

      </div>
    </section>
  );
}