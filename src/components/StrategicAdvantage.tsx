"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe2, ShieldCheck, Scale, ArrowUpRight } from "lucide-react";

interface AdvantageCard {
  title: string;
  description: string;
  icon: React.ElementType;
  tag: string;
}

const advantageCards: AdvantageCard[] = [
  {
    tag: "01 / ARCHITECTURE",
    title: "Dual-Valued Corridor Framework",
    description:
      "Institutional alignment bridging United States breakthrough technologies with GCC sovereign deployment capacity, patient capital, and anchor industrialization mandates.",
    icon: Globe2,
  },
  {
    tag: "02 / RIGOR",
    title: "Techno-Commercial De-risking",
    description:
      "Rigorous evaluation harmonizing Technical Readiness Levels (TRL) with commercial adoption pathways, bankability benchmarks, and binding offtake agreements.",
    icon: ShieldCheck,
  },
  {
    tag: "03 / EXECUTION",
    title: "Institutional Execution Excellence",
    description:
      "Direct senior partner immersion navigating regulatory clearances, sovereign co-investment syndicates, and complex cross-border joint venture transactions.",
    icon: Scale,
  },
];

export const StrategicAdvantage: React.FC = () => {
  return (
    <section className="bg-white py-24 md:py-32 px-6 md:px-12 relative border-t border-neutral-200/70">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="text-xs uppercase tracking-[0.3em] font-semibold text-brand-gold mb-3">
            STRATEGIC ADVANTAGE
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-navy tracking-tight font-normal leading-[1.2]">
            Architected for Cross-Border Precision &amp; Sovereign Scale.
          </h2>
        </div>

        {/* 3 White Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advantageCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className="bg-[#FAFAFB] p-8 md:p-10 rounded-sm border border-neutral-200/90 hover:border-brand-gold/60 transition-all duration-300 hover:shadow-xl hover:shadow-neutral-200/60 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 group-hover:text-brand-gold transition-colors">
                      {card.tag}
                    </span>
                    <div className="w-10 h-10 rounded-sm bg-white border border-neutral-200 flex items-center justify-center text-brand-navy group-hover:border-brand-gold group-hover:text-brand-gold transition-all duration-300 shadow-sm">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl text-brand-navy font-normal mb-4 tracking-tight group-hover:text-brand-gold transition-colors duration-200 leading-snug">
                    {card.title}
                  </h3>

                  <p className="text-neutral-600 text-sm md:text-base leading-relaxed font-sans font-light">
                    {card.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-neutral-200/60 flex items-center justify-between text-xs tracking-wider uppercase font-semibold text-neutral-400 group-hover:text-brand-gold transition-colors">
                  <span>Corridor Standard</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
