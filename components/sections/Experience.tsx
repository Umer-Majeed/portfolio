"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative bg-[#050816] px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-24 text-center"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-cyan-400">
            EXPERIENCE
          </p>

          <h2 className="text-4xl font-black leading-tight md:text-6xl">
            My Learning Journey
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            Every project, technology, and challenge has shaped my path
            toward becoming an Artificial Intelligence Engineer, Full Stack
            Developer, and Creative Problem Solver.
          </p>

          <div className="mx-auto mt-6 h-1 w-28 rounded-full bg-cyan-400"></div>
        </motion.div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-5xl">
          {/* Vertical Line */}
          <div className="absolute left-5 top-0 h-full w-[2px] bg-cyan-400/20 md:left-1/2 md:-translate-x-1/2"></div>

          <div className="space-y-16">
            {experience.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                className={`relative flex ${
                  index % 2 === 0
                    ? "md:justify-start"
                    : "md:justify-end"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-5 top-10 z-20 h-5 w-5 rounded-full border-4 border-[#050816] bg-cyan-400 shadow-[0_0_25px_rgba(0,245,255,0.5)] md:left-1/2 md:-translate-x-1/2"></div>

                {/* Card */}
                <div className="ml-16 w-full md:ml-0 md:w-[45%]">
                  <div className="rounded-3xl border border-cyan-400/20 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(0,245,255,0.18)]">
                    <span className="inline-block rounded-full bg-cyan-400 px-4 py-1 text-xs font-bold uppercase tracking-wider text-black">
                      {item.year}
                    </span>

                    <h3 className="mt-5 text-3xl font-bold">
                      {item.title}
                    </h3>

                    <p className="mt-5 leading-8 text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}