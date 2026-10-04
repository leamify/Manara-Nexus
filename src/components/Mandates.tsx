"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface MandateTab {
  id: string;
  label: string;
  vectorId: string;
  badge: string;
  title: string;
  description: string;
  bullets: string[];
  capitalScale: string;
  corridor: string;
  advisoryRole: string;
}

const mandateTabs: MandateTab[] = [
  {
    id: "commercialisation-strategy",
    label: "Commercialisation Strategy",
    vectorId: "MANDATE #C-01",
    badge: "MARKET ROLLOUT",
    title: "Commercialisation Strategy",
    description:
      "Structured techno-commercial architecture and validation models to transition high-growth technologies into sovereign and corporate deployment pipelines.",
    bullets: [
      "Market opportunity assessment",
      "Commercial positioning",
      "Market-entry strategy",
      "Customer / offtaker engagement",
      "Go-to-market pathways",
    ],
    capitalScale: "$50M — $300M+",
    corridor: "US <> GCC Sovereign Corridor",
    advisoryRole: "Lead Strategic Advisor & Commercial Architect",
  },
  {
    id: "market-access-partnerships",
    label: "Market Access & Partnerships",
    vectorId: "MANDATE #M-02",
    badge: "CROSS-BORDER JV",
    title: "Market Access & Partnerships",
    description:
      "Bilateral joint ventures, industrial localization frameworks, and high-level stakeholder orchestration across sovereign and corporate conglomerates.",
    bullets: [
      "GCC ecosystem development",
      "Strategic partner identification",
      "Customer and stakeholder engagement",
      "JV / partnership development",
      "Technology deployment opportunities",
    ],
    capitalScale: "$75M — $500M+",
    corridor: "US <> Saudi Arabia & UAE",
    advisoryRole: "JV Architect & Sovereign Alignment Partner",
  },
  {
    id: "investment-readiness-strategic-capital",
    label: "Investment Readiness & Strategic Capital",
    vectorId: "MANDATE #S-03",
    badge: "SYNDICATE STRUCTURING",
    title: "Investment Readiness & Strategic Capital",
    description:
      "Institutional syndicate formation, bankability analysis, and dual sovereign wealth fund alignment to fund critical capital-intensive scaling.",
    bullets: [
      "Investment proposition",
      "Capital strategy",
      "Investor mapping",
      "Strategic investor engagement",
      "Capital formation",
    ],
    capitalScale: "$100M — $1B+",
    corridor: "US Institutional <> GCC Sovereign LPs",
    advisoryRole: "Lead Strategic Advisor & Transaction Architect",
  },
  {
    id: "mega-projects-deployment",
    label: "Mega Projects & Deployment",
    vectorId: "MANDATE #P-04",
    badge: "GIGA INFRASTRUCTURE",
    title: "Mega Projects & Deployment",
    description:
      "Integrating novel industrial decarbonisation, materials, and deep-tech architectures directly into signature sovereign giga-projects and master developments.",
    bullets: [
      "Project commercialisation",
      "Capital strategy",
      "Strategic partnerships",
      "Stakeholder management",
      "Deployment ecosystem development",
    ],
    capitalScale: "$250M — $5B+",
    corridor: "Cross-Border Economic Corridors",
    advisoryRole: "Mega-Project Partner & Localization Lead",
  },
];

