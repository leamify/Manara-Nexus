"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Atom,
  Flame,
  Zap,
  Cpu,
  Building,
  Globe2,
  Sparkles,
} from "lucide-react";

interface SectorItem {
  id: string;
  name: string;
  icon: React.ElementType;
  focus: string;
}

const sectorsList: SectorItem[] = [
  {
    id: "01",
    name: "Advanced Materials & Carbon Composites",
    icon: Atom,
    focus: "Advanced materials, carbon composites, industrial applications and next-generation material systems.",
  },
  {
    id: "02",
    name: "Industrial Decarbonisation",
    icon: Flame,
    focus: "Technologies enabling emissions reduction, resource efficiency and industrial transformation.",
  },
  {
    id: "03",
    name: "New Energy & Resource Efficiency",
    icon: Zap,
    focus: "Energy transition, energy efficiency, new-generation fuels, resource optimisation and enabling technologies.",
  },
  {
    id: "04",
    name: "Deep Tech & Climate Technology",
    icon: Cpu,
    focus: "Technology-led solutions addressing industrial, environmental and infrastructure challenges.",
  },
  {
    id: "05",
    name: "Sustainable Built Environment",
    icon: Building,
    focus: "Materials, technologies and systems supporting more efficient and resilient built environments.",
  },
  {
    id: "06",
    name: "Mega Projects & Infrastructure",
    icon: Globe2,
    focus: "Technology, capital and partnership opportunities embedded within large-scale infrastructure and industrial projects.",
  },
];

export const Sectors: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      id="sectors"
      className="bg-[#030A08] text-white py-12 sm:py-16 md:py-20 px-6 md:px-12 relative overflow-hidden border-t border-[#12362C]/60"
    >
      {/* Background Subtle Green Radial Glow & Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(18, 72, 56, 0.22) 0%, rgba(5, 23, 18, 0.08) 50%, transparent 75%)",
        }}
      />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/25 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            <span className="text-sm sm:text-[15px] uppercase tracking-[0.28em] font-semibold text-brand-gold font-sans">
              Sectors &amp; Ecosystems
            </span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] leading-[1.24] text-white font-normal tracking-tight mb-4 sm:mb-5">
            Technology-led opportunities. Real-world applications.
          </h2>

          <p className="text-[#A0B8B2] text-sm sm:text-base md:text-[16.5px] leading-relaxed font-sans font-light max-w-2xl mx-auto">
            We focus on technology-led opportunities where innovation, industrial transformation and strategic capital intersect.
          </p>
        </div>

        {/* 3 Columns Desktop Grid with Rich Dark Green Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        >
          {sectorsList.map((sector) => {
            const Icon = sector.icon;
            return (
              <motion.div
                key={sector.id}
                variants={itemVariants}
                className="group relative p-5 sm:p-6 rounded-none bg-[#061814]/90 bg-gradient-to-br from-[#09241E] via-[#061A15] to-[#04120E] border border-[#143B30] hover:border-brand-gold/60 transition-all duration-300 hover:shadow-2xl hover:shadow-[#020A07]/60 flex flex-col justify-between"
              >
                {/* Subtle top indicator bar */}
                <div className="absolute top-0 left-0 w-0 h-[2px] bg-brand-gold rounded-none transition-all duration-500 ease-out group-hover:w-full" />

                <div>
                  <div className="flex items-start justify-between gap-3 mb-2.5">
                    <h3 className="font-serif text-lg md:text-[19px] font-normal text-white group-hover:text-brand-gold transition-colors duration-200 leading-snug">
                      {sector.name}
                    </h3>
                    <div className="w-8 h-8 rounded-full border border-brand-gold/25 bg-[#09241D] flex-shrink-0 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-[#04120E] group-hover:border-brand-gold transition-all duration-300 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <p className="text-[#96ACA8] text-xs md:text-[13px] leading-relaxed font-light">
                    {sector.focus}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Callout Box: Geography expertise: US–GCC corridor */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 sm:mt-8 md:mt-10 max-w-[1040px] mx-auto w-full"
        >
          <div className="border border-brand-gold/40 bg-gradient-to-br from-[#061814] via-[#092820] to-[#04120E] px-4 sm:px-6 md:px-7 py-5 sm:py-6 rounded-lg text-center relative shadow-2xl shadow-black/60 overflow-hidden">
            {/* Corner geometric accents */}
            <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-brand-gold" />
            <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-brand-gold" />
            <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-brand-gold" />
            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-brand-gold" />

            <div className="text-[11px] uppercase tracking-[0.3em] text-brand-gold mb-1.5 font-semibold font-sans">
              Geography expertise:
            </div>

            <h3 className="font-serif text-xl sm:text-2xl md:text-[28px] text-white font-normal tracking-wide mb-1.5 leading-snug">
              THE US–GCC CORRIDOR
            </h3>

            <p className="font-serif text-sm sm:text-base md:text-lg text-brand-gold font-normal mb-3.5 leading-snug">
              Connecting global innovation with regional opportunity.
            </p>

            <div className="w-16 h-[1px] bg-brand-gold/40 mx-auto mb-3.5" />

            <div className="space-y-1 text-[#A4BABB] text-xs sm:text-[13px] md:text-[13px] lg:text-[13.5px] leading-snug font-sans font-light w-full">
              <p>
                Manara Nexus works across the US–GCC corridor, connecting international technologies, expertise and capital with commercial and industrial opportunities in the Gulf.
              </p>
              <p>
                We also support GCC-based businesses and project sponsors seeking international technology partners, strategic relationships and pathways to capital.
              </p>
              <p>
                Our focus is on building commercially grounded connections that can advance market access, industrial participation and project development.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
