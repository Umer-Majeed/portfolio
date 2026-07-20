"use client";

import { motion } from "framer-motion";

export default function ContactHeader() {
  return (
    <motion.div
      initial={{
        opacity:0,
        y:40
      }}
      whileInView={{
        opacity:1,
        y:0
      }}
      viewport={{
        once:true
      }}
      transition={{
        duration:.7
      }}
      className="mb-20"
    >

      <span
        className="
          inline-flex
          rounded-full
          border
          border-cyan-400/20
          bg-cyan-400/10
          px-5
          py-2
          font-mono
          text-xs
          tracking-[4px]
          text-cyan-400
        "
      >
        CONTACT NODE
      </span>

      <h2 className="mt-8 text-5xl font-black md:text-7xl">

        Let's Build

        <br/>

        Something Amazing

      </h2>

      <p
        className="
          mt-8
          max-w-3xl
          text-lg
          leading-8
          text-gray-400
        "
      >
        Looking for an Artificial Intelligence Engineer,
        Full Stack Developer or Next.js specialist?
        Let's discuss your next project.
      </p>

      <div className="mt-8 flex items-center gap-4">

        <div className="h-[2px] w-24 bg-cyan-400"/>

        <span
          className="
            font-mono
            text-xs
            tracking-[4px]
            text-cyan-400
          "
        >
          ONLINE
        </span>

      </div>

    </motion.div>
  );
}