"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface MandateCase {
  id: string;
  category: "commercialisation" | "market-access" | "strategic-capital";
  vectorId: string;
  status: "EXECUTED" | "IN DEPLOYMENT";
  subCategory: string;
  title: string;
  description: string;
  capitalScale: string;
  corridor: string;
  advisoryRole: string;
}

const mandateTabs = [
  { id: "all", label: "ALL MANDATES (03)" },
  { id: "commercialisation", label: "COMMERCIALISATION" },
  { id: "market-access", label: "MARKET ACCESS & OFF-TAKE" },
  { id: "strategic-capital", label: "STRATEGIC CAPITAL" },
];

const mandatesList: MandateCase[] = [
  {
    id: "01",
    category: "commercialisation",
    vectorId: "VECTOR #C-019",
    status: "EXECUTED",
    subCategory: "TECHNO-COMMERCIAL ROLLOUT",
    title: "US Climate-Tech Scale-Up Commercial Rollout to GCC Sovereign Developers",
    description:
      "Structured multi-tier validation for an MIT-spinoff clean chemistry enterprise. Delivered full regional market architecture, competitive displacement model, and positioned proprietary catalysts into mega-scale infrastructure projects.",
    capitalScale: "$150M – $300M",
    corridor: "Boston <> Abu Dhabi",
    advisoryRole: "Lead Strategic Advisor & Commercial Architect",
  },
  {
    id: "02",
    category: "market-access",
    vectorId: "VECTOR #M-084",
    status: "IN DEPLOYMENT",
    subCategory: "CROSS-BORDER INDUSTRIAL JV",
    title: "Advanced Composite Aerostructures Localization & Off-Take Joint Venture",
    description:
      "Facilitated bilateral joint venture between a leading US composite manufacturer and Saudi Arabia's industrial development syndicate. Orchestrated stakeholder engagement with ministries, industrial city authorities, and construction consortiums.",
    capitalScale: "$85M JV Capital",
    corridor: "NYC <> Riyadh KAFD",
    advisoryRole: "JV Architect & Sovereign Alignment Partner",
  },
  {
    id: "03",
    category: "strategic-capital",
    vectorId: "VECTOR #S-112",
    status: "EXECUTED",
    subCategory: "SYNDICATE STRUCTURING",
    title: "Next-Gen Long-Duration Energy Storage Cross-Border Utility Mandate",
    description:
      "Advised global energy storage pioneer through institutional syndicate formation. Synthesized financial models to satisfy dual sovereign wealth fund investment committees, aligning private growth capital with Gulf-based strategic LP anchors.",
    capitalScale: "$200M+ Project Scale",
    corridor: "California <> Dubai",
    advisoryRole: "Lead Strategic Advisor & Transaction Architect",
  },
];

export const Mandates: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredMandates =
    activeTab === "all"
      ? mandatesList
      : mandatesList.filter((m) => m.category === activeTab);

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

        {/* Tab Controls (Pills matching image) */}
        <div className="flex flex-wrap gap-2.5 mb-12">
          {mandateTabs.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  isActive
                    ? "bg-brand-gold text-[#04120E] shadow-lg shadow-brand-gold/20"
                    : "bg-[#061A15] text-[#86A39E] hover:text-white hover:bg-[#0A261F] border border-[#143B30]"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* 3 Dark Green Mandate Cards Grid matching image */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-7 md:gap-8"
          >
            {filteredMandates.map((mandate) => (
              <div
                key={mandate.vectorId}
                className="bg-[#061814]/90 bg-gradient-to-br from-[#09241E] via-[#061A15] to-[#04120E] border border-[#143B30] hover:border-brand-gold/60 p-8 md:p-9 rounded-none transition-all duration-300 hover:shadow-2xl hover:shadow-[#020A07]/60 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Vector ID & Status Badge */}
                  <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#143B30]/70 text-xs">
                    <div className="flex items-center gap-2 text-brand-gold/90 font-mono text-xs tracking-wider">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                      <span className="font-semibold">{mandate.vectorId}</span>
                    </div>
                    <span
                      className={`px-2.5 py-1 text-[10px] uppercase tracking-wider font-semibold rounded-none border ${
                        mandate.status === "EXECUTED"
                          ? "border-brand-gold/40 text-brand-gold bg-brand-gold/10"
                          : "border-emerald-500/40 text-emerald-400 bg-emerald-500/10"
                      }`}
                    >
                      {mandate.status}
                    </span>
                  </div>

                  {/* Overline Sub-Category */}
                  <div className="text-[10.5px] uppercase tracking-[0.25em] font-medium text-[#7E9A94] mb-3">
                    {mandate.subCategory}
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl sm:text-[22px] text-white font-normal mb-4 group-hover:text-brand-gold transition-colors leading-[1.35]">
                    {mandate.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#96ACA8] text-xs sm:text-[13px] leading-relaxed font-light mb-8">
                    {mandate.description}
                  </p>
                </div>

                {/* Bottom Metrics Grid */}
                <div className="pt-6 border-t border-[#143B30]/70">
                  <div className="grid grid-cols-2 gap-4 mb-5">
                    <div>
                      <div className="text-[9.5px] uppercase tracking-[0.2em] font-semibold text-[#6C8580] mb-1.5">
                        TARGET CAPITAL SCALE
                      </div>
                      <div className="font-serif text-lg sm:text-xl font-normal text-brand-gold">
                        {mandate.capitalScale}
                      </div>
                    </div>
                    <div>
                      <div className="text-[9.5px] uppercase tracking-[0.2em] font-semibold text-[#6C8580] mb-1.5">
                        CORRIDOR
                      </div>
                      <div className="text-xs sm:text-[13px] text-white/90 font-medium">
                        {mandate.corridor}
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="text-[9.5px] uppercase tracking-[0.2em] font-semibold text-[#6C8580] mb-1">
                      ADVISORY ROLE
                    </div>
                    <div className="text-xs sm:text-[12.5px] text-[#A2B8B4] font-light">
                      {mandate.advisoryRole}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
