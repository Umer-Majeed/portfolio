"use client";

import { useEffect, useState } from "react";

const lines = [
  "> Initializing Vortex OS...",
  "> AI Core Online",
  "> Loading Neural Modules...",
  "> Establishing Secure Connection...",
  "> Portfolio System Ready",
];

export default function HeroTyping() {
  const [text, setText] = useState("");
  const [line, setLine] = useState(0);

  useEffect(() => {
    if (line >= lines.length) return;

    let i = 0;

    const typing = setInterval(() => {
      setText(lines[line].slice(0, i + 1));
      i++;

      if (i >= lines[line].length) {
        clearInterval(typing);

        setTimeout(() => {
          setLine((prev) => prev + 1);
          setText("");
        }, 900);
      }
    }, 35);

    return () => clearInterval(typing);
  }, [line]);

  return (
    <div className="font-mono text-sm text-cyan-300 h-6">
      {line < lines.length ? (
        <>
          {text}
          <span className="animate-pulse">█</span>
        </>
      ) : (
        <span className="text-green-400">
          ✔ SYSTEM READY
        </span>
      )}
    </div>
  );
}