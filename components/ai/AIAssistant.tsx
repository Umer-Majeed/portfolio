"use client";

import { useState } from "react";
import { Bot, X, Send } from "lucide-react";

type Message = {
  role: "user" | "ai";
  text: string;
};

export default function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "ai",
      text: "Hello! I'm Yours Assistant. Ask me anything about Umer's portfolio.",
    },
  ]);

  const answers: Record<string, string> = {
    about:
      "Umer Majeed is an Artificial Intelligence student passionate about AI, Machine Learning, Full Stack Development, and UI/UX Design.",

    projects:
      "Projects include AI Chatbot, Hospital Management System, Portfolio Website, Machine Learning Projects, Calculator, and University Projects.",

    skills:
      "Skills include HTML, CSS, JavaScript, Next.js, React, Python, C++, Machine Learning, Photoshop, Illustrator, and AI.",

    contact:
      "Email: 2MrUmer@gmail.com",

    github:
      "GitHub: github.com/Umer-Majeed",

    linkedin:
      "LinkedIn: linkedin.com/in/mrumarmajeed",

    behance:
      "Behance: behance.net/umarmajeed3",

    resume:
      "Resume can be downloaded from the Resume button in the portfolio.",
  };

  function sendMessage() {
    if (!input.trim()) return;

    const question = input.toLowerCase();

    let reply =
      "Sorry, I don't know that yet. Try asking about projects, skills, contact, GitHub, LinkedIn, Behance, or resume.";

    Object.keys(answers).forEach((key) => {
      if (question.includes(key)) {
        reply = answers[key];
      }
    });

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: input,
      },
      {
        role: "ai",
        text: reply,
      },
    ]);

    setInput("");
  }

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-8 right-8 z-[9999] flex h-16 w-16 items-center justify-center rounded-full bg-cyan-400 text-black shadow-[0_0_30px_rgba(34,211,238,.5)] transition hover:scale-110"
      >
        {open ? <X size={28} /> : <Bot size={28} />}
      </button>

      {open && (
        <div className="fixed bottom-28 right-8 z-[9999] flex h-[550px] w-[380px] flex-col overflow-hidden rounded-3xl border border-cyan-400/20 bg-[#07111d]/95 backdrop-blur-xl">

          <div className="border-b border-cyan-400/10 p-5">
            <h2 className="text-xl font-bold text-cyan-400">
              Yours Assistant
            
            </h2>
            <p className="text-sm text-gray-400">
              Portfolio Assistant
            </p>
          </div>

          <div className="flex-1 space-y-4 overflow-y-auto p-5">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`rounded-2xl p-4 ${
                  message.role === "user"
                    ? "bg-cyan-400 text-black"
                    : "bg-white/5 text-white"
                }`}
              >
                {message.text}
              </div>
            ))}
          </div>

          <div className="flex gap-2 border-t border-cyan-400/10 p-4">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Ask something..."
              className="flex-1 rounded-xl bg-white/5 px-4 py-3 outline-none"
            />

            <button
              onClick={sendMessage}
              className="rounded-xl bg-cyan-400 p-3 text-black"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}