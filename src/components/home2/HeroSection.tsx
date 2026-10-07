"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  ArrowDown,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
} from "lucide-react";

interface SlideData {
  id: number;
  image: string;
  alt: string;
}

const SLIDES: SlideData[] = [
  {
    id: 1,
    image: "/images/slider-skyline.jpg",
    alt: "Distant twilight metropolis skyline overlooking calm waters",
  },
  {
    id: 2,
    image: "/images/slider-corporate.jpg",
    alt: "Architectural financial district glass skyscrapers illuminated against the sky",
  },
  {
    id: 3,
    image: "/images/slider-innovation.jpg",
    alt: "Iconic Dubai and Gulf financial district skyline and infrastructure at sunset",
  },
];

export const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slideDuration = 6500; // 6.5s per slide

  // Autoplay timer
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, slideDuration);

    return () => clearInterval(timer);
  }, [isPaused, currentSlide]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  return (
    <section
      id="home"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 sm:px-10 md:px-16 lg:px-20 select-none bg-[#030A08]"
    >
      {/* 1. Cinematic Background Image Slider / Carousel */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {SLIDES.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-[1]" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <div
                className={`relative w-full h-full transition-transform duration-[7000ms] ease-out ${
                  isActive ? "scale-105" : "scale-100"
                }`}
              >
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  className="object-cover object-center"
                  sizes="100vw"
                />
              </div>

              {/* Left-focused gradient for text legibility while letting the imagery shine vividly */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#030C09]/70 via-[#030C09]/35 to-black/15 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-b from-[#030C09]/35 via-transparent to-[#030C09]/50 pointer-events-none" />
            </div>
          );
        })}

        {/* Subtle Atmospheric Top Green Glow */}
        <div
          className="absolute top-0 left-0 right-0 h-32 sm:h-40 pointer-events-none z-[2]"
          style={{
            background:
              "radial-gradient(ellipse 75% 100% at 50% 0%, rgba(24, 120, 92, 0.12) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* 2. Main Hero Content: Clean, Expansive Editorial Layout */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-32 sm:pt-36 pb-28 sm:pb-32">
        <div className="max-w-4xl flex flex-col items-start text-left">
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

          {/* Sans-Serif Plus Jakarta Headline - Bold Editorial Typography */}
          <h1
            style={{
              textShadow: "0 4px 24px rgba(0, 0, 0, 0.95), 0 1px 3px rgba(0, 0, 1)",
            }}
            className="font-jakarta text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold text-white leading-[1.14] sm:leading-[1.16] tracking-tight mb-8 sm:mb-10"
          >
            Connecting
            <br />
            Innovation <span className="font-medium text-brand-gold text-2xl sm:text-3xl md:text-4xl">&lt;&gt;</span>
            <br />
            Commercialisation <span className="font-medium text-brand-gold text-2xl sm:text-3xl md:text-4xl">&lt;&gt;</span>
            <br />
            <span className="font-bold text-[#DFBA73]">Strategic Capital</span>
          </h1>

          {/* Dual Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 font-sans w-full sm:w-auto">
            <a
              href="#mandates"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-brand-gold text-[#040D0A] font-semibold text-xs uppercase tracking-[0.22em] rounded-sm hover:bg-brand-gold-light transition-all duration-300 shadow-xl shadow-brand-gold/25"
            >
              <span>EXPLORE MANDATES</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>
            <a
              href="#what-we-do"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-brand-gold/40 bg-[#071C17]/80 backdrop-blur-sm text-[#D5E5E0] font-semibold text-xs uppercase tracking-[0.22em] rounded-sm hover:border-brand-gold hover:text-brand-gold transition-all duration-300"
            >
              INSTITUTIONAL MODEL
            </a>
          </div>
        </div>
      </div>

      {/* 3. Slider Navigation Controls & Minimalist Indicators Bar */}
      <div className="absolute bottom-6 left-0 right-0 z-20 px-6 sm:px-12 pointer-events-auto">
        <div className="max-w-7xl mx-auto flex items-center justify-between border-t border-[#133A2F]/60 pt-4 bg-[#030B09]/60 backdrop-blur-md rounded-lg px-4 sm:px-6 py-3">
          {/* Left: Minimalist Progress Bars (Clean Indicators without text) */}
          <div className="flex items-center gap-3 sm:gap-4">
            {SLIDES.map((slide, idx) => {
              const isSelected = idx === currentSlide;
              return (
                <button
                  key={slide.id}
                  onClick={() => setCurrentSlide(idx)}
                  className={`group py-2 transition-all duration-300 cursor-pointer ${
                    isSelected ? "opacity-100" : "opacity-35 hover:opacity-75"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                >
                  <div className="relative w-12 sm:w-16 h-1 bg-[#163E32] rounded-full overflow-hidden">
                    {isSelected && (
                      <div
                        key={`bar-${currentSlide}-${isPaused}`}
                        className={`absolute inset-y-0 left-0 bg-brand-gold rounded-full ${
                          !isPaused ? "animate-[progress_6.5s_linear]" : "w-full"
                        }`}
                        style={{
                          animationDuration: `${slideDuration}ms`,
                        }}
                      />
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Slide Controls (Arrows & Play/Pause) */}
          <div className="flex items-center gap-2">
            {/* Play/Pause Toggle */}
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="p-1.5 rounded-full border border-[#164335] bg-[#071E18]/80 text-[#B0C9C2] hover:text-brand-gold hover:border-brand-gold/60 transition-all cursor-pointer"
              title={isPaused ? "Resume Autoplay" : "Pause Autoplay"}
              aria-label={isPaused ? "Resume Autoplay" : "Pause Autoplay"}
            >
              {isPaused ? <Play className="w-3 h-3" /> : <Pause className="w-3 h-3" />}
            </button>

            {/* Prev Arrow */}
            <button
              onClick={handlePrev}
              className="p-1.5 rounded-full border border-[#164335] bg-[#071E18]/80 text-[#B0C9C2] hover:text-brand-gold hover:border-brand-gold/60 transition-all cursor-pointer"
              title="Previous Slide"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>

            {/* Next Arrow */}
            <button
              onClick={handleNext}
              className="p-1.5 rounded-full border border-[#164335] bg-[#071E18]/80 text-[#B0C9C2] hover:text-brand-gold hover:border-brand-gold/60 transition-all cursor-pointer"
              title="Next Slide"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};
