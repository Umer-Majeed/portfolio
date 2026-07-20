"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function ContactForm() {
  return (
    <motion.form
      initial={{
        opacity:0,
        x:40
      }}
      whileInView={{
        opacity:1,
        x:0
      }}
      viewport={{
        once:true
      }}
      transition={{
        duration:.7
      }}
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        p-10
        backdrop-blur-xl
      "
    >

      <h3 className="mb-8 text-3xl font-bold">

        Send Message

      </h3>

      <div className="space-y-6">

        <input
          placeholder="Your Name"
          className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 outline-none focus:border-cyan-400"
        />

        <input
          placeholder="Email Address"
          className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 outline-none focus:border-cyan-400"
        />

        <input
          placeholder="Subject"
          className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 outline-none focus:border-cyan-400"
        />

        <textarea
          rows={6}
          placeholder="Your Message..."
          className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 outline-none focus:border-cyan-400"
        />

        <motion.button

          whileHover={{
            scale:1.03
          }}

          whileTap={{
            scale:.97
          }}

          className="
            flex
            items-center
            gap-3
            rounded-2xl
            bg-cyan-400
            px-8
            py-4
            font-semibold
            text-black
          "

        >

          <Send size={18}/>

          Send Message

        </motion.button>

      </div>

    </motion.form>
  );
}