"use client";

import { motion } from "framer-motion";

export default function FooterCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="mx-auto mb-28 max-w-4xl text-center"
    >
      <p className="font-mono tracking-[5px] text-cyan-400">
        READY TO START?
      </p>

      <h2
        className="
          mt-6
          text-5xl
          font-black
          leading-tight
          md:text-7xl
        "
      >
        Let's Build
        <br />

        <span
          className="
            bg-gradient-to-r
            from-cyan-400
            via-blue-400
            to-cyan-300
            bg-clip-text
            text-transparent
          "
        >
          Something Amazing
        </span>
      </h2>

      <p className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-gray-400">
        Whether it's AI, Full Stack Development, or building your next startup,
        I'm always excited to work on meaningful products.
      </p>

      <a
        href="#contact"
        className="
          mt-10
          inline-flex
          items-center
          rounded-full
          border
          border-cyan-400/20
          bg-cyan-400/10
          px-10
          py-4
          font-semibold
          backdrop-blur-xl
          transition-all
          duration-500
          hover:-translate-y-1
          hover:scale-105
          hover:bg-cyan-400
          hover:text-black
          hover:shadow-[0_0_50px_rgba(34,211,238,.35)]
        "
      >
        Let's Talk
      </a>
    </motion.div>
    ); 

};