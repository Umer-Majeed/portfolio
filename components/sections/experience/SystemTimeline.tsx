"use client";

import LogEntry from "./LogEntry";

const logs = [
  {
    year: "2025",
    company: "Freelance",
    role: "Senior Full Stack Developer",
    description:
      "Built AI-powered SaaS products, premium dashboards and high-performance web applications.",
  },
  {
    year: "2024",
    company: "Remote",
    role: "Frontend Engineer",
    description:
      "Developed scalable React & Next.js applications with modern UI architecture.",
  },
  {
    year: "2023",
    company: "Personal Growth",
    role: "Learning Phase",
    description:
      "Focused on JavaScript, TypeScript, Node.js and backend architecture.",
  },
];

export default function SystemTimeline() {
  return (
    <div className="space-y-8">
      {logs.map((log) => (
        <LogEntry
          key={log.year}
          {...log}
        />
      ))}
    </div>
  );
}