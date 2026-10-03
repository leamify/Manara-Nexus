"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, TrendingUp, Landmark, Layers, ArrowUpRight } from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

const services: ServiceItem[] = [
  {
    id: "01",
    title: "Strategic Advisory",
    description:
      "Techno-commercial strategy, market assessment, opportunity development and strategic decision support.",
    icon: Briefcase,
  },
  {
    id: "02",
    title: "Commercialisation",
    description:
      "Market access, customer engagement, strategic partnerships and pathways to commercial adoption.",
    icon: TrendingUp,
  },
  {
    id: "03",
    title: "Strategic Capital",
    description:
      "Investment readiness, capital strategy, investor engagement, transactions and M&A strategy.",
    icon: Landmark,
  },
  {
    id: "04",
    title: "Project Deployment",
    description:
      "Mega-project partnerships, stakeholder management and support in moving opportunities towards execution.",
    icon: Layers,
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
            CAPABILITIES & DEPLOYMENT
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-navy tracking-tight font-normal">
            From opportunity to deployment.
          </h2>
        </div>

        {/* 2x2 Grid Layout with Dark Luxury Cards */}
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
                className="group relative bg-[#070F1E] p-8 md:p-11 rounded-sm border border-white/10 hover:border-brand-gold/70 transition-all duration-300 hover:shadow-2xl hover:shadow-black/30 flex flex-col justify-between"
              >
                {/* Subtle top indicator bar */}
                <div className="absolute top-0 left-0 w-0 h-[2px] bg-brand-gold transition-all duration-500 ease-out group-hover:w-full" />

                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-serif text-3xl font-normal text-brand-gold tracking-wider">
                      {service.id}
                    </span>
                    <div className="w-10 h-10 rounded-sm border border-brand-gold/30 bg-[#0E1B31] flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-navy transition-all duration-300">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl md:text-3xl text-white font-normal mb-4 tracking-tight group-hover:text-brand-gold transition-colors duration-200">
                    {service.title}
                  </h3>

                  <p className="text-brand-gray-muted text-sm sm:text-base leading-relaxed font-sans font-light">
                    {service.description}
                  </p>
                </div>

                <div className="mt-10 pt-6 border-t border-white/10 flex items-center justify-between text-xs tracking-widest uppercase font-semibold text-brand-gray-muted/80 group-hover:text-brand-gold transition-colors">
                  <span>Advisory Pillar {service.id}</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
