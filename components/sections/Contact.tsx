"use client";

import { motion } from "framer-motion";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import SocialLinks from "@/components/contact/SocialLinks";
import AvailabilityCard from "@/components/contact/AvailabilityCard";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen bg-[#050816] px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-cyan-400">
            CONTACT
          </p>

          <h2 className="text-4xl font-black leading-tight md:text-6xl">
            Let's Build Something Amazing
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            Interested in Artificial Intelligence, Full Stack Development,
            UI/UX Design, or collaborating on exciting projects? Feel free to
            reach out anytime.
          </p>

          <div className="mt-6 h-1 w-28 rounded-full bg-cyan-400"></div>
        </motion.div>

        {/* Layout */}
        <div className="grid gap-12 lg:grid-cols-[420px_1fr]">
          {/* Left */}
          <div className="space-y-8">
            <ContactInfo />
            <SocialLinks />
            <AvailabilityCard />
          </div>

          {/* Right */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}