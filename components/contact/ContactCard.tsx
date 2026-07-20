"use client";

import { Mail, Phone, MapPin } from "lucide-react";

const cards = [
  {
    icon: Mail,
    title: "Email",
    value: "umer@example.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+92 xxx xxxxxxx",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Pakistan",
  },
];

export default function ContactCards() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl"
          >
            <Icon className="text-cyan-400" />

            <h3 className="mt-4 text-xl font-bold">
              {card.title}
            </h3>

            <p className="mt-2 text-gray-400">
              {card.value}
            </p>
          </div>
        );
      })}
    </div>
  );
}