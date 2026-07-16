"use client";

import { useEffect, useState } from "react";

export default function MouseGlow() {
  const [position, setPosition] = useState({
    x: -200,
    y: -200,
  });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    >
      <div
        className="absolute h-72 w-72 rounded-full bg-cyan-400/20 blur-[120px] transition-transform duration-75"
        style={{
          transform: `translate(${position.x - 144}px, ${position.y - 144}px)`,
        }}
      />
    </div>
  );
}