"use client";

import React from "react";
import { motion } from "framer-motion";

export const Positioning: React.FC = () => {
  return (
    <section
      id="about"
      className="bg-[#F4F6F4] py-24 md:py-32 px-6 md:px-12 relative overflow-hidden border-b border-[#E2E6E3]"
    >
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="flex flex-col items-center">
          {/* Top Ornament: Lines with Darker Golden 8-Pointed Star */}
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="w-16 sm:w-24 h-[1px] bg-[#9E7B38]/50" />
            <svg
              className="w-4 h-4 text-[#9E7B38]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <polygon points="12,1 14.1,6.9 19.8,4.2 17.1,9.9 23,12 17.1,14.1 19.8,19.8 14.1,17.1 12,23 9.9,17.1 4.2,19.8 6.9,14.1 1,12 6.9,9.9 4.2,4.2 9.9,6.9" />
            </svg>
            <div className="w-16 sm:w-24 h-[1px] bg-[#9E7B38]/50" />
          </div>

          {/* Section Subtitle Title: US | GCC */}
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.38em] font-semibold text-[#9E7B38] font-sans mb-8">
            US | GCC
          </span>

          {/* Core Editorial Quote Matching Reference */}
          <blockquote className="font-serif text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] xl:text-[40px] leading-[1.38] md:leading-[1.36] text-[#0A1612] font-normal max-w-4xl tracking-tight mb-10 sm:mb-12">
            “Manara Nexus operates at the intersection of technology, industry
            and capital, helping high-potential technologies and projects
            progress from technical opportunity to commercially viable,
            investment-ready and deployable value propositions.”
          </blockquote>

          {/* Bottom Architectural Mandate Line Matching Reference */}
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[10px] sm:text-[11px] uppercase tracking-[0.24em] sm:tracking-[0.28em] font-semibold text-[#1B2F27]">
            <span>ARCHITECTURAL MANDATE</span>
            <span className="text-[#9E7B38] text-[8px] sm:text-[9px]">•</span>
            <span>DISCRETION</span>
            <span className="text-[#9E7B38] text-[8px] sm:text-[9px]">•</span>
            <span>PRECISION</span>
            <span className="text-[#9E7B38] text-[8px] sm:text-[9px]">•</span>
            <span>LONG-TERM ALIGNMENT</span>
          </div>
        </div>
      </div>
    </section>
  );
};
