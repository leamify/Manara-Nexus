"use client";

import React from "react";

export const Positioning: React.FC = () => {
  return (
    <section
      id="about"
      className="bg-[#F4F6F4] py-20 md:py-28 px-6 md:px-12 relative overflow-hidden border-b border-[#E2E6E3]"
    >
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="flex flex-col items-center">
          {/* Top Ornament: Lines with Golden 8-Pointed Star Matching Image 1 */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 sm:w-24 h-[1px] bg-[#9E7B38]/60" />
            <svg
              className="w-4 h-4 text-[#9E7B38]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <polygon points="12,1 14.1,6.9 19.8,4.2 17.1,9.9 23,12 17.1,14.1 19.8,19.8 14.1,17.1 12,23 9.9,17.1 4.2,19.8 6.9,14.1 1,12 6.9,9.9 4.2,4.2 9.9,6.9" />
            </svg>
            <div className="w-16 sm:w-24 h-[1px] bg-[#9E7B38]/60" />
          </div>

          {/* Section Subtitle Title: US | GCC Matching Image 1 */}
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.38em] font-semibold text-[#9E7B38] font-sans mb-8">
            US | GCC
          </span>

          {/* Core Editorial Quote in Sans-Serif Plus Jakarta - Refined Light Aesthetic */}
          <blockquote className="font-jakarta text-xl sm:text-2xl md:text-[27px] lg:text-[30px] leading-[1.45] text-[#0A1612] font-light max-w-3xl tracking-normal mb-8 sm:mb-9">
            “Manara Nexus operates at the intersection of{" "}
            <span className="font-medium text-[#9E7B38]">
              technology, industry and capital
            </span>
            , helping high-potential technologies and projects progress from
            technical opportunity to commercially viable, investment-ready and
            deployable value propositions.”
          </blockquote>

          {/* Architectural Mandate Line */}
          <div className="flex flex-wrap items-center justify-center gap-x-2.5 sm:gap-x-3 gap-y-1.5 text-[9.5px] sm:text-[10.5px] uppercase tracking-[0.26em] sm:tracking-[0.3em] font-medium text-[#2C3E37] font-sans">
            <span>ARCHITECTURAL MANDATE</span>
            <span className="text-[#9E7B38] text-[8px]">·</span>
            <span>DISCRETION</span>
            <span className="text-[#9E7B38] text-[8px]">·</span>
            <span>PRECISION</span>
            <span className="text-[#9E7B38] text-[8px]">·</span>
            <span>LONG-TERM ALIGNMENT</span>
          </div>
        </div>
      </div>
    </section>
  );
};
