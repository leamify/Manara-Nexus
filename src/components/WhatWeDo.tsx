"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Compass, TrendingUp, Landmark, Briefcase, ArrowRight } from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  image: string;
}

const services: ServiceItem[] = [
  {
    id: "01",
    title: "Strategic Advisory",
    description:
      "Techno-commercial strategy, market assessment, competitive intelligence, and regulatory positioning for emerging breakthroughs across key transcontinental jurisdictions.",
    icon: Compass,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "02",
    title: "Commercialisation",
    description:
      "Market access, customer engagement, pilot design, early customer acquisition, and institutional validation across primary markets and tier-one corporate conglomerates.",
    icon: TrendingUp,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "03",
    title: "Strategic Capital",
    description:
      "Investment readiness, capital strategy, institutional syndicate structuring, and sovereign wealth/private equity alignment to fund critical capital-intensive scaling.",
    icon: Landmark,
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "04",
    title: "Project Deployment",
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
    <section id="what-we-do" className="bg-[#F6F7F9] py-24 md:py-32 px-6 md:px-12 relative border-t border-neutral-200/60">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-14 md:mb-16">
          <div className="text-xs uppercase tracking-[0.3em] font-semibold text-brand-gold mb-3">
            WHAT WE DO
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-navy tracking-tight font-normal">
            From opportunity to deployment.
          </h2>
        </div>

        {/* 2x2 Grid Layout with Dark Green-Blue Luxury Cards */}
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
                className="group relative bg-[#091F22] bg-gradient-to-br from-[#0C272B] via-[#091F22] to-[#07171A] p-8 md:p-10 rounded-none border border-[#163B40] hover:border-brand-gold/60 transition-all duration-500 hover:shadow-2xl hover:shadow-[#06181B]/50 flex flex-col justify-between overflow-hidden"
              >
                {/* Background image that is revealed slightly on hover */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover object-center opacity-0 group-hover:opacity-20 scale-100 group-hover:scale-105 transition-all duration-700 ease-out filter grayscale brightness-110 contrast-125 mix-blend-luminosity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07171A] via-[#091F22]/75 to-[#0C272B]/60 transition-opacity duration-500" />
                </div>

                {/* Subtle top indicator bar */}
                <div className="absolute top-0 left-0 w-0 h-[2px] bg-brand-gold rounded-none transition-all duration-500 ease-out group-hover:w-full z-20" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-7">
                    <span className="font-serif text-3xl font-normal text-brand-gold/90 tracking-wider">
                      {service.id}
                    </span>
                    <div className="w-9 h-9 rounded-full border border-brand-gold/30 bg-[#0F3136] flex items-center justify-center text-brand-gold group-hover:border-brand-gold group-hover:bg-brand-gold group-hover:text-brand-navy transition-all duration-300">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Golden Colored Title */}
                  <h3 className="font-serif text-2xl md:text-3xl text-brand-gold font-normal mb-4 tracking-tight">
                    {service.title}
                  </h3>

                  <p className="text-[#9DB3B5] text-sm sm:text-[14.5px] leading-relaxed font-sans font-light">
                    {service.description}
                  </p>
                </div>

                {/* Card Footer: Arrow only, bottom texts completely removed */}
                <div className="mt-8 pt-5 border-t border-[#173D42] flex items-center justify-end relative z-10">
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
