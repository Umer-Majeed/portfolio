"use client";

import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="
        border-t
        border-cyan-400/10
        bg-[#040714]
        py-12
      "
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-6">
        {/* Logo */}

        <div className="text-center">
          <h2 className="text-3xl font-black text-white">
            Umer Majeed
          </h2>

          <p className="mt-2 text-gray-400">
            AI Developer • Full Stack Developer • UI/UX Designer
          </p>
        </div>

        {/* Navigation */}

        <div className="flex flex-wrap justify-center gap-8 text-gray-400">
          <Link href="#home" className="hover:text-cyan-400 transition">
            Home
          </Link>

          <Link href="#about" className="hover:text-cyan-400 transition">
            About
          </Link>

          <Link href="#skills" className="hover:text-cyan-400 transition">
            Skills
          </Link>

          <Link href="#projects" className="hover:text-cyan-400 transition">
            Projects
          </Link>

          <Link href="#contact" className="hover:text-cyan-400 transition">
            Contact
          </Link>
        </div>

        {/* Social Icons */}

        <div className="flex gap-6 text-2xl text-cyan-400">
          <a
            href="https://github.com/Umer-Majeed"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:scale-110"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/mrumarmajeed"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:scale-110"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:2MrUmer@gmail.com"
            className="transition hover:scale-110"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Copyright */}

        <div className="border-t border-cyan-400/10 pt-6 text-center text-sm text-gray-500">
          © {year} Umer Majeed. All Rights Reserved.
        </div>

        {/* Scroll To Top */}

        <a
          href="#home"
          className="
            fixed
            bottom-8
            right-8
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            bg-cyan-400
            text-black
            shadow-lg
            transition
            hover:scale-110
          "
        >
          <FaArrowUp />
        </a>
      </div>
    </footer>
  );
}