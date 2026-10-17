"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Linkedin, Mail } from "lucide-react";

interface Partner {
  name: string;
  role: string;
  image: string;
  bio: string;
}

const partners: Partner[] = [
  {
    name: "Joel Coville",
    role: "Managing Partner",
    image: "https://res.cloudinary.com/g9q4th37/image/upload/v1791140718/6b9d20eb-a0d1-41b0-af40-b36ae79402a5.png",
    bio: "Three decades across investment banking, asset management and private capital markets, with experience in transaction advisory, M&A and capital strategy for large-scale projects. Deep Middle East expertise and networks across UAE and KSA, supporting Economic Vision-led mandates and strategic capital deployment.",
  },
  {
    name: "Madhurima Roy",
    role: "Managing Partner",
    image: "https://res.cloudinary.com/g9q4th37/image/upload/v1791140717/1b89ef48-a45c-406b-8476-879f1c6f3247.png",
    bio: "Techno-commercial strategy experience across deep tech, climate tech, advanced materials, sustainable built environment, next-generation fuels and energy. GCC expertise in venture building, zero to one GTM, commercial de-risking, investor readiness and sustainable finance pathways, including commercial and capital partnerships for large-scale projects.",
  },
];

export const Team: React.FC = () => {
  return (
    <section
      id="team"
      className="bg-[#030A08] text-white py-14 sm:py-18 md:py-24 px-6 md:px-12 relative overflow-hidden border-t border-[#12362C]/60"
    >
      {/* Background Subtle Green Radial Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(18, 72, 56, 0.2) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header with pill badge (Image 1) and description (Image 2) */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/25 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            <span className="text-sm sm:text-[15px] uppercase tracking-[0.28em] font-semibold text-brand-gold font-sans">
              Manara Team
            </span>
          </div>

          <p className="text-[#A0B8B2] text-sm sm:text-base md:text-[16.5px] leading-relaxed font-sans font-light max-w-2xl mx-auto">
            Deep expertise. Established relationships. A team built around the mandate.
          </p>
        </div>

        {/* Two Vertical Subsections: Left = 2 Partners Stacked, Right = Narrative Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {/* Left Subsection: Two Managing Partners stacked vertically */}
          <div className="flex flex-col gap-6 sm:gap-7 justify-between">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-[#061814]/90 bg-gradient-to-br from-[#09241E] via-[#061A15] to-[#04120E] border border-[#143B30] rounded-none overflow-hidden hover:border-brand-gold/60 transition-all duration-300 hover:shadow-2xl hover:shadow-[#02100B]/50 flex flex-col sm:flex-row group flex-1"
              >
                {/* Executive Portrait on Left */}
                <div className="relative w-full sm:w-[175px] md:w-[195px] h-[260px] sm:h-auto shrink-0 bg-[#020A07] border-b sm:border-b-0 sm:border-r border-[#143B30]/60">
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    fill
                    priority
                    className="object-cover object-top filter brightness-[0.98] contrast-[1.03] transition-all duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-transparent via-[#061814]/15 to-[#061814]/65 pointer-events-none" />
                </div>

                {/* Bio & Credentials on Right */}
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10.5px] sm:text-[11px] uppercase tracking-[0.22em] text-brand-gold font-semibold font-mono">
                        {partner.role}
                      </span>
                      <div className="flex items-center gap-2 text-[#7E9A94]">
                        <span className="p-1 rounded-none hover:text-brand-gold transition-colors cursor-pointer" aria-label="LinkedIn">
                          <Linkedin className="w-3.5 h-3.5" />
                        </span>
                        <span className="p-1 rounded-none hover:text-brand-gold transition-colors cursor-pointer" aria-label="Email">
                          <Mail className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>

                    <h3 className="font-serif text-xl sm:text-[23px] text-white font-normal tracking-tight mb-2.5 group-hover:text-brand-gold transition-colors">
                      {partner.name}
                    </h3>

                    <p className="text-[#A0B8B2] text-xs sm:text-[13px] md:text-[13.5px] leading-relaxed font-sans font-light">
                      {partner.bio}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Subsection: Mandate Architecture & Regional Groundwork Narrative (Image 5) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-full"
          >
            <div className="h-full bg-[#061814]/90 bg-gradient-to-br from-[#09241E] via-[#061A15] to-[#04120E] border border-[#143B30] p-6 sm:p-8 md:p-9 relative flex flex-col justify-between hover:border-brand-gold/40 transition-all duration-300 shadow-xl shadow-[#02100B]/50">
              {/* Subtle top gold accent glow */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent pointer-events-none" />

              {/* Three Core Narrative Paragraphs */}
              <div className="space-y-4 sm:space-y-5">
                <p className="text-[#A0B8B2] text-xs sm:text-[13.5px] md:text-[14px] leading-relaxed font-sans font-light">
                  Our approach is grounded in more than advisory frameworks. Across the industries and mandates we serve, our team brings deep sector expertise, experience in deal-making and strategic partnerships, and practical exposure to the commercial and deployment pathways that turn opportunities into outcomes.
                </p>

                <p className="text-[#A0B8B2] text-xs sm:text-[13.5px] md:text-[14px] leading-relaxed font-sans font-light">
                  We recognise that success in the GCC requires more than global expertise or access to capital. It demands an understanding of regional priorities, stakeholder dynamics, industrial ecosystems and the relationships needed to build lasting commercial alignment. Our team brings this regional understanding, supported by extensive ecosystem groundwork across our focus markets.
                </p>

                <p className="text-[#A0B8B2] text-xs sm:text-[13.5px] md:text-[14px] leading-relaxed font-sans font-light">
                  Beyond our two Managing Partners, Manara Nexus works with a network of six function &amp; industry specific subject-matter experts who are embedded according to the needs of each mandate. This flexible model brings the right technical, commercial and sector-specific expertise into each assignment - combining senior-level strategic direction with the specialist knowledge required to advance the opportunity.
                </p>
              </div>

              {/* Concluding Result Box */}
              <div className="mt-6 pt-5 border-t border-[#143B30]/80">
                <div className="bg-[#04130F]/90 border-l-2 border-brand-gold p-4 sm:p-5">
                  <p className="text-[#DFBA73] text-xs sm:text-[13.5px] md:text-[14px] leading-relaxed font-sans font-light">
                    <strong className="text-brand-gold font-semibold not-italic">The result:</strong>{" "}
                    a mandate-led team with the industry understanding, regional context and complementary expertise to help move complex opportunities forward.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
