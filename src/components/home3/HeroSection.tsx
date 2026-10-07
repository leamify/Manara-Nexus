"use client";

import React, { useRef, useEffect } from "react";
import { ArrowDown } from "lucide-react";

export const HeroSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const videoUrl =
    "https://res.cloudinary.com/g9q4th37/video/upload/v1791393378/gemini_generated_video_45d799fd.mp4";

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
    if (videoRef.current && videoRef.current.src !== "/videos/home3-hero.mp4") {
      videoRef.current.src = "/videos/home3-hero.mp4";
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030A08] px-6 sm:px-10 lg:px-16 pt-24 pb-16">
      {/* 1. Cinematic Background Video with Rich Green-Black Atmospheric Palette */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/images/slider-skyline.jpg"
          onError={handleVideoError}
          src={videoUrl}
          className="w-full h-full object-cover object-center scale-105"
          style={{
            filter: "brightness(1.02) contrast(1.05)",
          }}
        >
          <source src={videoUrl} type="video/mp4" />
          <source src="/videos/home3-hero.mp4" type="video/mp4" />
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>

        {/* Subtle Brand Emerald Atmospheric Tint */}
        <div className="absolute inset-0 bg-[#09241C]/15 pointer-events-none" />

        {/* Light Cinematic Gradients for Natural Brightness & Architectural Legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#030C09]/45 via-transparent to-[#030C09]/60 pointer-events-none z-[1]" />

        {/* Subtle Atmospheric Top Green Glow */}
        <div
          className="absolute top-0 left-0 right-0 h-32 sm:h-40 pointer-events-none z-[2]"
          style={{
            background:
              "radial-gradient(ellipse 75% 100% at 50% 0%, rgba(24, 120, 92, 0.12) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* 2. Main Hero Content Matching Architectural Screenshot */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-16 sm:pt-20 pb-8">
        <div className="max-w-5xl flex flex-col items-start text-left">
          {/* Trans-Regional Corridor Sub-Label Above Title */}
          <div className="flex items-center gap-3 text-xs sm:text-[13px] uppercase tracking-[0.24em] text-brand-gold font-sans font-semibold mb-6 sm:mb-8">
            <span className="w-8 h-[1px] bg-brand-gold/70" />
            <span>US ⇄ GCC TRANS-REGIONAL CORRIDOR</span>
          </div>

          {/* Architectural Bold All-Caps Headline with Golden Brackets */}
          <h1
            style={{
              textShadow: "0 4px 24px rgba(0, 0, 0, 0.95), 0 1px 4px rgba(0, 0, 1)",
            }}
            className="font-jakarta font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-[70px] xl:text-[76px] tracking-tight text-white leading-[1.04] uppercase mb-8 sm:mb-10"
          >
            <span className="text-brand-gold font-normal mr-2">[</span>
            CONNECTING
            <br />
            INNOVATION
            <br />
            COMMERCIALISATION
            <br />
            <span className="text-[#DFBA73]">STRATEGIC CAPITAL</span>
            <span className="text-brand-gold font-normal ml-2">]</span>
          </h1>

          {/* Dual Action Buttons Matching Architectural Concept */}
          <div className="flex flex-wrap items-center gap-4 font-sans w-full sm:w-auto">
            <a
              href="#mandates"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-brand-gold text-[#040D0A] font-bold text-xs uppercase tracking-[0.2em] rounded-none hover:bg-brand-gold-light transition-all duration-300 shadow-xl shadow-brand-gold/25"
            >
              <span>[ EXPLORE MANDATES ↓ ]</span>
            </a>
            <a
              href="#what-we-do"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 border border-[#184437] bg-[#071F19]/80 backdrop-blur-sm text-[#D5E5E0] font-bold text-xs uppercase tracking-[0.2em] rounded-none hover:border-brand-gold hover:text-brand-gold transition-all duration-300"
            >
              <span>[ MANDATE PRACTICE ]</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
