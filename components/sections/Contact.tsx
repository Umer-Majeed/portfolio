"use client";

import ContactBackground from "@/components/contact/ContactBackground";
import ContactGrid from "@/components/contact/ContactGrid";
import ContactHeader from "@/components/contact/ContactHeader";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactSocials from "@/components/contact/ContactSocials";
import ContactTerminal from "@/components/contact/ContactTerminal";
import ContactForm from "@/components/contact/ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        bg-[#050816]
        px-6
        py-24
      "
    >
      <ContactBackground />

      <ContactGrid>

        <ContactHeader />

        <div className="mt-20 grid gap-10 lg:grid-cols-[420px_1fr]">

          <div className="space-y-8">

            <ContactInfo />

            <ContactSocials />

            <ContactTerminal />

          </div>

          <ContactForm />

        </div>

      </ContactGrid>

    </section>
  );
}