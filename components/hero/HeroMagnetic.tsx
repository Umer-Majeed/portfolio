"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";

export default function HeroMagnetic({
  children,
}: {
  children: React.ReactNode;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, {
    stiffness: 60,
    damping: 20,
  });

  const y = useSpring(mouseY, {
    stiffness: 60,
    damping: 20,
  });

  function move(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();

    const dx = e.clientX - rect.left - rect.width / 2;
    const dy = e.clientY - rect.top - rect.height / 2;

    mouseX.set(dx * 0.08);
    mouseY.set(dy * 0.08);
  }

  function leave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      style={{ x, y }}
      onMouseMove={move}
      onMouseLeave={leave}
      className="relative"
    >
      {children}
    </motion.div>
  );
}