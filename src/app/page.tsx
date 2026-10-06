import React from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { Positioning } from "@/components/Positioning";
import { WhatWeDo } from "@/components/WhatWeDo";
import { StrategicAdvantage } from "@/components/StrategicAdvantage";
import { Sectors } from "@/components/Sectors";
import { Mandates } from "@/components/Mandates";
import { Team } from "@/components/Team";
import { Footer } from "@/components/Footer";
import { VersionSwitcher } from "@/components/VersionSwitcher";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-navy text-brand-gray-light selection:bg-brand-gold/30 selection:text-white">
      {/* Floating Version Switcher for Client Review */}
      <VersionSwitcher current="home-1" />

      {/* Fixed Navigation Header */}
      <Navbar />

      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Editorial Positioning Statement */}
      <Positioning />

      {/* 3. Capabilities: From opportunity to deployment (2x2 Dark Cards) */}
      <WhatWeDo />

      {/* 4. Sector and Ecosystem: Sectors (6 Dark Green Domain Cards & US <> GCC Corridor) */}
      <Sectors />

      {/* 5. Architected for Cross-Border Precision & Sovereign Scale (3 White Cards) */}
      <StrategicAdvantage />

      {/* 6. Sovereign & Industrial Mandate Matrix (Tabbed 3-Track Grid) */}
      <Mandates />

      {/* 7. Executive Leadership: Managing Partners with Authentic Portraits */}
      <Team />

      {/* 8. Initiate Strategic Dialogue CTA & Comprehensive Footer */}
      <Footer />
    </main>
  );
}
