"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, ArrowUpRight, Calendar, ArrowRight } from "lucide-react";

interface InsightArticle {
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
}

const articles: InsightArticle[] = [
  {
    category: "Strategic Corridor",
    title: "Bilateral Technology Transfer: Structuring US Innovations for GCC Sovereign Integration",
    date: "Q3 2026",
    readTime: "6 min read",
    summary:
      "A strategic assessment of how deep-tech ventures can establish dual-headquarter operating models across the Gulf to access patient capital and national anchor projects.",
  },
  {
    category: "Industrial Decarbonisation",
    title: "Capitalizing Heavy Abatement: Techno-Commercial Hurdles in Green Hydrogen Adoption",
    date: "Q2 2026",
    readTime: "8 min read",
    summary:
      "De-risking front-end commercial adoption and long-term offtake structuring for emerging industrial decarbonisation technologies.",
  },
  {
    category: "Strategic Capital",
    title: "From Seed to Sovereign Mandates: Bridging the Valley of Death for Advanced Materials",
    date: "Q1 2026",
    readTime: "5 min read",
    summary:
      "Frameworks for aligning technical readiness levels (TRL) with commercialisation roadmaps to attract institutional co-investors.",
  },
];

export const Insights: React.FC = () => {
  return (
    <section id="insights" className="bg-[#F8F9FA] py-24 md:py-32 px-6 md:px-12 relative border-t border-neutral-200/70">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-neutral-200 pb-8">
          <div>
            <div className="inline-flex items-center text-xs uppercase tracking-[0.3em] font-semibold text-brand-gold mb-3 font-sans">
              <span className="text-brand-gold mr-1 font-normal">[</span>
              <span>PERSPECTIVE &amp; ANALYSIS</span>
              <span className="text-brand-gold ml-1 font-normal">]</span>
            </div>
            <h2 className="font-jakarta text-3xl sm:text-4xl md:text-5xl text-brand-navy font-extrabold uppercase tracking-tight">
              Strategic Insights
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm text-neutral-500 max-w-md font-sans">
            Executive intelligence examining cross-border capital flows, technology deployment, and sovereign economic transformations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((item, idx) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className="bg-white p-8 rounded-sm border border-neutral-200 hover:border-brand-gold/70 transition-all duration-300 hover:shadow-xl hover:shadow-brand-navy/5 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-neutral-400 mb-4 font-mono">
                  <span className="text-brand-gold font-semibold tracking-wider uppercase">
                    {item.category}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3 h-3 text-neutral-400" />
                    <span>{item.date}</span>
                  </div>
                </div>

                <h3 className="font-jakarta text-lg text-brand-navy font-bold uppercase mb-3 leading-snug group-hover:text-brand-gold transition-colors tracking-tight">
                  {item.title}
                </h3>

                <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                  {item.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-brand-navy group-hover:text-brand-gold transition-colors">
                <span>Executive Briefing</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
