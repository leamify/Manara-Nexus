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
  assetClass: string;
  name: string;
  icon: React.ElementType;
  focus: string;
}

const sectorsList: SectorItem[] = [
  {
    id: "01",
    assetClass: "ASSET CLASS 01",
    name: "Advanced Materials & Carbon Composites",
    icon: Atom,
    focus:
      "Advanced materials, carbon composites, industrial applications and next-generation material systems.",
  },
  {
    id: "02",
    assetClass: "ASSET CLASS 02",
    name: "Industrial Decarbonisation",
    icon: Flame,
    focus:
      "Technologies enabling emissions reduction, resource efficiency and industrial transformation.",
  },
  {
    id: "03",
    assetClass: "ASSET CLASS 03",
    name: "New Energy & Resource Efficiency",
    icon: Zap,
    focus:
      "Energy transition, energy efficiency, new-generation fuels, resource optimisation and enabling technologies.",
  },
  {
    id: "04",
    assetClass: "ASSET CLASS 04",
    name: "Deep Tech & Climate Technology",
    icon: Cpu,
    focus:
      "Technology-led solutions addressing industrial, environmental and infrastructure challenges.",
  },
  {
    id: "05",
    assetClass: "ASSET CLASS 05",
    name: "Sustainable Built Environment",
    icon: Building,
    focus:
      "Materials, technologies and systems supporting more efficient and resilient built environments.",
  },
  {
    id: "06",
    assetClass: "ASSET CLASS 06",
    name: "Mega Projects & Infrastructure",
    icon: Globe2,
    focus:
      "Technology, capital and partnership opportunities embedded within large-scale infrastructure and industrial projects.",
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
          <div className="inline-flex items-center text-xs uppercase tracking-[0.28em] font-semibold text-brand-gold mb-6 font-sans">
            <span className="text-brand-gold mr-1.5 font-normal">[</span>
            <span>SECTOR AND ECOSYSTEM</span>
            <span className="text-brand-gold ml-1.5 font-normal">]</span>
          </div>

          <h2 className="font-jakarta text-3xl sm:text-4xl md:text-[46px] leading-[1.18] text-white font-extrabold uppercase tracking-tight">
            We focus on technology-led opportunities where innovation, industrial
            transformation and strategic capital intersect.
          </h2>
        </div>

        {/* 3 Columns Desktop Grid Matching Image 3 & 4 */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7"
        >
          {sectorsList.map((sector) => {
            const Icon = sector.icon;
            return (
              <motion.div
                key={sector.id}
                variants={itemVariants}
                className="group relative p-7 sm:p-8 rounded-none bg-[#061814]/90 bg-gradient-to-br from-[#09241E] via-[#061A15] to-[#04120E] border border-[#143B30] hover:border-brand-gold/60 transition-all duration-300 hover:shadow-2xl hover:shadow-[#020A07]/60 flex flex-col justify-between"
              >
                {/* Subtle top indicator bar */}
                <div className="absolute top-0 left-0 w-0 h-[2px] bg-brand-gold rounded-none transition-all duration-500 ease-out group-hover:w-full" />

                <div>
                  {/* Top indicator: gold dot + ASSET CLASS matching Image 3 */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                      <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.24em] font-semibold text-brand-gold">
                        {sector.assetClass}
                      </span>
                    </div>
                    <div className="w-8 h-8 rounded-full border border-brand-gold/20 bg-[#09241D] flex items-center justify-center text-brand-gold/80 group-hover:bg-brand-gold group-hover:text-[#04120E] group-hover:border-brand-gold transition-all duration-300">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Heading in Bold Uppercase Sans matching Image 3 */}
                  <h3 className="font-jakarta text-lg sm:text-[21px] font-bold uppercase text-white group-hover:text-brand-gold transition-colors duration-200 mb-3.5 leading-snug tracking-wide">
                    {sector.name}
                  </h3>

                  {/* Content in refined sans-serif matching Image 4 */}
                  <p className="text-[#8EA29F] text-xs sm:text-[13.5px] leading-relaxed font-sans font-light">
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
          <div className="border border-brand-gold/40 bg-gradient-to-r from-[#051713] via-[#092820] to-[#051713] p-6 md:p-8 rounded-sm text-center relative shadow-xl shadow-black/40">
            {/* Corner geometric accents */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-brand-gold" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-brand-gold" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-brand-gold" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-brand-gold" />

            <div className="inline-flex items-center text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-[#86A39E] mb-2 font-semibold font-sans">
              <span className="text-brand-gold mr-1 font-normal">[</span>
              <span>CROSS-BORDER SPECIALIZATION</span>
              <span className="text-brand-gold ml-1 font-normal">]</span>
            </div>
            <p className="font-jakarta text-xl sm:text-2xl md:text-[28px] text-brand-gold font-bold uppercase tracking-wide leading-snug">
              Geography expertise: US <span className="font-light">&lt;&gt;</span> GCC corridor
            </p>
            <p className="text-xs md:text-sm text-[#96ACA8] mt-3 max-w-xl mx-auto leading-relaxed font-sans font-light">
              Facilitating bilateral capital formation, proprietary technology licensing, sovereign co-investment, and Middle East industrialization mandates.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
