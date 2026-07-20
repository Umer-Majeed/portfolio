"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

const socials = [
  {
    icon: FaGithub,
    title: "GitHub",
    href: "https://github.com/Umer-Majeed",
  },
  {
    icon: FaLinkedin,
    title: "LinkedIn",
    href: "#",
  },
  {
    icon: FaInstagram,
    title: "Instagram",
    href: "#",
  },
  {
    icon: FaFacebook,
    title: "Facebook",
    href: "#",
  },
];

export default function ContactSocials() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: .2 }}
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        p-8
        backdrop-blur-xl
      "
    >
      <h3 className="mb-8 text-2xl font-bold">
        Social Links
      </h3>

      <div className="grid grid-cols-2 gap-4">

        {socials.map((social) => (

          <a
            key={social.title}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            className="
              group
              flex
              items-center
              gap-4
              rounded-2xl
              border
              border-white/10
              bg-white/[0.03]
              p-4
              transition-all
              duration-300
              hover:border-cyan-400
              hover:bg-cyan-400/10
            "
          >
            <social.icon
              size={24}
              className="
                text-cyan-400
                transition-transform
                group-hover:scale-110
              "
            />

            <span>{social.title}</span>

          </a>

        ))}

      </div>

    </motion.div>
  );
}