export const Mandates: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState<string>("commercialisation-strategy");

  const currentTab =
    mandateTabs.find((t) => t.id === activeTabId) || mandateTabs[0];

  return (
    <section
      id="mandates"
      className="bg-[#030A08] text-white py-24 md:py-32 px-6 md:px-12 relative border-t border-[#12362C]/60"
    >
      {/* Background Subtle Green Radial Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 40% at 50% 0%, rgba(18, 72, 56, 0.16) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 lg:mb-16 pb-8 border-b border-[#143B30]/60 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] font-semibold text-brand-gold mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
              <span>MANDATES</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-normal tracking-tight">
              Sovereign &amp; Industrial<br />Mandate Matrix
            </h2>
          </div>
          <p className="text-[#96ACA8] text-sm sm:text-[14.5px] max-w-md font-sans font-light leading-relaxed">
            We work alongside technology companies, project sponsors, investors and strategic partners on mandates where commercial, strategic and capital considerations are closely interconnected.
          </p>
        </div>

        {/* 4 Square Tabs for 4 Types of Mandates (rounded-none, no corner border curve) */}
        <div className="flex flex-wrap gap-3 mb-10">
          {mandateTabs.map((tab) => {
            const isActive = tab.id === activeTabId;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTabId(tab.id)}
                className={`px-5 py-3 rounded-none text-xs font-semibold uppercase tracking-wider transition-all duration-300 border ${
                  isActive
                    ? "bg-brand-gold text-[#04120E] border-brand-gold shadow-lg shadow-brand-gold/15"
                    : "bg-[#061A15] text-[#86A39E] hover:text-white hover:bg-[#0A261F] border-[#143B30]"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Active Mandate Content with exact Bullet Points */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTab.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="bg-[#061814]/90 bg-gradient-to-br from-[#09241E] via-[#061A15] to-[#04120E] border border-[#143B30] hover:border-brand-gold/60 p-8 sm:p-10 md:p-12 rounded-none transition-all duration-300 shadow-2xl shadow-[#020A07]/60"
          >
            {/* Card Top Row: Vector Identifier & Status Badge */}
            <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#143B30]/70 text-xs">
              <div className="flex items-center gap-2 text-brand-gold font-mono tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                <span className="font-semibold text-xs sm:text-sm">{currentTab.vectorId}</span>
              </div>
              <span className="px-3 py-1 text-[10.5px] uppercase tracking-wider font-semibold rounded-none border border-brand-gold/40 text-brand-gold bg-brand-gold/10">
                {currentTab.badge}
              </span>
            </div>

            {/* Two-Column Editorial Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              {/* Left Column: Title, Overview, Metrics */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal mb-4 tracking-tight leading-[1.3]">
                    {currentTab.title}
                  </h3>
                  <p className="text-[#96ACA8] text-sm sm:text-base leading-relaxed font-light mb-8">
                    {currentTab.description}
                  </p>
                </div>

                {/* Corridor & Advisory Metrics */}
                <div className="pt-6 border-t border-[#143B30]/70 grid grid-cols-2 gap-5">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#6C8580] mb-1.5">
                      TARGET CAPITAL SCALE
                    </div>
                    <div className="font-serif text-lg sm:text-xl font-normal text-brand-gold">
                      {currentTab.capitalScale}
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#6C8580] mb-1.5">
                      CORRIDOR
                    </div>
                    <div className="text-xs sm:text-[13px] text-white/90 font-medium">
                      {currentTab.corridor}
                    </div>
                  </div>
                  <div className="col-span-2 pt-2">
                    <div className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#6C8580] mb-1">
                      ADVISORY ROLE
                    </div>
                    <div className="text-xs sm:text-[13px] text-[#A2B8B4] font-light">
                      {currentTab.advisoryRole}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Exact 5 Bullet Points */}
              <div className="lg:col-span-6 bg-[#04120E]/80 border border-[#143B30]/80 p-6 sm:p-8 rounded-none flex flex-col justify-center">
                <div className="text-xs uppercase tracking-[0.25em] font-semibold text-brand-gold mb-6 pb-3 border-b border-[#143B30]/70">
                  Core Execution Scope &amp; Deliverables
                </div>
                <ul className="space-y-4">
                  {currentTab.bullets.map((bullet, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3.5 text-sm sm:text-[14.5px] text-white/90 font-light"
                    >
                      <span className="text-brand-gold mt-0.5 text-base leading-none select-none">●</span>
                      <span className="leading-snug text-[#D8E6E3]">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
