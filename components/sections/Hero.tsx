"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center px-6 pt-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-2">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Status */}
          <div className="mb-8 flex items-center gap-4">
            <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-xs tracking-[0.3em] text-cyan-400">
              UMER OS V2090
            </span>

            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
              <span className="text-sm text-gray-400">
                SYSTEM ONLINE
              </span>
            </div>
          </div>

          {/* Intro */}
          <p className="uppercase tracking-[0.4em] text-cyan-400 text-sm">
            INITIALIZING AI CORE...
          </p>

          {/* Heading */}
          <h1 className="mt-6 text-6xl font-black leading-none md:text-8xl">
            UMER
            <br />
            MAJEED
          </h1>

          {/* Subtitle */}
          <h2 className="mt-8 text-2xl font-semibold text-cyan-300">
            Artificial Intelligence Student
          </h2>

          {/* Description */}
          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">
            Passionate about Artificial Intelligence, Machine Learning,
            Full Stack Development, UI/UX Design, and building modern
            digital products that solve real-world problems.
          </p>

          {/* Buttons */}
          <div className="mt-12 flex flex-wrap gap-6">
            <a
              href="#projects"
              className="rounded-2xl bg-cyan-400 px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,245,255,.35)]"
            >
              Explore Projects
            </a>

            <a
              href="/resume.pdf"
              className="rounded-2xl border border-white/20 px-8 py-4 transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400"
            >
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="relative">
            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-[80px]"></div>

            {/* Border */}
            <div className="relative rounded-full border border-cyan-400/40 p-2">
              <Image
                src="/profile.png"
                alt="Umer Majeed"
                width={420}
                height={420}
                className="rounded-full object-cover w-[320px] h-[320px] md:w-[420px] md:h-[420px]"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Status Cards */}
        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-3 lg:col-span-2">
          <div className="rounded-2xl border border-cyan-400/20 bg-white/5 backdrop-blur-xl p-5">
            <p className="text-gray-400 text-sm">Projects</p>
            <h3 className="text-3xl font-bold text-cyan-400">10+</h3>
          </div>

          <div className="rounded-2xl border border-cyan-400/20 bg-white/5 backdrop-blur-xl p-5">
            <p className="text-gray-400 text-sm">Technologies</p>
            <h3 className="text-3xl font-bold text-cyan-400">15+</h3>
          </div>

          <div className="rounded-2xl border border-cyan-400/20 bg-white/5 backdrop-blur-xl p-5">
            <p className="text-gray-400 text-sm">Status</p>
            <h3 className="text-3xl font-bold text-green-400">Available</h3>
          </div>
        </div>

      </div>
    </section>
  );
}