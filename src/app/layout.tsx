import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter, Cormorant_Garamond, Cinzel } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Manara Nexus | Strategic Advisory — US & GCC Corridor",
  description:
    "Connecting Innovation <> Commercialisation <> Strategic Capital. High-end corporate strategic advisory firm operating at the intersection of technology, industry and capital.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  keywords: [
    "Manara Nexus",
    "Strategic Advisory",
    "GCC",
    "US",
    "Commercialisation",
    "Strategic Capital",
    "Deep Tech",
    "Industrial Decarbonisation",
    "Mega Projects",
  ],
  authors: [{ name: "Manara Nexus" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${cormorant.variable} ${cinzel.variable}`}
    >
      <body className="font-sans antialiased bg-[#040C0A] text-brand-gray-light selection:bg-brand-gold/30 selection:text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
