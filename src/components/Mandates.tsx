"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, ShieldCheck } from "lucide-react";

interface MandateTrack {
  track: string;
  badge: string;
  title: string;
  description: string;
  deliverables: string[];
  scope: string;
  capital: string;
  timeline: string;
}

interface TabData {
  id: string;
  name: string;
  tracks: MandateTrack[];
}

const mandateTabs: TabData[] = [
  {
    id: "commercialisation-strategy",
    name: "COMMERCIALISATION STRATEGY",
    tracks: [
      {
        track: "TRACK 01",
        badge: "MARKET ASSESSMENT",
        title: "Techno-Commercial Positioning & Go-To-Market",
        description:
          "Rigorous technical benchmarking and commercial positioning to validate product-market fit across sovereign industrial value chains.",
        deliverables: [
          "Market opportunity assessment",
          "Commercial positioning & pricing models",
          "Market-entry & regulatory strategy",
          "Customer / offtaker engagement roadmap",
          "Go-to-market pathways & risk mitigations",
        ],
        scope: "Tier-1 Advisory",
        capital: "Series B — Growth",
        timeline: "4 — 8 Months",
      },
      {
        track: "TRACK 02",
        badge: "CUSTOMER ADOPTION",
        title: "Offtaker Validation & Commercial Scaling",
        description:
          "Structuring bilateral proofs of concept and binding commercial agreements with regional industrial conglomerates.",
        deliverables: [
          "Industrial offtaker qualification",
          "Pilot deployment structuring",
          "Commercial contract negotiation",
          "Supply-chain integration pathways",
          "Bankability & risk de-risking",
        ],
        scope: "Execution Mandate",
        capital: "$25M — $100M+",
        timeline: "6 — 12 Months",
      },
      {
        track: "TRACK 03",
        badge: "GO-TO-MARKET",
        title: "Cross-Border Dual Operating Architecture",
        description:
          "Designing corporate architectures enabling US technology intellectual property to scale into sovereign manufacturing bases.",
        deliverables: [
          "Dual-entity corporate structuring",
          "Cross-border IP licensing models",
          "Local manufacturing feasibility",
          "Sovereign incentives alignment",
          "Executive steering oversight",
        ],
        scope: "Strategic Retainer",
        capital: "Institutional Scale",
        timeline: "12 — 18 Months",
      },
    ],
  },
  {
    id: "market-access-partnerships",
    name: "MARKET ACCESS & PARTNERSHIPS",
    tracks: [
      {
        track: "TRACK 01",
        badge: "GCC EXPANSION",
        title: "Ecosystem Development & Sovereign Access",
        description:
          "Unlocking national champion ecosystems across the UAE, Saudi Arabia, and greater GCC jurisdictions.",
        deliverables: [
          "GCC ecosystem development",
          "Strategic partner identification",
          "Customer & stakeholder engagement",
          "JV / partnership development",
          "Technology deployment opportunities",
        ],
        scope: "Cross-Border Mandate",
        capital: "$50M — $250M+",
        timeline: "6 — 14 Months",
      },
      {
        track: "TRACK 02",
        badge: "JOINT VENTURES",
        title: "Bespoke Sovereign JV Structuring",
        description:
          "Engineering equitable, legally sound joint ventures connecting global patent holders with regional sovereign industrial champions.",
        deliverables: [
          "Sovereign partner screening",
          "JV terms & equity governance",
          "Offtake guarantees negotiation",
          "Technology transfer covenants",
          "Government liaison facilitation",
        ],
        scope: "Co-Development",
        capital: "$100M — $500M+",
        timeline: "9 — 18 Months",
      },
      {
        track: "TRACK 03",
        badge: "DEPLOYMENT HUBS",
        title: "Industrial Park & Free Zone Integration",
        description:
          "Securing subsidized land allocations, specialized infrastructure, and long-term utility concessions.",
        deliverables: [
          "ADGM / DIFC / KSA licensing",
          "Special economic zone allocation",
          "Utility & feedstock agreements",
          "Customs & trade facilitation",
          "Local workforce development",
        ],
        scope: "Operational Advisory",
        capital: "Direct Project Capital",
        timeline: "6 — 12 Months",
      },
    ],
  },
  {
    id: "investment-readiness",
    name: "INVESTMENT READINESS & STRATEGIC CAPITAL",
    tracks: [
      {
        track: "TRACK 01",
        badge: "CAPITAL FORMATION",
        title: "Sovereign & Institutional Capital Formation",
        description:
          "Positioning proprietary techno-commercial propositions for sovereign wealth funds and strategic corporate venture arms.",
        deliverables: [
          "Institutional investment proposition",
          "Strategic capital strategy",
          "Sovereign investor mapping",
          "Strategic investor engagement",
          "Syndicate capital formation",
        ],
        scope: "Placement Advisory",
        capital: "$50M — $300M+",
        timeline: "6 — 12 Months",
      },
      {
        track: "TRACK 02",
        badge: "TRANSACTION STRUCTURING",
        title: "M&A, Co-Investment & Recapitalisation",
        description:
          "Navigating cross-border transactions, structured equity, and strategic buy-in from bilateral state-backed institutions.",
        deliverables: [
          "Valuation & transaction mechanics",
          "Cross-border regulatory filings",
          "Co-investment syndicate management",
          "Commercial due diligence defense",
          "Closing & governance architecture",
        ],
        scope: "Transaction Support",
        capital: "$100M — $1B+",
        timeline: "6 — 15 Months",
      },
      {
        track: "TRACK 03",
        badge: "PATIENT CAPITAL",
        title: "Long-Term Sovereign Endowment Integration",
        description:
          "Arranging patient capital and project debt facilities for first-of-a-kind commercial plants and gigafactories.",
        deliverables: [
          "National development fund grants",
          "Sovereign credit guarantee backing",
          "Blended climate finance instruments",
          "Project finance model validation",
          "Lender engineering alignment",
        ],
        scope: "Structured Capital",
        capital: "$200M — $750M+",
        timeline: "12 — 24 Months",
      },
    ],
  },
  {
    id: "mega-projects-deployment",
    name: "MEGA PROJECTS & DEPLOYMENT",
    tracks: [
      {
        track: "TRACK 01",
        badge: "GIGA SCALE",
        title: "Mega-Project Commercialisation & Delivery",
        description:
          "Integrating novel industrial decarbonisation and deep-tech solutions directly into multi-billion-dollar regional master plans.",
        deliverables: [
          "Project commercialisation roadmap",
          "Capital strategy & financial modeling",
          "Strategic partnerships structuring",
          "Stakeholder & sovereign management",
          "Deployment ecosystem development",
        ],
        scope: "Mega-Project Partner",
        capital: "$500M — $5B+",
        timeline: "18 — 36 Months",
      },
      {
        track: "TRACK 02",
        badge: "UTILITIES & INFRA",
        title: "Clean Energy & Industrial Infrastructure Hubs",
        description:
          "Coordinating massive resource efficiency, green hydrogen, and carbon storage architectures with sovereign utility operators.",
        deliverables: [
          "Concession agreement structuring",
          "Power purchase agreements (PPA)",
          "Carbon abatement verification",
          "EPC consortium alignment",
          "Sovereign stakeholder coordination",
        ],
        scope: "Infrastructure Lead",
        capital: "$1B — $10B+",
        timeline: "24 — 48 Months",
      },
      {
        track: "TRACK 03",
        badge: "BUILT ENVIRONMENT",
        title: "Next-Gen Materials & Urban Resilience",
        description:
          "Deploying breakthrough advanced composites and low-carbon cement into signature mega-projects.",
        deliverables: [
          "Specification into tender blueprints",
          "Regulatory approvals & standards",
          "Supply security guarantees",
          "On-site demonstration assets",
          "Executive procurement liaison",
        ],
        scope: "Sector Specialist",
        capital: "$250M — $1.5B+",
        timeline: "12 — 24 Months",
      },
    ],
  },
];

