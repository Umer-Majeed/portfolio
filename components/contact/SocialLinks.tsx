"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const socials = [
  {
    name: "GitHub",
    icon: FaGithub,
    href: "https://github.com/Umer-Majeed",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    href: "https://linkedin.com/in/mrumarmajeed",
  },
  {
    name: "Email",
    icon: MdEmail,
    href: "mailto:2MrUmer@gmail.com",
  },
  {
    name: "Behance",
    icon: FaGlobe,
    href: "https://behance.net/umarmajeed3",
  },
];

export default function SocialLinks() {
  return (
    <div>
      <h4 className="mb-5 text-xl font-bold">Connect With Me</h4>

      <div className="flex flex-wrap gap-4">
        {socials.map((social) => {
          const Icon = social.icon;

          return (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                y: -5,
                scale: 1.08,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                border
                border-cyan-400/20
                bg-white/5
                text-cyan-400
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-cyan-400
                hover:bg-cyan-400/10
                hover:shadow-[0_0_25px_rgba(0,245,255,.25)]
              "
            >
              <Icon size={22} />
            </motion.a>
          );
        })}
      </div>
    </div>
  );
}