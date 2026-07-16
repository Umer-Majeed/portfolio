"use client";

import { useEffect, useState } from "react";
import { Command } from "cmdk";

export default function CommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };

    document.addEventListener("keydown", down);

    return () =>
      document.removeEventListener("keydown", down);
  }, []);

  const items = [
    { name: "Home", action: () => location.assign("#home") },
    { name: "About", action: () => location.assign("#about") },
    { name: "Projects", action: () => location.assign("#projects") },
    { name: "Skills", action: () => location.assign("#skills") },
    { name: "Experience", action: () => location.assign("#experience") },
    { name: "Contact", action: () => location.assign("#contact") },

    {
      name: "GitHub",
      action: () =>
        window.open(
          "https://github.com/Umer-Majeed",
          "_blank"
        ),
    },

    {
      name: "LinkedIn",
      action: () =>
        window.open(
          "https://www.linkedin.com/in/mrumarmajeed/",
          "_blank"
        ),
    },

    {
      name: "Behance",
      action: () =>
        window.open(
          "https://www.behance.net/umarmajeed3",
          "_blank"
        ),
    },

    {
      name: "Resume",
      action: () =>
        window.open("/resume.pdf", "_blank"),
    },
  ];

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-start justify-center bg-black/60 pt-32 backdrop-blur-sm">
      <Command className="w-full max-w-xl overflow-hidden rounded-3xl border border-cyan-400/20 bg-[#07111d] shadow-[0_0_40px_rgba(0,255,255,.15)]">

        <Command.Input
          placeholder="Search anything..."
          className="w-full border-b border-cyan-400/10 bg-transparent px-6 py-5 text-lg outline-none"
        />

        <Command.List className="max-h-[400px] overflow-auto p-3">

          {items.map((item) => (

            <Command.Item
              key={item.name}
              onSelect={() => {
                item.action();
                setOpen(false);
              }}
              className="cursor-pointer rounded-xl px-5 py-4 transition hover:bg-cyan-400 hover:text-black"
            >
              {item.name}
            </Command.Item>

          ))}

        </Command.List>

      </Command>
    </div>
  );
}