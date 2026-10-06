import React from "react";
import { Navbar } from "@/components/home3/Navbar";
import { HeroSection } from "@/components/home3/HeroSection";
import { Positioning } from "@/components/home3/Positioning";
import { WhatWeDo } from "@/components/home3/WhatWeDo";
import { StrategicAdvantage } from "@/components/home3/StrategicAdvantage";
import { Sectors } from "@/components/home3/Sectors";
import { Mandates } from "@/components/home3/Mandates";
import { Team } from "@/components/home3/Team";
import { Footer } from "@/components/home3/Footer";
import { VersionSwitcher } from "@/components/VersionSwitcher";

export default function Home3() {
  return (
    <main className="min-h-screen bg-brand-navy text-brand-gray-light selection:bg-brand-gold/30 selection:text-white">
      {/* Floating Version Switcher for Client Review */}
      <VersionSwitcher current="home-3" />

      {/* Fixed Navigation Header */}
      <Navbar />

      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Editorial Positioning Statement */}
      <Positioning />

      {/* 3. Capabilities: From opportunity to deployment */}
      <WhatWeDo />

      {/* 4. Sector and Ecosystem */}
      <Sectors />

      {/* 5. Architected for Cross-Border Precision & Sovereign Scale */}
      <StrategicAdvantage />

      {/* 6. Sovereign & Industrial Mandate Matrix */}
      <Mandates />

      {/* 7. Executive Leadership */}
      <Team />

      {/* 8. Initiate Strategic Dialogue CTA & Comprehensive Footer */}
      <Footer />
    </main>
  );
}
