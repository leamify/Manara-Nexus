"use client";

import React from "react";
import { motion } from "framer-motion";
import { Compass, Gem, BadgeCheck } from "lucide-react";

interface AdvantageCard {
  title: string;
  description: string;
  icon: React.ElementType;
}

const advantageCards: AdvantageCard[] = [
  {
    title: "Our Value Creation Framework",
    description:
      "Proprietary techno-commercial architecture bridging advanced innovation and sovereign capital deployment with measurable milestone engineering.",
    icon: Compass,
  },
  {
    title: "Long-Term Relationship & Deep Involvement",
    description:
      "Beyond isolated assignments, broker introductions, and episodic transactions—we serve as enduring co-architects invested in multi-year ecosystem success.",
    icon: Gem,
  },
  {
    title: "Successfully Executed Deals Across Ecosystems",
    description:
      "A proven track record of closed bilateral cross-border mandates and high-stakes deployments steered directly by Joel Coville & Madhurima Roy across US and GCC ecosystems.",
    icon: BadgeCheck,
  },
];

export const StrategicAdvantage: React.FC = () => {
  return (
    <section
      id="strategic-advantage"
      className="bg-[#F7F9F8] py-12 sm:py-16 md:py-20 px-6 md:px-12 relative border-t border-neutral-200/70"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] font-semibold text-[#9E7B38] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#9E7B38]" />
            <span>WHY MANARA</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0A1612] tracking-tight font-normal leading-[1.2]">
            Architected for Cross-Border Precision &amp; Sovereign Scale.
          </h2>
        </div>

        {/* 3 White Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7">
          {advantageCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className="bg-white p-6 sm:p-7 md:p-8 rounded-none border border-neutral-200/80 shadow-md shadow-neutral-200/40 hover:shadow-xl hover:border-brand-gold/60 transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="font-serif text-2xl md:text-[25px] text-[#0A1612] font-normal tracking-tight leading-[1.3] group-hover:text-[#9E7B38] transition-colors duration-200">
                      {card.title}
                    </h3>
                    <div className="w-9 h-9 rounded-full bg-[#F7F9F8] border border-neutral-200/80 flex-shrink-0 flex items-center justify-center text-[#9E7B38] group-hover:border-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-all duration-300">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <p className="text-neutral-500 text-xs sm:text-[13.5px] leading-relaxed font-sans font-light">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
