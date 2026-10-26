"use client";

import React from "react";
import { motion } from "framer-motion";

interface MandateCard {
  id: string;
  title: string;
  bullets: string[];
}

const mandatesData: MandateCard[] = [
  {
    id: "commercialisation-strategy",
    title: "Commercialisation Strategy",
    bullets: [
      "Market opportunity assessment",
      "Commercial positioning, Go-to-market pathways",
      "Regionally aligned Market-entry strategy",
      "Customer / offtaker engagement",
    ],
  },
  {
    id: "market-access-partnerships",
    title: "Market Access & Strategic Partnerships",
    bullets: [
      "Regional industry ecosystem mapping",
      "Strategic partner identification",
      "Customer and stakeholder engagement",
      "Industrial collaborations and joint-venture pathways",
    ],
  },
  {
    id: "investment-readiness-capital",
    title: "Investment Readiness & Strategic Capital",
    bullets: [
      "Commercial and investment positioning",
      "Investor readiness and diligence preparation",
      "Capital strategy and investor mapping",
      "Strategic investor and industry-partner alignment",
    ],
  },
  {
    id: "mega-projects-deployment",
    title: "Mega Projects & Industrial Deployment",
    bullets: [
      "Commercial de-risking of industrial opportunities",
      "Project partnership and localisation strategies",
      "Stakeholder and ecosystem alignment",
      "Commercial pathways towards deployment",
    ],
  },
];

export const Mandates: React.FC = () => {
  return (
    <section
      id="mandates"
      className="bg-[#F6F8F7] text-[#0A1612] py-14 sm:py-18 md:py-24 px-6 md:px-12 relative border-t border-neutral-200/80"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header - Left-aligned stacked layout */}
        <div className="max-w-6xl mb-10 sm:mb-12">
          <div className="text-sm sm:text-[15px] uppercase tracking-[0.28em] font-semibold text-[#9E7B38] mb-2.5 font-sans">
            MANDATES
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] text-[#0A1612] tracking-tight font-normal leading-[1.24] mb-3.5 sm:mb-4">
            Where commercial, strategic and capital considerations align.
          </h2>
          <p className="text-[#4F635D] text-sm sm:text-base md:text-[16.5px] leading-relaxed font-sans font-light max-w-5xl lg:max-w-6xl">
            We alongside frontier technology innovators, project sponsors, investors and strategic partners on mandates that require an integrated view of market opportunity, commercial execution and capital.
          </p>
        </div>

        {/* 4 Mandate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-stretch">
          {mandatesData.map((mandate, idx) => (
            <motion.div
              key={mandate.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className="bg-white border border-neutral-200/90 hover:border-brand-gold/80 rounded-none transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-neutral-300/40 relative overflow-hidden group flex flex-col"
            >
              {/* Card Title Banner - Deep Luxury Emerald with Champagne Gold typography */}
              <div className="bg-[#061814] bg-gradient-to-r from-[#051713] via-[#092620] to-[#051713] text-[#DFBA73] font-sans font-semibold text-xs sm:text-[12.5px] uppercase tracking-wider py-3.5 px-4 text-center flex items-center justify-center min-h-[64px] leading-snug border-b-2 border-brand-gold/50 shadow-inner">
                {mandate.title}
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <ul className="space-y-3">
                  {mandate.bullets.map((bullet, bulletIdx) => (
                    <li
                      key={bulletIdx}
                      className="flex items-start gap-2.5 text-xs sm:text-[13.5px] text-[#2C4039] font-sans font-light leading-relaxed"
                    >
                      <span className="text-brand-gold mt-1 text-[10px] select-none shrink-0">●</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Framing Sentence Below Cards */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 sm:mt-12 text-center"
        >
          <div className="inline-block bg-white/90 border border-neutral-200/90 px-6 sm:px-8 py-3.5 sm:py-4 shadow-sm">
            <p className="font-serif text-sm sm:text-base text-[#2C4039] font-normal italic tracking-wide">
              Engagements are shaped around the needs, stage and context of each mandate.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
