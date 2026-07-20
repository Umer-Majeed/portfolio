"use client";

import { motion } from "framer-motion";

export default function ContactTerminal() {
  return (
    <motion.div
      initial={{
        opacity:0,
        y:30
      }}
      whileInView={{
        opacity:1,
        y:0
      }}
      viewport={{
        once:true
      }}
      transition={{
        delay:.3
      }}
      className="
        rounded-3xl
        border
        border-cyan-400/20
        bg-[#08111f]
        p-8
        font-mono
      "
    >
      <div className="mb-6 flex gap-2">

        <div className="h-3 w-3 rounded-full bg-red-400"/>

        <div className="h-3 w-3 rounded-full bg-yellow-400"/>

        <div className="h-3 w-3 rounded-full bg-green-400"/>

      </div>

      <p className="text-green-400">

        $ initializing secure connection...

      </p>

      <p className="mt-4 text-cyan-400">

        ✔ Portfolio server online

      </p>

      <p className="mt-4 text-white">

        Waiting for incoming message...

      </p>

      <motion.div

        animate={{
          opacity:[0,1,0]
        }}

        transition={{
          repeat:Infinity,
          duration:1
        }}

        className="mt-4 h-5 w-2 bg-cyan-400"

      />

    </motion.div>
  );
}