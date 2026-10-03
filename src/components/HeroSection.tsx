"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export const HeroSection: React.FC = () => {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
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
            filter: "brightness(0.72) contrast(1.15) hue-rotate(65deg) saturate(0.85)",
          }}
        >
          <source
            src="https://res.cloudinary.com/g9q4th37/video/upload/v1791042169/14629596_3840_2160_60fps.mp4"
            type="video/mp4"
          />
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>

        {/* Primary Rich Forest Green Tint Layer */}
        <div className="absolute inset-0 bg-[#09241C]/50 mix-blend-color pointer-events-none" />

        {/* Balanced Green-Black Atmospheric Contrast Overlays for Content Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#030C09]/80 via-[#051712]/68 to-[#030C09]/88 pointer-events-none z-[1]" />
        <div
          className="absolute inset-0 pointer-events-none z-[1]"
          style={{
            background:
              "radial-gradient(ellipse 90% 75% at 50% 50%, rgba(4, 16, 12, 0.45) 0%, rgba(3, 10, 8, 0.78) 65%, #020705 100%)",
          }}
        />

      </div>

      {/* 2. Main Hero Content with Generous Editorial Spacing */}
      <div className="relative z-10 max-w-5xl mx-auto text-center pt-20 sm:pt-24 pb-16 flex flex-col items-center">
        <div className="flex flex-col items-center w-full">
          {/* Pill Badge: UNITED STATES ⟷ GCC ECOSYSTEMS (Moved Up with More Gap Below) */}
          <div className="mb-12 sm:mb-16 md:mb-20 z-10">
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-brand-gold/40 bg-[#061814]/75 backdrop-blur-md shadow-xl shadow-black/40">
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.32em] font-medium text-brand-gold font-sans">
                UNITED STATES
              </span>
              <span className="text-brand-gold/70 text-xs font-light">⟷</span>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.32em] font-medium text-brand-gold font-sans">
                GCC ECOSYSTEMS
              </span>
            </div>
          </div>

          {/* Exact Golden Serif Headline in Two Lines with Large Gaps Above and Below */}
          <h1
            style={{ textShadow: "0 4px 20px rgba(0, 0, 0, 0.95), 0 1px 4px rgba(0, 0, 0, 1)" }}
            className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[46px] font-normal text-[#DFBA73] max-w-5xl mx-auto leading-[1.26] tracking-normal z-10 mb-12 sm:mb-16 md:mb-20"
          >
            Connecting Innovation &lt;&gt;
            <br />
            Commercialisation &lt;&gt; Strategic Capital
          </h1>

          {/* Dual Action Buttons matching Reference */}
          <div className="mt-2 sm:mt-4 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full sm:w-auto z-10 font-sans">
            <a
              href="#mandates"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-brand-gold text-[#040D0A] font-semibold text-xs uppercase tracking-[0.24em] rounded-sm hover:bg-brand-gold-light transition-all duration-300 shadow-xl shadow-brand-gold/25 group"
            >
              <span>EXPLORE MANDATES</span>
              <ArrowDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>
            <a
              href="#what-we-do"
              className="w-full sm:w-auto px-8 py-3.5 border border-brand-gold/40 bg-[#071C17]/80 backdrop-blur-sm text-[#D5E5E0] font-semibold text-xs uppercase tracking-[0.24em] rounded-sm hover:border-brand-gold hover:text-brand-gold hover:bg-brand-gold/10 transition-all duration-300"
            >
              INSTITUTIONAL MODEL
            </a>
          </div>
        </div>
      </div>

      {/* 3. Bottom Scroll Indicator: DISCOVER PRACTICE with vertical line matching Reference */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center cursor-pointer group"
      >
        <a
          href="#positioning"
          className="flex flex-col items-center text-brand-gold/80 hover:text-brand-gold transition-colors"
          aria-label="Discover Practice"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-medium opacity-85 group-hover:opacity-100 font-sans">
            DISCOVER PRACTICE
          </span>
          <div className="w-[1.5px] h-8 bg-gradient-to-b from-brand-gold via-brand-gold/60 to-transparent mt-2 group-hover:h-10 transition-all duration-300" />
        </a>
      </motion.div>
    </section>
  );
};
