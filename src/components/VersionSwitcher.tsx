"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Eye, ChevronRight } from "lucide-react";

interface VersionSwitcherProps {
  current: "home-1" | "home-2" | "home-3";
}

export const VersionSwitcher: React.FC<VersionSwitcherProps> = ({ current }) => {
  const [collapsed, setCollapsed] = useState(false);

  const versions = [
    { id: "home-1", label: "Home 1 (Playfair)", href: "/" },
    { id: "home-2", label: "Home 2 (Sans-Serif)", href: "/home-2" },
    { id: "home-3", label: "Home 3 (Architectural)", href: "/home-3" },
  ];

  return (
    <aside
      aria-label="Design version switcher"
      className="fixed bottom-5 right-5 z-[9999] font-sans text-xs select-none"
    >
      <div className="bg-[#051410]/95 backdrop-blur-md border border-brand-gold/40 rounded-lg shadow-2xl shadow-black/80 p-2 flex items-center gap-2">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded bg-brand-gold/15 text-brand-gold hover:bg-brand-gold/25 transition-all text-[11px] font-medium uppercase tracking-wider"
          title="Toggle version comparison menu"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>Compare Versions</span>
        </button>

        {!collapsed && (
          <div className="flex items-center gap-1 pl-1 border-l border-brand-gold/20">
            {versions.map((ver) => {
              const isActive = current === ver.id;
              return (
                <Link
                  key={ver.id}
                  href={ver.href}
                  className={`px-2.5 py-1.5 rounded transition-all text-[11px] font-medium tracking-wide ${
                    isActive
                      ? "bg-brand-gold text-[#040D0A] font-semibold shadow-sm"
                      : "text-brand-gray-light/70 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {ver.label}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </aside>
  );
};
