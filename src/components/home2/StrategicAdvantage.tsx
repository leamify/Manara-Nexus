"use client";

import React from "react";
import { motion } from "framer-motion";
import { Compass, Gem, BadgeCheck } from "lucide-react";

interface AdvantageCard {
  principle: string;
  titlePrimary: string;
  titleItalic?: string;
  description: string;
  icon: React.ElementType;
}

const advantageCards: AdvantageCard[] = [
  {
    principle: "PRINCIPLE 01",
    titlePrimary: "Our Value Creation",
    titleItalic: "Framework",
    description:
      "Proprietary techno-commercial architecture bridging advanced innovation and sovereign capital deployment with measurable milestone engineering.",
    icon: Compass,
  },
  {
    principle: "PRINCIPLE 02",
    titlePrimary: "Long-Term Relationship &",
    titleItalic: "Deep Involvement",
    description:
      "Beyond isolated assignments, broker introductions, and episodic transactions—we serve as enduring co-architects invested in multi-year ecosystem success.",
    icon: Gem,
  },
  {
    principle: "PRINCIPLE 03",
    titlePrimary: "Successfully Executed Deals",
    titleItalic: "Across Ecosystems",
    description:
      "A proven track record of closed bilateral cross-border mandates and high-stakes deployments steered directly by Joel Coville & Madhurima Roy across US and GCC ecosystems.",
    icon: BadgeCheck,
  },
];

export const StrategicAdvantage: React.FC = () => {
  return (
    <section
      id="strategic-advantage"
      className="bg-[#F7F9F8] py-24 md:py-32 px-6 md:px-12 relative border-t border-neutral-200/70"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.32em] font-semibold text-[#9E7B38] mb-4 font-sans">
            <span className="w-1.5 h-1.5 rounded-full bg-[#9E7B38]" />
            <span>WHY MANARA</span>
          </div>
          <h2 className="font-jakarta text-2xl sm:text-3xl md:text-[36px] text-[#0A1612] tracking-normal font-normal leading-[1.25]">
            Architected for Cross-Border Precision &amp;{" "}
            <span className="text-[#9E7B38]">Sovereign Scale.</span>
          </h2>
        </div>

        {/* 3 White Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advantageCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.principle}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className="bg-white p-8 md:p-10 rounded-sm border border-neutral-200/80 shadow-md shadow-neutral-200/40 hover:shadow-xl hover:border-brand-gold/60 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-[11px] font-sans font-medium uppercase tracking-[0.25em] text-neutral-400 group-hover:text-brand-gold transition-colors">
                      {card.principle}
                    </span>
                    <div className="w-9 h-9 rounded-full bg-[#F7F9F8] border border-neutral-200/80 flex items-center justify-center text-[#9E7B38] group-hover:border-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-all duration-300">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-jakarta text-lg sm:text-[19px] text-[#0A1612] font-normal mb-3.5 tracking-normal leading-[1.3] group-hover:text-[#9E7B38] transition-colors duration-200">
                    {card.titlePrimary}{" "}
                    {card.titleItalic && (
                      <span className="text-[#9E7B38]">{card.titleItalic}</span>
                    )}
                  </h3>

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