export const Mandates: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(mandateTabs[0].id);

  const currentTab = mandateTabs.find((t) => t.id === activeTab) || mandateTabs[0];

  return (
    <section id="mandates" className="bg-[#050C18] text-white py-24 md:py-32 px-6 md:px-12 relative border-t border-brand-gold/15">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 lg:mb-16 pb-8 border-b border-white/10 gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] font-semibold text-brand-gold mb-3">
              INSTITUTIONAL EXECUTION FRAMEWORK
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-normal tracking-tight">
              Sovereign &amp; Industrial Mandate Matrix
            </h2>
          </div>
          <p className="text-brand-gray-muted text-sm sm:text-base max-w-md font-sans font-light">
            Bespoke engagement structures transitioning breakthrough technology ventures into scaled regional anchors.
          </p>
        </div>

        {/* Tab Controls (Pills matching screenshot) */}
        <div className="flex flex-wrap gap-2.5 mb-12">
          {mandateTabs.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  isActive
                    ? "bg-brand-gold text-brand-navy shadow-lg shadow-brand-gold/20"
                    : "bg-[#0C172B] text-brand-gray-muted hover:text-white hover:bg-[#12223F] border border-white/5"
                }`}
              >
                {tab.name}
              </button>
            );
          })}
        </div>

        {/* 3 Dark Mandate Cards Grid matching screenshot */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTab.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-7 md:gap-8"
          >
            {currentTab.tracks.map((track) => (
              <div
                key={track.title}
                className="bg-[#081222]/90 border border-white/10 hover:border-brand-gold/60 p-8 rounded-sm transition-all duration-300 hover:shadow-2xl hover:shadow-black/50 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10 text-xs font-mono tracking-widest text-brand-gold">
                    <span>{track.track}</span>
                    <span className="px-2 py-0.5 rounded bg-brand-gold/10 text-brand-gold text-[10px] font-semibold tracking-wider">
                      {track.badge}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl text-white font-normal mb-3 group-hover:text-brand-gold transition-colors leading-snug">
                    {track.title}
                  </h3>

                  <p className="text-brand-gray-muted text-xs sm:text-sm leading-relaxed mb-6 font-light">
                    {track.description}
                  </p>

                  {/* Bullet points */}
                  <div className="space-y-2.5 pt-4 border-t border-white/5">
                    {track.deliverables.map((item) => (
                      <div key={item} className="flex items-start gap-2.5 text-xs text-brand-gray-light/90">
                        <Check className="w-3.5 h-3.5 text-brand-gold shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Metrics Row */}
                <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-3 gap-2 text-center text-[10px] font-mono">
                  <div className="bg-[#040913] p-2 rounded-sm border border-white/5">
                    <div className="text-brand-gray-muted/70 uppercase">Scope</div>
                    <div className="text-brand-gold font-semibold mt-0.5 truncate">{track.scope}</div>
                  </div>
                  <div className="bg-[#040913] p-2 rounded-sm border border-white/5">
                    <div className="text-brand-gray-muted/70 uppercase">Capital</div>
                    <div className="text-white font-semibold mt-0.5 truncate">{track.capital}</div>
                  </div>
                  <div className="bg-[#040913] p-2 rounded-sm border border-white/5">
                    <div className="text-brand-gray-muted/70 uppercase">Timeline</div>
                    <div className="text-brand-gold font-semibold mt-0.5 truncate">{track.timeline}</div>
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
