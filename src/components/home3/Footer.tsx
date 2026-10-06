"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Globe, Shield, ArrowUpRight, CheckCircle2 } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "What We Do", href: "#what-we-do" },
  { label: "Sectors", href: "#sectors" },
  { label: "Mandates", href: "#mandates" },
  { label: "Contact", href: "#contact" },
];

export const Footer: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setModalOpen(false);
    }, 2500);
  };

  return (
    <footer id="contact" className="bg-[#050C17] text-brand-gray-muted relative border-t border-brand-gold/20">
      {/* 1. Initiate Strategic Dialogue Banner Matching Reference Screenshot */}
      <div className="py-24 md:py-28 px-6 md:px-12 text-center relative overflow-hidden bg-gradient-to-b from-[#070F1F] via-[#050C17] to-[#040913]">
        <div className="absolute inset-0 bg-radial-[circle_at_center,rgba(197,160,89,0.06)_0%,transparent_70%] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center text-xs uppercase tracking-[0.3em] font-semibold text-brand-gold mb-4 font-sans">
            <span className="text-brand-gold mr-1 font-normal">[</span>
            <span>STRATEGIC ENGAGEMENT</span>
            <span className="text-brand-gold ml-1 font-normal">]</span>
          </div>

          <h2 className="font-jakarta text-3xl sm:text-4xl md:text-[50px] text-white font-extrabold uppercase tracking-tight mb-5 leading-tight">
            Initiate <span className="text-brand-gold">Strategic Dialogue</span>
          </h2>

          <p className="text-brand-gray-light/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light mb-10 font-sans">
            Engage with our Managing Partners to assess cross-border commercialisation, strategic capital formation, or sovereign project deployment.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 font-sans">
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="w-full sm:w-auto px-8 py-3.5 bg-brand-gold text-brand-navy font-semibold text-xs uppercase tracking-[0.22em] rounded-sm hover:bg-brand-gold-light transition-all duration-300 shadow-xl shadow-brand-gold/20"
            >
              SCHEDULE STRATEGIC BRIEFING
            </button>
            <a
              href="mailto:advisory@manaranexus.com?subject=Institutional%20Overview%20Request"
              className="w-full sm:w-auto px-8 py-3.5 border border-brand-gold/40 bg-[#0A1424]/80 text-brand-gray-light font-semibold text-xs uppercase tracking-[0.22em] rounded-sm hover:border-brand-gold hover:text-brand-gold hover:bg-brand-gold/10 transition-all duration-300"
            >
              REQUEST INSTITUTIONAL OVERVIEW
            </a>
          </div>
        </div>
      </div>

      {/* Briefing Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-[#070F1E] border border-brand-gold/40 p-8 rounded-sm max-w-lg w-full relative shadow-2xl">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-brand-gray-muted hover:text-white text-lg"
            >
              ✕
            </button>
            <h3 className="font-jakarta text-2xl text-white font-bold uppercase tracking-tight mb-2">Schedule Strategic Briefing</h3>
            <p className="text-xs text-brand-gray-muted mb-6">
              Our Managing Partners review all briefs under strict non-disclosure protocol.
            </p>

            {formSubmitted ? (
              <div className="p-6 bg-brand-gold/10 border border-brand-gold/40 text-center rounded-sm">
                <CheckCircle2 className="w-8 h-8 text-brand-gold mx-auto mb-2" />
                <p className="text-white font-semibold text-sm">Briefing Request Received</p>
                <p className="text-xs text-brand-gray-muted mt-1">We will respond within 24 business hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-brand-gray-muted mb-1">Name & Organization</label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Marcus Sterling, Sovereign Capital"
                    className="w-full bg-[#03070E] border border-white/10 rounded-sm px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-brand-gold"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-brand-gray-muted mb-1">Institutional Email</label>
                  <input
                    required
                    type="email"
                    placeholder="m.sterling@institution.com"
                    className="w-full bg-[#03070E] border border-white/10 rounded-sm px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-brand-gold"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-brand-gray-muted mb-1">Target Mandate</label>
                  <select className="w-full bg-[#03070E] border border-white/10 rounded-sm px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-brand-gold">
                    <option>Commercialisation Strategy</option>
                    <option>Market Access & Partnerships</option>
                    <option>Investment Readiness & Strategic Capital</option>
                    <option>Mega Projects & Deployment</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-brand-gold text-brand-navy font-semibold text-xs uppercase tracking-widest rounded-sm hover:bg-brand-gold-light transition-all shadow-md"
                >
                  Submit Confidential Brief
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* 2. Multi-column Footer Layout matching screenshot */}
      <div className="border-t border-white/10 pt-16 pb-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1: Official Logo & Entity */}
          <div className="space-y-4">
            <div className="relative h-24 sm:h-28 md:h-32 w-32 sm:w-36 md:w-40 overflow-hidden rounded-none">
              <Image
                src="https://res.cloudinary.com/g9q4th37/image/upload/v1791141388/Manara_Nexus_logo_draft.jpg"
                alt="Manara Nexus Logo"
                fill
                className="object-contain object-left"
              />
            </div>
            <div className="text-[11px] text-brand-gray-muted/70 font-mono space-y-0.5 pt-2">
              <p>ADGM Reg: #MN-ADV-8942-GCC</p>
              <p>Delaware Entity: 7824190-DE</p>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-white mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-brand-gray-muted hover:text-brand-gold transition-colors inline-flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand-gold/40" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-white mb-5">
              Contact Us
            </h4>
            <div className="space-y-3.5 text-xs text-brand-gray-muted font-light">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-brand-gold shrink-0 mt-0.5" />
                <div className="flex flex-col space-y-1">
                  <span>Abu Dhabi</span>
                  <span>Dubai</span>
                  <span>Riyadh</span>
                  <span>New York</span>
                </div>
              </div>
              <div className="flex items-center gap-2.5 pt-0.5">
                <Mail className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                <a href="mailto:advisory@manaranexus.com" className="hover:text-brand-gold transition-colors">
                  advisory@manaranexus.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Globe className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                <span>www.manaranexus.com</span>
              </div>
            </div>
          </div>

          {/* Column 4: Compliance & Legal */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-white mb-5">
              Governance &amp; Legal
            </h4>
            <p className="text-[11px] leading-relaxed text-brand-gray-muted/70 font-light mb-3">
              Manara Nexus provides corporate strategic advisory and techno-commercial management consultancy. We do not provide public brokerage services or regulated deposit-taking facilities.
            </p>
            <div className="flex flex-col space-y-1 text-[11px] text-brand-gray-muted">
              <a href="#compliance" className="hover:text-brand-gold transition-colors">
                Terms of Engagement
              </a>
              <a href="#compliance" className="hover:text-brand-gold transition-colors">
                Confidentiality Protocols
              </a>
              <a href="#compliance" className="hover:text-brand-gold transition-colors">
                Regulatory Disclaimers
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] text-brand-gray-muted/60">
          <p>© {new Date().getFullYear()} Manara Nexus Strategic Advisory LLC. All rights reserved.</p>
          <p className="mt-2 sm:mt-0 font-mono text-[10px]">NEW YORK &middot; ABU DHABI &middot; RIYADH</p>
        </div>
      </div>
    </footer>
  );
};
