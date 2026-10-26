"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Globe, Shield, ArrowUpRight, CheckCircle2 } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "What We Do", href: "#what-we-do" },
  { label: "Sectors", href: "#sectors" },
  { label: "About", href: "#team" },
  { label: "Mandates", href: "#mandates" },
  { label: "Contact", href: "#contact" },
];

export const Footer: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Form states
  const [nameTitle, setNameTitle] = useState("");
  const [email, setEmail] = useState("");
  const [orgName, setOrgName] = useState("");
  const [link, setLink] = useState("");
  const [summary, setSummary] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);

  // Domain validation logic
  const checkDomain = (val: string) => {
    if (!val || !val.includes("@")) return { valid: false, message: "" };
    const parts = val.split("@");
    if (parts.length !== 2) return { valid: false, message: "Invalid email format" };
    const domain = parts[1].trim();
    if (!domain) return { valid: false, message: "Missing domain" };
    const domainRegex = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!domainRegex.test(domain) || domain.startsWith(".") || domain.endsWith(".")) {
      return { valid: false, message: "Enter a valid domain (e.g. company.com)" };
    }
    return { valid: true, message: `Valid domain: ${domain}` };
  };

  const domainStatus = checkDomain(email);

  // Word count logic
  const wordCount = summary.trim() ? (summary.trim().match(/\S+/g) || []).length : 0;
  const isWordLimitExceeded = wordCount > 250;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!domainStatus.valid) {
      setEmailTouched(true);
      return;
    }
    if (isWordLimitExceeded) return;

    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setModalOpen(false);
      setNameTitle("");
      setEmail("");
      setOrgName("");
      setLink("");
      setSummary("");
      setEmailTouched(false);
    }, 2500);
  };

  return (
    <footer id="contact" className="bg-[#030D0A] text-[#86A39E] relative border-t border-[#164335]">
      {/* 1. Contact Us Section */}
      <div className="py-16 sm:py-20 md:py-24 px-6 md:px-12 text-center relative bg-[#092F26]">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-xs sm:text-[13px] uppercase tracking-[0.3em] font-semibold text-brand-gold mb-3 sm:mb-4 font-sans">
            CONTACT US
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-white font-normal tracking-tight mb-6 sm:mb-8 leading-[1.3] max-w-4xl mx-auto">
            Have an opportunity that needs the right combination of technology, industry and capital?
          </h2>

          <div className="space-y-4 sm:space-y-5 text-[#C2D8D2] text-sm sm:text-base leading-relaxed font-sans font-light max-w-3xl mx-auto mb-8 sm:mb-10 text-center sm:text-left bg-[#061F19]/60 p-6 sm:p-8 border border-[#143B30] rounded-none shadow-xl shadow-black/20">
            <p>
              Perhaps you’re bringing an international technology to the GCC, looking to identify the right industrial partners, assessing opportunities within the region’s evolving ecosystems, or working to advance a project that needs a clearer commercial pathway and aligned strategic capital.
            </p>
            <p>
              At Manara Nexus, we look at opportunities through the intersection of innovation, commercialisation and capital. We’re interested in understanding the business case, the challenges you’re navigating and what it will take to move the opportunity forward.
            </p>
            <p>
              Tell us what you’re working on. Share a brief overview of your opportunity, the market you’re targeting and the challenge you’re looking to solve. Our team will review your submission and reach out by email if there’s a potential fit, with details to arrange an initial conversation.
            </p>
          </div>

          <div className="flex justify-center">
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="w-full sm:w-auto px-9 py-4 bg-brand-gold text-[#04120E] font-semibold text-xs uppercase tracking-[0.22em] rounded-sm hover:bg-brand-gold-light transition-all duration-300 shadow-xl shadow-brand-gold/25"
            >
              REQUEST AN INTRO CALL
            </button>
          </div>
        </div>
      </div>

      {/* Intro Call Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-[#07241C] border border-brand-gold/40 p-6 sm:p-8 rounded-sm max-w-xl w-full relative shadow-2xl max-h-[92vh] overflow-y-auto">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-[#86A39E] hover:text-white text-lg p-1"
              aria-label="Close modal"
            >
              ✕
            </button>
            <h3 className="font-serif text-2xl text-white font-normal mb-1">Request Intro Call</h3>
            <p className="text-xs text-[#86A39E] mb-5">
              Share details below and our team will review and respond to schedule an intro call.
            </p>

            {formSubmitted ? (
              <div className="p-8 bg-brand-gold/10 border border-brand-gold/40 text-center rounded-sm">
                <CheckCircle2 className="w-10 h-10 text-brand-gold mx-auto mb-3" />
                <p className="text-white font-semibold text-base">Request Received</p>
                <p className="text-xs text-[#A0B8B2] mt-1.5">
                  Thank you. Our team will review your submission and reach out by email with details to arrange an initial conversation.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-left font-sans">
                {/* 1. Name, Title */}
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-brand-gold font-medium mb-1">
                    Name, Title <span className="text-brand-gold">*</span>
                  </label>
                  <input
                    required
                    type="text"
                    value={nameTitle}
                    onChange={(e) => setNameTitle(e.target.value)}
                    placeholder="e.g. Marcus Sterling, Managing Director"
                    className="w-full bg-[#041410] border border-[#143B30] rounded-sm px-3.5 py-2.5 text-xs text-white placeholder:text-neutral-500 focus:outline-none focus:border-brand-gold transition-colors"
                  />
                </div>

                {/* 2. Email with Auto-check for Domain */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-[11px] uppercase tracking-wider text-brand-gold font-medium">
                      Email <span className="text-brand-gold">*</span>
                    </label>
                    {email && (
                      <span
                        className={`text-[10px] ${
                          domainStatus.valid ? "text-emerald-400 font-medium" : "text-amber-400"
                        }`}
                      >
                        {domainStatus.message}
                      </span>
                    )}
                  </div>
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setEmailTouched(true);
                    }}
                    onBlur={() => setEmailTouched(true)}
                    placeholder="e.g. name@company.com"
                    className={`w-full bg-[#041410] border ${
                      emailTouched && email && !domainStatus.valid
                        ? "border-amber-500/80 focus:border-amber-400"
                        : "border-[#143B30] focus:border-brand-gold"
                    } rounded-sm px-3.5 py-2.5 text-xs text-white placeholder:text-neutral-500 focus:outline-none transition-colors`}
                  />
                  {emailTouched && email && !domainStatus.valid && (
                    <p className="text-[10px] text-amber-400 mt-1">
                      Please enter an email with a valid domain (e.g. user@domain.com)
                    </p>
                  )}
                </div>

                {/* 3. Organisation Name */}
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-brand-gold font-medium mb-1">
                    Organisation Name <span className="text-brand-gold">*</span>
                  </label>
                  <input
                    required
                    type="text"
                    value={orgName}
                    onChange={(e) => setOrgName(e.target.value)}
                    placeholder="e.g. Sovereign Capital / Tech Ventures Corp"
                    className="w-full bg-[#041410] border border-[#143B30] rounded-sm px-3.5 py-2.5 text-xs text-white placeholder:text-neutral-500 focus:outline-none focus:border-brand-gold transition-colors"
                  />
                </div>

                {/* 4. LinkedIn / Website Link */}
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-brand-gold font-medium mb-1">
                    Linkedin / Website Link
                  </label>
                  <input
                    type="text"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    placeholder="e.g. linkedin.com/in/... or company.com"
                    className="w-full bg-[#041410] border border-[#143B30] rounded-sm px-3.5 py-2.5 text-xs text-white placeholder:text-neutral-500 focus:outline-none focus:border-brand-gold transition-colors"
                  />
                </div>

                {/* 5. Summary of Request (limit to 250 words) */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-[11px] uppercase tracking-wider text-brand-gold font-medium">
                      Summary of Your Request <span className="text-brand-gold">*</span>
                    </label>
                    <span
                      className={`text-[10.5px] font-mono ${
                        isWordLimitExceeded ? "text-red-400 font-semibold" : "text-[#7E9A94]"
                      }`}
                    >
                      {wordCount} / 250 words
                    </span>
                  </div>
                  <textarea
                    required
                    rows={4}
                    value={summary}
                    onChange={(e) => setSummary(e.target.value)}
                    placeholder="Share a brief overview of your opportunity, the market you’re targeting and the challenge you’re looking to solve..."
                    className={`w-full bg-[#041410] border ${
                      isWordLimitExceeded ? "border-red-500/80" : "border-[#143B30] focus:border-brand-gold"
                    } rounded-sm px-3.5 py-2.5 text-xs text-white placeholder:text-neutral-500 focus:outline-none resize-none transition-colors leading-relaxed`}
                  />
                  {isWordLimitExceeded && (
                    <p className="text-[10px] text-red-400 mt-0.5">
                      Please limit your summary to 250 words (currently {wordCount} words).
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isWordLimitExceeded}
                  className="w-full py-3.5 bg-brand-gold text-[#04120E] font-semibold text-xs uppercase tracking-[0.22em] rounded-sm hover:bg-brand-gold-light transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed mt-2"
                >
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* 2. Multi-column Footer Layout matching screenshot */}
      <div className="border-t border-[#133A2E] bg-[#030E0B] pt-16 pb-12 px-6 md:px-12">
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
                  <span>UAE</span>
                  <span>United States</span>
                  <span>India</span>
                </div>
              </div>
              <div className="flex items-center gap-2.5 pt-0.5">
                <Mail className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                <a href="mailto:contact@manaranexus.com" className="hover:text-brand-gold transition-colors">
                  contact@manaranexus.com
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
