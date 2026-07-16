"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);

  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState("");

  const sendEmail = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!form.current) return;

    setLoading(true);
    setStatus("");

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setStatus("Message sent successfully.");

      form.current.reset();
    } catch (error) {
      setStatus("Failed to send message.");
    }

    setLoading(false);
  };

  return (
    <motion.form
      ref={form}
      onSubmit={sendEmail}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="
        rounded-3xl
        border
        border-cyan-400/20
        bg-white/5
        p-8
        backdrop-blur-xl
      "
    >
      <h3 className="mb-8 text-3xl font-black">
        Send Message
      </h3>

      <div className="space-y-6">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="
            w-full
            rounded-xl
            border
            border-cyan-400/20
            bg-[#07111f]
            px-5
            py-4
            outline-none
            transition
            focus:border-cyan-400
          "
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
          className="
            w-full
            rounded-xl
            border
            border-cyan-400/20
            bg-[#07111f]
            px-5
            py-4
            outline-none
            transition
            focus:border-cyan-400
          "
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          required
          className="
            w-full
            rounded-xl
            border
            border-cyan-400/20
            bg-[#07111f]
            px-5
            py-4
            outline-none
            transition
            focus:border-cyan-400
          "
        />

        <textarea
          name="message"
          rows={6}
          placeholder="Your Message..."
          required
          className="
            w-full
            rounded-xl
            border
            border-cyan-400/20
            bg-[#07111f]
            px-5
            py-4
            outline-none
            transition
            focus:border-cyan-400
          "
        />

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          disabled={loading}
          type="submit"
          className="
            w-full
            rounded-xl
            bg-cyan-400
            py-4
            font-bold
            text-black
            transition
            hover:shadow-[0_0_30px_rgba(0,245,255,.45)]
            disabled:opacity-60
          "
        >
          {loading ? "Sending..." : "Send Message"}
        </motion.button>

        {status && (
          <p className="text-center text-cyan-400">
            {status}
          </p>
        )}
      </div>
    </motion.form>
  );
}