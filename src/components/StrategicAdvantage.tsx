"use client";

import React from "react";
import { motion } from "framer-motion";
import { Compass, Gem, BadgeCheck } from "lucide-react";

interface AdvantageCard {
  title: string;
  highlight: string;
  description: string;
}

const advantageCards: AdvantageCard[] = [
  {
    title: "An Integrated Nexus",
    highlight:
      "We believe that Innovation, commercialisation and capital must work in synergy, not as disconnected workstreams.",
    description:
      "Technology needs a commercial positioning, credible route to market and the resources to scale. Commercialisation needs differentiated solutions, right commercial partners and viable economics. Capital opportunities need a proposition that can generate sustainable value supported by robust diligence, alignment, and de-risking. Manara works across these intersections to align the opportunity, the market and the capital required to advance it.",
  },
  {
    title: "Embedded in the Opportunity",
    highlight: "Partners in progress, not advisors at a distance.",
    description:
      "We work alongside founders, businesses, investors and project sponsors to navigate the commercial, strategic and stakeholder challenges that determine whether an opportunity advances. Our role extends beyond recommendations and introductions. We stay engaged in developing pathways, aligning partners and moving priorities forward, working as an extension of the team, with a shared focus on progress.",
  },
  {
    title: "Aligned to the Outcomes",
    highlight: "Invested in the value we help create.",
    description:
      "We believe advisory relationships should be measured by the value they help unlock, not simply by advice offered and reports prepared. Our engagements are shaped around the outcomes that matter to each opportunity: commercial traction, strategic partnerships, investment readiness or progress towards deployment. Where appropriate, we align our engagement model with those objectives, creating a stronger connection between our contribution and the opportunity's success.",
  },
];

export const StrategicAdvantage: React.FC = () => {
  return (
    <section
      id="strategic-advantage"
      className="bg-[#F7F9F8] py-14 sm:py-18 md:py-24 px-6 md:px-12 relative border-t border-neutral-200/70"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-7xl mb-10 sm:mb-12">
          <div className="text-sm sm:text-[15px] uppercase tracking-[0.28em] font-semibold text-[#9E7B38] mb-2.5 font-sans">
            WHY MANARA
          </div>
          <p className="text-sm sm:text-base md:text-[16.5px] text-[#2C4039] leading-relaxed font-sans font-light max-w-6xl">
            Manara Nexus brings together expertise across technology commercialisation, strategic advisory, investment and capital markets to support high-potential technologies and complex projects. We work with technology companies, project developers, strategic investors, family offices, corporates and institutional stakeholders across the US–GCC corridor.
          </p>
        </div>

        {/* 3 Redesigned Editorial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7 items-stretch">
          {advantageCards.map((card, idx) => {
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className="bg-white p-6 sm:p-7 md:p-8 rounded-none border border-neutral-200/90 shadow-sm hover:shadow-xl hover:border-brand-gold/60 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden"
              >
                {/* Subtle top indicator gold bar */}
                <div className="absolute top-0 left-0 w-0 h-[2px] bg-brand-gold group-hover:w-full transition-all duration-500 ease-out" />

                <div>
                  {/* Title */}
                  <h3 className="font-serif text-xl sm:text-[22px] md:text-[23px] text-[#0A1612] font-normal tracking-tight leading-snug mb-3.5 group-hover:text-[#9E7B38] transition-colors duration-200">
                    {card.title}
                  </h3>

                  {/* Highlight Thesis Quote */}
                  <div className="p-3 sm:p-3.5 rounded-sm bg-[#F8FAF9] border-l-2 border-brand-gold mb-4">
                    <p className="font-serif italic text-xs sm:text-[13.5px] text-[#1A2E28] leading-snug font-normal">
                      “{card.highlight}”
                    </p>
                  </div>

                  {/* Detailed Body Narrative */}
                  <p className="text-[#4F635D] text-xs sm:text-[13px] leading-[1.65] font-sans font-light">
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
