import type { Metadata, Viewport } from "next";
import "./globals.css";

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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased bg-[#040C0A] text-brand-gray-light selection:bg-brand-gold/30 selection:text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
