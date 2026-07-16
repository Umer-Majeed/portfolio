"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-cyan-400/10 bg-[#050816] px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
        {/* Left */}

        <div>
          <h2 className="text-2xl font-black tracking-[0.25em] text-cyan-400">
            UMER OS
          </h2>

          <p className="mt-3 max-w-md text-gray-400">
            Artificial Intelligence Engineer • Full Stack Developer • Building
            modern digital experiences with clean code and futuristic design.
          </p>
        </div>

        {/* Socials */}

        <div className="flex items-center gap-5">
          <motion.a
            whileHover={{ y: -5, scale: 1.1 }}
            href="https://github.com/Umer-Majeed"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-cyan-400 transition hover:text-white"
          >
            <FaGithub />
          </motion.a>

          <motion.a
            whileHover={{ y: -5, scale: 1.1 }}
            href="https://linkedin.com/in/mrumarmajeed"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-cyan-400 transition hover:text-white"
          >
            <FaLinkedin />
          </motion.a>

          <motion.a
            whileHover={{ y: -5, scale: 1.1 }}
            href="mailto:2MrUmer@gmail.com"
            className="text-2xl text-cyan-400 transition hover:text-white"
          >
            <FaEnvelope />
          </motion.a>
        </div>
      </div>

      <div className="mt-10 border-t border-cyan-400/10 pt-6 text-center text-sm text-gray-500">
        © {year} Umer Majeed. All Rights Reserved.
      </div>
    </footer>
  );
}