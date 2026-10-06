"use client";

import React from "react";

export const Positioning: React.FC = () => {
  return (
    <section
      id="about"
      className="bg-[#F8F9F8] py-20 md:py-28 px-6 md:px-12 relative overflow-hidden border-b border-[#E2E6E3]"
    >
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="flex flex-col items-center">
          {/* Main Statement with Golden Brackets Matching Image 2 */}
          <blockquote className="font-jakarta font-bold text-lg sm:text-2xl md:text-[26px] lg:text-[30px] leading-[1.38] sm:leading-[1.42] text-[#0A1612] uppercase tracking-[0.02em] max-w-4xl">
            <span className="text-[#9E7B38] font-normal mr-2">[</span>
            MANARA NEXUS OPERATES AT THE INTERSECTION OF TECHNOLOGY, INDUSTRY AND CAPITAL, HELPING HIGH-POTENTIAL TECHNOLOGIES PROGRESS FROM TECHNICAL OPPORTUNITY TO COMMERCIALLY VIABLE, INVESTMENT-READY PROPOSITIONS.
            <span className="text-[#9E7B38] font-normal ml-2">]</span>
          </blockquote>

          {/* Thin Divider Line Matching Image 2 */}
          <div className="w-full max-w-3xl h-[1px] bg-[#E0E5E2] mt-10 sm:mt-12 mb-5 sm:mb-6" />

          {/* Architectural Mandate Line with Vertical Pipes Matching Image 2 */}
          <div className="flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-4 gap-y-1.5 text-[9.5px] sm:text-[11px] uppercase tracking-[0.25em] font-medium text-[#50665E] font-sans">
            <span>ARCHITECTURAL MANDATE</span>
            <span className="text-[#9E7B38]/60 font-light">|</span>
            <span>DISCRETION</span>
            <span className="text-[#9E7B38]/60 font-light">|</span>
            <span>PRECISION</span>
            <span className="text-[#9E7B38]/60 font-light">|</span>
            <span>LONG-TERM ALIGNMENT</span>
          </div>
        </div>
      </div>
    </section>
  );
};
