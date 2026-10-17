"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Compass, TrendingUp, Landmark, Briefcase } from "lucide-react";

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
      "Techno-commercial strategy, market assessment, competitive positioning and opportunity evaluation to support informed decisions.",
    icon: Compass,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "02",
    title: "Commercialisation",
    description:
      "Market entry, customer and offtake engagement, strategic partnerships and go-to-market pathways that help translate technology into commercial opportunity.",
    icon: TrendingUp,
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "03",
    title: "Strategic Capital",
    description:
      "Investment readiness, capital strategy, investor positioning and transaction support aligned with the commercial realities of the opportunity.",
    icon: Landmark,
    image: "https://images.unsplash.com/photo-1444723121867-7a241cacace9?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "04",
    title: "Project Development & Deployment",
    description:
      "Strategic partnerships, stakeholder engagement, localisation pathways and commercial coordination for complex industrial and infrastructure opportunities.",
    icon: Briefcase,
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1200&auto=format&fit=crop",
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
    <section id="what-we-do" className="bg-[#F6F7F9] py-14 sm:py-18 md:py-24 px-6 md:px-12 relative border-t border-neutral-200/60">
      <div className="max-w-7xl mx-auto">
        {/* Section Header: balanced typography hierarchy */}
        <div className="mb-10 sm:mb-12">
          <div className="text-sm sm:text-[15px] uppercase tracking-[0.28em] font-semibold text-[#9E7B38] mb-3 font-sans">
            WHAT WE DO
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] text-[#0A1612] tracking-tight font-normal leading-[1.24]">
            From opportunity to deployment.
          </h2>
        </div>

        {/* 2x2 Grid Layout with Dark Green-Blue Luxury Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                className="group relative bg-[#091F22] bg-gradient-to-br from-[#0C272B] via-[#091F22] to-[#07171A] p-7 sm:p-8 md:p-9 rounded-none border border-[#163B40] hover:border-brand-gold/60 transition-all duration-500 hover:shadow-2xl hover:shadow-[#06181B]/50 overflow-hidden"
              >
                {/* Background image clearly revealed on hover */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover object-center opacity-0 group-hover:opacity-40 scale-100 group-hover:scale-105 transition-all duration-700 ease-out filter brightness-115 contrast-125"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07171A]/95 via-[#091F22]/75 to-[#0C272B]/55 transition-opacity duration-500 group-hover:opacity-80" />
                </div>

                {/* Subtle top indicator bar */}
                <div className="absolute top-0 left-0 w-0 h-[2px] bg-brand-gold rounded-none transition-all duration-500 ease-out group-hover:w-full z-20" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-4 mb-3.5 sm:mb-4">
                    {/* Golden Colored Title */}
                    <h3 className="font-serif text-xl sm:text-2xl md:text-[25px] text-brand-gold font-normal tracking-tight leading-snug">
                      {service.title}
                    </h3>
                    <div className="w-9 h-9 rounded-full border border-brand-gold/30 bg-[#0F3136] flex-shrink-0 flex items-center justify-center text-brand-gold group-hover:border-brand-gold group-hover:bg-brand-gold group-hover:text-brand-navy transition-all duration-300">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <p className="text-[#A4BABB] text-sm sm:text-[14.5px] leading-relaxed font-sans font-light">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
