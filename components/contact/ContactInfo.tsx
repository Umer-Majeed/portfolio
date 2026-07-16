"use client";

import {
  Mail,
  Phone,
  MapPin,
  GraduationCap,
} from "lucide-react";

import ContactCard from "./ContactCard";
import SocialLinks from "./SocialLinks";

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Heading */}

      <div>
        <h3 className="text-3xl font-black">
          Contact Information
        </h3>

        <p className="mt-4 leading-8 text-gray-400">
          Feel free to reach out for internships, freelance
          work, collaborations, AI projects, or software
          development opportunities.
        </p>
      </div>

      {/* Cards */}

      <div className="space-y-5">
        <ContactCard
          icon={<Mail size={24} />}
          title="Email"
          value="Contact2mrumer@gmail.com"
        />

        <ContactCard
          icon={<Phone size={24} />}
          title="Phone"
          value="+92 319 5360729"
        />

        <ContactCard
          icon={<MapPin size={24} />}
          title="Location"
          value="Islamabad, Pakistan"
        />

        <ContactCard
          icon={<GraduationCap size={24} />}
          title="Education"
          value="BS Artificial Intelligence
          "
        />
      </div>

      {/* Social */}

      <SocialLinks />
    </div>
  );
}