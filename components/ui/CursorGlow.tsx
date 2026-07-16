"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [position, setPosition] = useState({
    x: -100,
    y: -100,
  });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () =>
      window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <motion.div
      animate={{
        x: position.x - 120,
        y: position.y - 120,
      }}
      transition={{
        type: "spring",
        damping: 25,
        stiffness: 180,
        mass: 0.4,
      }}
      className="
      pointer-events-none
      fixed
      left-0
      top-0
      z-0
      h-60
      w-60
      rounded-full
      bg-cyan-400/15
      blur-[120px]
      "
    />
  );
}