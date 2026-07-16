"use client";

import Reveal from "@/components/ui/Reveal";
import { motion } from "framer-motion";
import SectionObserver from "@/components/ui/SectionObserver";
export default function About() {
  return (
    <Reveal>
      <section
        id="about"
        className="relative min-h-screen bg-[#050816] px-6 py-24"
      >
        

<SectionObserver id="about" />
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-20"
          >
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-cyan-400">
              ABOUT ME
            </p>

            <h2 className="text-4xl font-black leading-tight md:text-6xl">
              Building Technology
              <br />
              That Solves Real Problems.
            </h2>

            <div className="mt-6 h-1 w-28 rounded-full bg-cyan-400"></div>
          </motion.div>

          {/* Content */}
          <div className="grid items-center gap-20 lg:grid-cols-2">
            {/* Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-lg leading-9 text-gray-300">
                I am{" "}
                <span className="font-semibold text-cyan-400">
                  Umer Majeed
                </span>
                , an Artificial Intelligence student passionate about building
                intelligent software, modern web applications, and creative
                digital experiences.
              </p>

              <p className="mt-8 text-lg leading-9 text-gray-400">
                My journey combines programming, Machine Learning, Full Stack
                Development, and Graphic Design, allowing me to create digital
                solutions that are technically powerful and visually engaging.
              </p>

              <p className="mt-8 text-lg leading-9 text-gray-400">
                I enjoy solving real-world problems through technology while
                continuously learning new tools and pushing myself to build
                better products every day.
              </p>

              {/* Highlights */}

              <div className="mt-12 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-cyan-400/20 bg-white/5 p-5 backdrop-blur-xl">
                  <p className="text-sm text-gray-400">
                    Education
                  </p>

                  <h4 className="mt-2 text-lg font-semibold text-cyan-400">
                    BS Artificial Intelligence
                  </h4>
                </div>

                <div className="rounded-2xl border border-cyan-400/20 bg-white/5 p-5 backdrop-blur-xl">
                  <p className="text-sm text-gray-400">
                    Focus
                  </p>

                  <h4 className="mt-2 text-lg font-semibold text-cyan-400">
                    AI & Full Stack
                  </h4>
                </div>
              </div>
            </motion.div>

            {/* Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="rounded-3xl border border-cyan-400/20 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(0,245,255,0.2)]">
                <h3 className="text-4xl font-black text-cyan-400">
                  10+
                </h3>

                <p className="mt-4 text-gray-400">
                  Completed Projects
                </p>
              </div>

              <div className="rounded-3xl border border-cyan-400/20 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(0,245,255,0.2)]">
                <h3 className="text-4xl font-black text-cyan-400">
                  AI
                </h3>

                <p className="mt-4 text-gray-400">
                  Machine Learning
                </p>
              </div>

              <div className="rounded-3xl border border-cyan-400/20 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(0,245,255,0.2)]">
                <h3 className="text-4xl font-black text-cyan-400">
                  Full
                </h3>

                <p className="mt-4 text-gray-400">
                  Stack Development
                </p>
              </div>

              <div className="rounded-3xl border border-cyan-400/20 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(0,245,255,0.2)]">
                <h3 className="text-4xl font-black text-cyan-400">
                  UI
                </h3>

                <p className="mt-4 text-gray-400">
                  Photoshop & Illustrator
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}