"use client";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

const socials = [
  {
    icon: FaGithub,
    href: "https://github.com/Umer-Majeed",
  },
  {
    icon: FaLinkedin,
    href: "#",
  },
  {
    icon: FaInstagram,
    href: "#",
  },
  {
    icon: FaFacebook,
    href: "#",
  },
];

export default function FooterSocials() {
  return (
    <div>
      <h3 className="mb-8 text-2xl font-bold">
        Connects
      </h3>

      <div className="flex flex-wrap gap-5">
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            className="
              group
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-2xl
              border
              border-white/10
              bg-white/[0.03]
              backdrop-blur-xl
              transition-all
              duration-500
              hover:-translate-y-2
              hover:rotate-6
              hover:border-cyan-400/40
              hover:bg-cyan-400/10
              hover:shadow-[0_0_35px_rgba(34,211,238,.25)]
            "
          >
            <social.icon
              size={24}
              className="
                transition-transform
                duration-300
                group-hover:scale-110
              "
            />
          </a>
        ))}
      </div>
    </div>
  );
}