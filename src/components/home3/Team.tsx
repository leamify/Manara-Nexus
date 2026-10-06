"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";

interface Partner {
  name: string;
  role: string;
  image: string;
  bio: string;
}

const partners: Partner[] = [
  {
    name: "Joel Coville",
    role: "MANAGING PARTNER",
    image: "https://res.cloudinary.com/g9q4th37/image/upload/v1791140718/6b9d20eb-a0d1-41b0-af40-b36ae79402a5.png",
    bio: "Three decades across investment banking, asset management and private capital markets, with experience in transactions advisory, M&A and capital strategy for large-scale projects. Deep Middle East expertise and networks across UAE and KSA, supporting Economic Vision-led mandates and strategic capital deployment.",
  },
  {
    name: "Madhurima Roy",
    role: "MANAGING PARTNER",
    image: "https://res.cloudinary.com/g9q4th37/image/upload/v1791140717/1b89ef48-a45c-406b-8476-879f1c6f3247.png",
    bio: "Techno-commercial strategy experience across deep tech, climate tech, advanced manufacturing, sustainable built environment, next-generation fuels and energy. GCC experience across venture building, commercial de-risking, investor readiness and sustainable finance pathways, including commercial and capital partnerships for large-scale projects.",
  },
];

export const Team: React.FC = () => {
  return (
    <section
      id="team"
      className="bg-[#F8F9FA] py-24 md:py-32 px-6 md:px-12 relative border-t border-neutral-200/60"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-14 md:mb-16">
          <div className="inline-flex items-center text-xs uppercase tracking-[0.3em] font-semibold text-brand-gold mb-3 font-sans">
            <span className="text-brand-gold mr-1 font-normal">[</span>
            <span>EXECUTIVE LEADERSHIP</span>
            <span className="text-brand-gold ml-1 font-normal">]</span>
          </div>
          <h2 className="font-jakarta text-3xl sm:text-4xl md:text-[48px] text-[#0A1612] font-extrabold uppercase tracking-tight">
            Managing Partners
          </h2>
        </div>

        {/* Two Dark Green Profile Cards with Left-side Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="bg-[#061814]/95 bg-gradient-to-br from-[#09241E] via-[#061A15] to-[#04120E] border border-[#143B30] rounded-none overflow-hidden hover:border-brand-gold/60 transition-all duration-300 hover:shadow-2xl hover:shadow-[#020A07]/50 flex flex-col sm:flex-row group"
            >
              {/* Executive Portrait on Left */}
              <div className="relative w-full sm:w-[240px] md:w-[260px] h-[360px] sm:h-auto shrink-0 bg-[#040D0A]">
                <Image
                  src={partner.image}
                  alt={partner.name}
                  fill
                  priority
                  className="object-cover object-top filter brightness-[0.98] contrast-[1.03] transition-all duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-transparent via-transparent to-[#061A15]/80 pointer-events-none" />
              </div>

              {/* Bio & Credentials on Right */}
              <div className="p-8 sm:p-9 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-brand-gold font-semibold font-mono">
                      {partner.role}
                    </span>
                    <div className="flex items-center gap-2 text-[#7E9A94]">
                      <span className="p-1 rounded-none hover:text-brand-gold transition-colors cursor-pointer" aria-label="LinkedIn">
                        <Linkedin className="w-4 h-4" />
                      </span>
                      <span className="p-1 rounded-none hover:text-brand-gold transition-colors cursor-pointer" aria-label="Email">
                        <Mail className="w-4 h-4" />
                      </span>
                    </div>
                  </div>

                  <h3 className="font-jakarta text-xl sm:text-2xl text-white font-bold uppercase tracking-wide mb-3 group-hover:text-brand-gold transition-colors">
                    {partner.name}
                  </h3>

                  <p className="text-[#96ACA8] text-xs sm:text-[13.5px] leading-relaxed font-sans font-light">
                    {partner.bio}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Complementary Expertise Quote Banner Below Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12 sm:mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-[#061814]/90 bg-gradient-to-r from-[#09241E] via-[#061A15] to-[#09241E] border border-[#143B30] p-6 sm:p-8 rounded-none text-center shadow-xl shadow-black/10">
            <p className="font-jakarta text-base sm:text-lg md:text-[20px] text-[#DFBA73] font-bold uppercase leading-relaxed tracking-wide">
              [ TOGETHER, THE MANAGING PARTNERS BRING COMPLEMENTARY EXPERTISE ACROSS
              COMMERCIALISATION, TECHNOLOGY, TRANSACTIONS, STRATEGIC CAPITAL AND GCC
              MARKET DEVELOPMENT. ]
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
