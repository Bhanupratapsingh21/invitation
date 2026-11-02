import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Great_Vibes, Tiro_Devanagari_Hindi } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: "400",
});

const tiroDevanagari = Tiro_Devanagari_Hindi({
  variable: "--font-tiro-devanagari",
  subsets: ["devanagari", "latin"],
  weight: "400",
});

export const metadata: Metadata = {
  // Set NEXT_PUBLIC_SITE_URL on the host so share previews resolve to the live domain.
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Neha & Pavan · मंगल परिणयोत्सव",
  description:
    "You are warmly invited to the wedding of Neha Kanwar and Kunwar Pavan Singh, 15–21 November 2026, Kothariya, Nathdwara.",
  openGraph: {
    title: "Neha & Pavan · Wedding Invitation",
    description: "15–21 November 2026 · Kothariya, Nathdwara",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Neha & Pavan · 21 November 2026" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#fbf7ef",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${greatVibes.variable} ${tiroDevanagari.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
