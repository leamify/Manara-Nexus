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
      className="bg-[#030A08] text-white py-24 md:py-32 px-6 md:px-12 relative overflow-hidden border-t border-[#12362C]/60"
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
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/25 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-brand-gold">
              Sector and Ecosystem
            </span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[42px] leading-[1.3] text-white font-normal">
            We focus on technology-led opportunities where innovation, industrial
            transformation and strategic capital intersect.
          </h2>
        </div>

        {/* 3 Columns Desktop Grid with Rich Dark Green Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {sectorsList.map((sector) => {
            const Icon = sector.icon;
            return (
              <motion.div
                key={sector.id}
                variants={itemVariants}
                className="group relative p-8 rounded-none bg-[#061814]/90 bg-gradient-to-br from-[#09241E] via-[#061A15] to-[#04120E] border border-[#143B30] hover:border-brand-gold/60 transition-all duration-300 hover:shadow-2xl hover:shadow-[#020A07]/60 flex flex-col justify-between"
              >
                {/* Subtle top indicator bar */}
                <div className="absolute top-0 left-0 w-0 h-[2px] bg-brand-gold rounded-none transition-all duration-500 ease-out group-hover:w-full" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono tracking-widest text-brand-gold/80">
                      {sector.id}
                    </span>
                    <div className="w-9 h-9 rounded-full border border-brand-gold/25 bg-[#09241D] flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-[#04120E] group-hover:border-brand-gold transition-all duration-300">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-serif text-lg md:text-xl font-normal text-white group-hover:text-brand-gold transition-colors duration-200 mb-3 leading-snug">
                    {sector.name}
                  </h3>

                  <p className="text-[#96ACA8] text-xs md:text-sm leading-relaxed font-light">
                    {sector.focus}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Callout Box: Geography expertise: US <> GCC corridor */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 md:mt-20 max-w-3xl mx-auto"
        >
          <div className="border border-brand-gold/40 bg-gradient-to-r from-[#051713] via-[#092820] to-[#051713] p-6 md:p-8 rounded-lg text-center relative shadow-xl shadow-black/40">
            {/* Corner geometric accents */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-brand-gold" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-brand-gold" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-brand-gold" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-brand-gold" />

            <div className="text-xs uppercase tracking-[0.3em] text-[#86A39E] mb-2 font-medium">
              Cross-Border Specialization
            </div>
            <p className="font-serif text-xl sm:text-2xl md:text-3xl text-brand-gold font-normal tracking-wide">
              Geography expertise: US &lt;&gt; GCC corridor
            </p>
            <p className="text-xs md:text-sm text-[#96ACA8] mt-3 max-w-xl mx-auto leading-relaxed">
              Facilitating bilateral capital formation, proprietary technology licensing, sovereign co-investment, and Middle East industrialization mandates.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
