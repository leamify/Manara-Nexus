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
    focus: "Next-generation structural materials, polymer technologies, and advanced industrial fibers.",
  },
  {
    id: "02",
    name: "Industrial Decarbonisation",
    icon: Flame,
    focus: "Heavy industry abatement, carbon capture, utilization & storage, and green hydrogen integration.",
  },
  {
    id: "03",
    name: "New Energy & Resource Efficiency",
    icon: Zap,
    focus: "Renewable power systems, long-duration energy storage, and industrial water & resource closed loops.",
  },
  {
    id: "04",
    name: "Deep Tech & Climate Technology",
    icon: Cpu,
    focus: "Breakthrough physics, applied AI in industrial operations, synthetic biology, and climate sensing.",
  },
  {
    id: "05",
    name: "Sustainable Built Environment",
    icon: Building,
    focus: "Low-carbon concrete, intelligent building enclosures, modular architecture, and urban resilience.",
  },
  {
    id: "06",
    name: "Mega Projects & Infrastructure",
    icon: Globe2,
    focus: "Giga-project delivery frameworks, sovereign logistics corridors, and smart utility grids.",
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
    <section id="sectors" className="bg-brand-navy text-white py-24 md:py-32 px-6 md:px-12 relative overflow-hidden">
      {/* Background Subtle Gradient & Grid */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none opacity-40" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/20 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-brand-gold">
              Target Domains
            </span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[42px] leading-[1.3] text-white font-normal">
            We focus on technology-led opportunities where innovation, industrial
            transformation and strategic capital intersect.
          </h2>
        </div>

        {/* 3 Columns Desktop Grid */}
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
                className="group relative p-8 rounded-sm bg-[#0E182D]/70 border border-white/10 hover:border-brand-gold/60 transition-all duration-300 hover:bg-[#12203C]/90 hover:shadow-2xl hover:shadow-black/40 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono tracking-widest text-brand-gold/80">
                      {sector.id}
                    </span>
                    <div className="w-9 h-9 rounded-sm border border-brand-gold/20 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-navy transition-all duration-300">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-serif text-lg md:text-xl font-normal text-white group-hover:text-brand-gold transition-colors duration-200 mb-3 leading-snug">
                    {sector.name}
                  </h3>

                  <p className="text-brand-gray-muted text-xs md:text-sm leading-relaxed">
                    {sector.focus}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] uppercase tracking-wider text-white/40 group-hover:text-brand-gold/80 transition-colors">
                  <span>Sector Focus</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold/40 group-hover:bg-brand-gold transition-colors" />
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
          <div className="border border-brand-gold/50 bg-gradient-to-r from-[#0C1527] via-[#14233F] to-[#0C1527] p-6 md:p-8 rounded-sm text-center relative shadow-xl shadow-brand-gold/5">
            {/* Corner geometric accents */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-brand-gold" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-brand-gold" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-brand-gold" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-brand-gold" />

            <div className="text-xs uppercase tracking-[0.3em] text-brand-gray-muted mb-2 font-medium">
              Cross-Border Specialization
            </div>
            <p className="font-serif text-xl sm:text-2xl md:text-3xl text-brand-gold font-normal tracking-wide">
              Geography expertise: US &lt;&gt; GCC corridor
            </p>
            <p className="text-xs md:text-sm text-brand-gray-muted mt-3 max-w-xl mx-auto">
              Facilitating bilateral capital formation, proprietary technology licensing, sovereign co-investment, and Middle East industrialization mandates.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
