"use client";

import React from "react";

export const Positioning: React.FC = () => {
  return (
    <section
      id="positioning"
      className="bg-[#F4F6F4] py-14 sm:py-18 md:py-24 px-6 md:px-12 relative overflow-hidden border-b border-[#E2E6E3]"
    >
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="flex flex-col items-center">
          {/* Section Header */}
          <h2 className="text-xs sm:text-[13px] md:text-sm uppercase tracking-[0.24em] font-semibold text-[#9E7B38] font-sans mb-5 sm:mb-6 text-center max-w-3xl">
            Connecting global innovation with regional opportunity
          </h2>

          {/* Ornament: Lines with Darker Golden 8-Pointed Star */}
          <div className="flex items-center justify-center gap-4 mb-7 sm:mb-8">
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

          {/* Core Editorial Text: Without quotation marks */}
          <p className="font-serif text-lg sm:text-xl md:text-[23px] lg:text-[26px] leading-[1.48] text-[#0A1612] font-normal max-w-5xl tracking-tight">
            Manara Nexus operates at the intersection of technology, industry and capital,
            <br className="hidden md:inline" />{" "}
            helping high-potential technologies and projects progress from technical opportunity
            <br className="hidden md:inline" />{" "}
            to commercially viable, investment-ready and deployable value propositions.
          </p>
        </div>
      </div>
    </section>
  );
};
