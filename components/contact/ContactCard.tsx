"use client";

import { ReactNode, useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check } from "lucide-react";

interface ContactCardProps {
  icon: ReactNode;
  title: string;
  value: string;
}

export default function ContactCard({
  icon,
  title,
  value,
}: ContactCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(value);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <motion.div
      whileHover={{
        y: -5,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        flex
        items-center
        justify-between
        rounded-3xl
        border
        border-cyan-400/20
        bg-white/5
        p-6
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-cyan-400
        hover:shadow-[0_0_35px_rgba(0,245,255,.20)]
      "
    >
      {/* Left */}

      <div className="flex items-center gap-5">
        <div
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            bg-cyan-400/10
            text-cyan-400
          "
        >
          {icon}
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
            {title}
          </p>

          <h4 className="mt-1 text-lg font-semibold text-white break-all">
            {value}
          </h4>
        </div>
      </div>

      {/* Copy */}

      <motion.button
        whileTap={{ scale: 0.9 }}
        whileHover={{ rotate: 8 }}
        onClick={handleCopy}
        className="
          rounded-xl
          border
          border-cyan-400/20
          p-3
          text-cyan-400
          transition
          hover:border-cyan-400
          hover:bg-cyan-400/10
        "
      >
        {copied ? <Check size={18} /> : <Copy size={18} />}
      </motion.button>
    </motion.div>
  );
}