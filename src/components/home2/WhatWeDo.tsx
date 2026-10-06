"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Compass, TrendingUp, Landmark, Briefcase, ArrowRight } from "lucide-react";

interface ServiceItem {
  id: string;
  tag: string;
  titlePrimary: string;
  titleItalic: string;
  description: string;
  icon: React.ElementType;
  image: string;
}

const services: ServiceItem[] = [
  {
    id: "01",
    tag: "01 / ADVISORY",
    titlePrimary: "Strategic",
    titleItalic: "Advisory",
    description:
      "Techno-commercial strategy, market assessment, competitive intelligence, and regulatory positioning for emerging breakthroughs across key transcontinental jurisdictions.",
    icon: Compass,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "02",
    tag: "02 / COMMERCIALISATION",
    titlePrimary: "Industrial",
    titleItalic: "Commercialisation",
    description:
      "Market access, customer engagement, pilot design, early customer acquisition, and institutional validation across primary markets and tier-one corporate conglomerates.",
    icon: TrendingUp,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "03",
    tag: "03 / CAPITAL",
    titlePrimary: "Strategic",
    titleItalic: "Capital",
    description:
      "Investment readiness, capital strategy, institutional syndicate structuring, and sovereign wealth/private equity alignment to fund critical capital-intensive scaling.",
    icon: Landmark,
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "04",
    tag: "04 / DEPLOYMENT",
    titlePrimary: "Project",
    titleItalic: "Deployment",
    description:
      "Mega-project partnerships, EPC structuring, industrial localization, and cross-border government/stakeholder management anchoring operations inside major economic zones.",
    icon: Briefcase,
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1200&auto=format&fit=crop",
  },
];

export const WhatWeDo: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.16,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      id="what-we-do"
      className="bg-[#F8F9FA] py-24 md:py-32 px-6 md:px-12 relative border-t border-neutral-200/80"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header Matching Image 4 */}
        <div className="mb-14 md:mb-16">
          <div className="text-[11px] sm:text-xs uppercase tracking-[0.34em] font-semibold text-[#9E7B38] mb-3 font-sans">
            WHAT WE DO
          </div>
          <h2 className="font-jakarta text-3xl sm:text-4xl md:text-[44px] text-[#0A1612] tracking-tight font-normal leading-[1.2]">
            From opportunity{" "}
            <span className="font-light text-[#9E7B38] text-xl sm:text-2xl md:text-3xl mx-1">
              &lt;&gt;
            </span>{" "}
            to
            <br />
            <span className="text-[#9E7B38]">deployment.</span>
          </h2>
        </div>

        {/* 2x2 Grid Layout with Dark Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-8"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                className="group relative bg-[#07191C] bg-gradient-to-br from-[#092226] via-[#07191C] to-[#051416] p-8 md:p-10 rounded-sm border border-[#143B40] hover:border-brand-gold/60 transition-all duration-500 hover:shadow-2xl hover:shadow-black/60 flex flex-col justify-between overflow-hidden"
              >
                {/* Background image reveal on hover */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                  <Image
                    src={service.image}
                    alt={`${service.titlePrimary} ${service.titleItalic}`}
                    fill
                    className="object-cover object-center opacity-0 group-hover:opacity-20 scale-100 group-hover:scale-105 transition-all duration-700 ease-out filter grayscale brightness-110 contrast-125 mix-blend-luminosity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#051416] via-[#07191C]/80 to-[#092226]/60 transition-opacity duration-500" />
                </div>

                {/* Subtle top gold indicator bar */}
                <div className="absolute top-0 left-0 w-0 h-[2px] bg-brand-gold rounded-none transition-all duration-500 ease-out group-hover:w-full z-20" />

                <div className="relative z-10">
                  {/* Top Tag row: 01 / ADVISORY + Compass icon on right */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.28em] font-medium text-brand-gold">
                      {service.tag}
                    </span>
                    <div className="w-9 h-9 rounded-full border border-brand-gold/30 bg-[#0B2A2F] flex items-center justify-center text-brand-gold group-hover:border-brand-gold group-hover:bg-brand-gold group-hover:text-brand-navy transition-all duration-300">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title in Refined Sans-Serif Plus Jakarta */}
                  <h3 className="font-jakarta text-xl sm:text-[22px] text-brand-gold font-normal mb-3.5 tracking-tight leading-snug">
                    {service.titlePrimary}{" "}
                    <span className="text-[#E5D0A1]">{service.titleItalic}</span>
                  </h3>

                  {/* Description matching Image 3 */}
                  <p className="text-[#9DB3B5] text-sm sm:text-[14.5px] leading-relaxed font-sans font-light">
                    {service.description}
                  </p>
                </div>

                {/* Card Bottom Divider & Arrow */}
                <div className="mt-8 pt-5 border-t border-[#133A3E] flex items-center justify-end relative z-10">
                  <ArrowRight className="w-4 h-4 text-[#7D9A9C] group-hover:text-brand-gold group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
