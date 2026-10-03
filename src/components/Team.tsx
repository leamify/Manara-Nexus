"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Linkedin, Mail, ShieldCheck } from "lucide-react";

interface Partner {
  name: string;
  role: string;
  image: string;
  bio: string;
  specialties: string[];
}

const partners: Partner[] = [
  {
    name: "Joel Coville",
    role: "MANAGING PARTNER",
    image: "/images/joel-coville.jpg",
    bio: "Three decades across investment banking, asset management and private capital markets. Deep Middle East expertise and networks across UAE and KSA.",
    specialties: ["Investment Banking", "Private Capital Markets", "UAE & KSA Networks"],
  },
  {
    name: "Madhurima Roy",
    role: "MANAGING PARTNER",
    image: "/images/madhurima-roy.jpg",
    bio: "Techno-commercial strategy experience across deep tech, climate tech, and advanced manufacturing. GCC experience across venture building, commercial de-risking, and sustainable finance pathways.",
    specialties: ["Deep Tech & Climate", "Commercial De-Risking", "Venture Building"],
  },
];

export const Team: React.FC = () => {
  return (
    <section id="about" className="bg-[#F8F9FA] py-24 md:py-32 px-6 md:px-12 relative border-t border-neutral-200/60">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <ShieldCheck className="w-4 h-4 text-brand-gold" />
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-brand-gold">
              EXECUTIVE LEADERSHIP
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-navy font-normal tracking-tight">
            Managing Partners
          </h2>
          <p className="mt-4 font-serif text-base sm:text-lg text-neutral-600 italic leading-relaxed">
            “Together, the Managing Partners bring complementary expertise across
            commercialisation, technology, transactions, strategic capital and GCC
            market development.”
          </p>
        </div>

        {/* Two Dark Profile Cards with Left-side Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="bg-[#070F1E] border border-white/10 rounded-sm overflow-hidden hover:border-brand-gold/60 transition-all duration-300 hover:shadow-2xl hover:shadow-black/40 flex flex-col sm:flex-row group"
            >
              {/* Executive Portrait on Left */}
              <div className="relative w-full sm:w-[220px] md:w-[240px] h-[280px] sm:h-auto shrink-0 bg-[#050B14]">
                <Image
                  src={partner.image}
                  alt={partner.name}
                  fill
                  className="object-cover object-top filter grayscale contrast-110 group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-transparent to-[#070F1E]/80" />
              </div>

              {/* Bio & Credentials on Right */}
              <div className="p-8 sm:p-9 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-brand-gold font-semibold font-mono">
                      {partner.role}
                    </span>
                    <div className="flex items-center gap-2 text-brand-gray-muted/70">
                      <span className="p-1 rounded hover:text-brand-gold hover:bg-white/5 transition-colors cursor-pointer">
                        <Linkedin className="w-3.5 h-3.5" />
                      </span>
                      <span className="p-1 rounded hover:text-brand-gold hover:bg-white/5 transition-colors cursor-pointer">
                        <Mail className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal tracking-tight mb-4 group-hover:text-brand-gold transition-colors">
                    {partner.name}
                  </h3>

                  <p className="text-brand-gray-muted text-xs sm:text-sm leading-relaxed font-sans font-light mb-6">
                    {partner.bio}
                  </p>
                </div>

                {/* Specialties tags */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap gap-1.5">
                  {partner.specialties.map((spec) => (
                    <span
                      key={spec}
                      className="text-[10px] font-medium tracking-wider uppercase px-2 py-0.5 rounded bg-[#0E1A2F] text-brand-gold/90 border border-brand-gold/20"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
