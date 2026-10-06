"use client";

import React, { useRef, useEffect, useState } from "react";
import { ArrowDown, ArrowRight, ShieldCheck, CheckCircle2, Send } from "lucide-react";

export const HeroSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mandate: "Strategic Capital Formation",
    jurisdiction: "US Corridor",
    note: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.defaultMuted = true;
      video.setAttribute("muted", "");
      video.setAttribute("playsinline", "");
      video.setAttribute("webkit-playsinline", "");
      video.playbackRate = 0.85;

      const attemptPlay = () => {
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            const unlockPlay = () => {
              video.play().catch(() => {});
              window.removeEventListener("scroll", unlockPlay);
              window.removeEventListener("touchstart", unlockPlay);
              window.removeEventListener("click", unlockPlay);
            };
            window.addEventListener("scroll", unlockPlay, { passive: true, once: true });
            window.addEventListener("touchstart", unlockPlay, { passive: true, once: true });
            window.addEventListener("click", unlockPlay, { once: true });
          });
        }
      };

      if (video.readyState >= 2) {
        attemptPlay();
      } else {
        video.addEventListener("loadeddata", attemptPlay, { once: true });
        video.addEventListener("canplay", attemptPlay, { once: true });
      }
    }
  }, []);

  const handleVideoError = () => {
    if (videoRef.current && videoRef.current.src !== "/videos/hero-bg.mp4") {
      videoRef.current.src = "/videos/hero-bg.mp4";
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 md:px-12 select-none bg-[#030A08]"
    >
      {/* 1. Cinematic Background Video with Rich Green-Black Palette */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/images/hero-skyline.jpg"
          onError={handleVideoError}
          src="https://res.cloudinary.com/g9q4th37/video/upload/v1791042169/14629596_3840_2160_60fps.mp4"
          className="w-full h-full object-cover object-center scale-105"
          style={{
            filter: "brightness(0.88) contrast(1.1) hue-rotate(50deg) saturate(0.95)",
          }}
        >
          <source
            src="https://res.cloudinary.com/g9q4th37/video/upload/v1791042169/14629596_3840_2160_60fps.mp4"
            type="video/mp4"
          />
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>

        {/* Primary Rich Forest Green Tint Layer */}
        <div className="absolute inset-0 bg-[#09241C]/30 mix-blend-color pointer-events-none" />

        {/* Balanced Atmospheric Contrast Overlays for Content Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#030C09]/55 via-[#051712]/40 to-[#030C09]/70 pointer-events-none z-[1]" />
        <div
          className="absolute inset-0 pointer-events-none z-[1]"
          style={{
            background:
              "radial-gradient(ellipse 90% 75% at 50% 50%, rgba(4, 16, 12, 0.15) 0%, rgba(3, 10, 8, 0.45) 65%, #020705 100%)",
          }}
        />

        {/* Subtle Atmospheric Top Green Glow */}
        <div
          className="absolute top-0 left-0 right-0 h-36 sm:h-44 pointer-events-none z-[2]"
          style={{
            background:
              "radial-gradient(ellipse 75% 100% at 50% 0%, rgba(24, 120, 92, 0.15) 0%, rgba(15, 75, 58, 0.05) 50%, transparent 80%)",
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#18755A]/12 via-[#0F4E3C]/03 to-transparent pointer-events-none z-[2]" />
      </div>

      {/* 2. Main Hero Content: Left-Aligned Grid Matching Screenshot (Image 1) */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-28 sm:pt-32 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column (Left Aligned Content) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Pill Badge: UNITED STATES ⟷ GCC ECOSYSTEMS */}
            <div className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 rounded-full border border-brand-gold/40 bg-[#061814]/85 backdrop-blur-md mb-7 sm:mb-9 shadow-xl shadow-black/40">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.28em] font-medium text-brand-gold font-sans">
                UNITED STATES
              </span>
              <span className="text-brand-gold/60 text-xs font-light">⟷</span>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.28em] font-medium text-brand-gold font-sans">
                GCC ECOSYSTEMS
              </span>
            </div>

            {/* Sans-Serif Plus Jakarta Headline - Bold */}
            <h1
              style={{
                textShadow: "0 4px 20px rgba(0, 0, 0, 0.95), 0 1px 3px rgba(0, 0, 0, 1)",
              }}
              className="font-jakarta text-3xl sm:text-4xl md:text-[44px] lg:text-[48px] font-bold text-white leading-[1.2] sm:leading-[1.22] tracking-normal mb-7 sm:mb-9"
            >
              Connecting
              <br />
              Innovation <span className="font-medium text-brand-gold text-lg sm:text-xl md:text-2xl">&lt;&gt;</span>
              <br />
              Commercialisation <span className="font-medium text-brand-gold text-lg sm:text-xl md:text-2xl">&lt;&gt;</span>
              <br />
              <span className="font-bold text-[#DFBA73]">Strategic Capital</span>
            </h1>

            {/* Dual Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 font-sans w-full sm:w-auto">
              <a
                href="#mandates"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-brand-gold text-[#040D0A] font-medium text-xs uppercase tracking-[0.2em] rounded-sm hover:bg-brand-gold-light transition-all duration-300 shadow-xl shadow-brand-gold/25"
              >
                <span>EXPLORE MANDATES</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>
              <a
                href="#what-we-do"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 border border-brand-gold/40 bg-[#071C17]/80 backdrop-blur-sm text-[#D5E5E0] font-medium text-xs uppercase tracking-[0.2em] rounded-sm hover:border-brand-gold hover:text-brand-gold transition-all duration-300"
              >
                INSTITUTIONAL MODEL
              </a>
            </div>
          </div>

          {/* Right Column: Quick Strategic Briefing Form */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-2xl border border-[#184437] bg-[#051713]/95 backdrop-blur-xl p-6 sm:p-7 shadow-2xl shadow-black/80">
              {/* Form Top Badge */}
              <div className="flex items-center justify-between pb-3.5 border-b border-[#143B30]/60 mb-5">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
                  <span className="text-[10px] uppercase tracking-[0.22em] font-medium text-brand-gold font-sans">
                    DIRECT ADVISORY DESK
                  </span>
                </div>
              </div>

              {formSubmitted ? (
                <div className="py-10 text-center flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#0D382C] border border-brand-gold/50 flex items-center justify-center text-brand-gold mb-4 shadow-lg shadow-brand-gold/15">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-jakarta text-lg text-white font-medium mb-1.5">
                    Briefing Inquiry Received
                  </h4>
                  <p className="text-xs text-[#8EA29E] leading-relaxed max-w-xs font-sans font-light mb-6">
                    Our Managing Partners will review your brief and follow up directly under strict confidentiality protocol.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        mandate: "Strategic Capital Formation",
                        jurisdiction: "US Corridor",
                        note: "",
                      });
                    }}
                    className="text-[11px] uppercase tracking-[0.18em] text-brand-gold hover:text-white underline font-medium font-sans cursor-pointer"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5 font-sans">
                  <div className="mb-2">
                    <h4 className="font-jakarta text-lg sm:text-[19px] text-white font-normal mb-1">
                      Initiate Strategic Briefing
                    </h4>
                    <p className="text-[11.5px] text-[#86A39E] font-light leading-snug">
                      Confidential partner review for institutional mandates.
                    </p>
                  </div>

                  {/* Name & Title */}
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Name & Executive Title"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#071F19]/90 border border-[#194639] text-xs text-white placeholder-[#608078] rounded px-3.5 py-2.5 focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold/40 transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Institutional Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#071F19]/90 border border-[#194639] text-xs text-white placeholder-[#608078] rounded px-3.5 py-2.5 focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold/40 transition-colors"
                    />
                  </div>

                  {/* Mandate & Jurisdiction (Dual Row) */}
                  <div className="grid grid-cols-2 gap-2.5">
                    <div>
                      <select
                        aria-label="Mandate Focus"
                        value={formData.mandate}
                        onChange={(e) => setFormData({ ...formData, mandate: e.target.value })}
                        className="w-full bg-[#071F19]/90 border border-[#194639] text-[11px] text-[#D2E2DE] rounded px-2.5 py-2.5 focus:border-brand-gold focus:outline-none transition-colors"
                      >
                        <option value="Strategic Capital Formation">Capital Formation</option>
                        <option value="Industrial Commercialisation">Commercialisation</option>
                        <option value="Cross-Border Expansion">Cross-Border Expansion</option>
                        <option value="JV & Deployment">JV & Deployment</option>
                      </select>
                    </div>

                    <div>
                      <select
                        aria-label="Target Geography"
                        value={formData.jurisdiction}
                        onChange={(e) => setFormData({ ...formData, jurisdiction: e.target.value })}
                        className="w-full bg-[#071F19]/90 border border-[#194639] text-[11px] text-[#D2E2DE] rounded px-2.5 py-2.5 focus:border-brand-gold focus:outline-none transition-colors"
                      >
                        <option value="US Corridor">US Corridor</option>
                        <option value="GCC (UAE / KSA)">GCC (UAE / KSA)</option>
                        <option value="Bilateral (US <> GCC)">Bilateral (US &lt;&gt; GCC)</option>
                      </select>
                    </div>
                  </div>

                  {/* Optional Context */}
                  <div>
                    <input
                      type="text"
                      placeholder="Brief mandate context (optional)"
                      value={formData.note}
                      onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                      className="w-full bg-[#071F19]/90 border border-[#194639] text-xs text-white placeholder-[#608078] rounded px-3.5 py-2.5 focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold/40 transition-colors"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full mt-2 py-3 bg-brand-gold hover:bg-brand-gold-light text-[#040D0A] font-medium text-xs uppercase tracking-[0.2em] rounded transition-all duration-300 shadow-xl shadow-brand-gold/20 flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    <span>REQUEST BRIEFING</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </button>

                  {/* Trust Footer */}
                  <div className="pt-2 text-center">
                    <p className="text-[10px] text-[#69857E] font-sans font-light flex items-center justify-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-brand-gold/70" />
                      <span>Strict NDA Protocol &middot; 24h Response</span>
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
