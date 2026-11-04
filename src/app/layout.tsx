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

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://wedding-invitation.bpss.in";
const TITLE = "Neha & Pawan · Wedding Invitation";
const DESCRIPTION =
  "With the blessings of Shri Vinayak ji and Kuldevi Ashapura Maa, you are warmly invited to the wedding of Neha Kanwar and Kunwar Pawan Singh · 15–21 November 2026 · Kothariya, Nathdwara.";
// Renamed whenever the image changes, so WhatsApp fetches it again instead of using its cache.
const OG_IMAGE = { url: "/og-pawan.jpg", type: "image/jpeg", width: 1200, height: 630, alt: "Neha & Pawan · 21 November 2026 · Kothariya, Nathdwara" };

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Neha & Pawan · मंगल परिणयोत्सव",
  description: DESCRIPTION,
  applicationName: "Neha & Pawan",
  authors: [{ name: "bpss", url: "https://bpss.in" }],
  creator: "bpss.in",
  keywords: [
    "Neha weds Pawan",
    "Neha Kanwar",
    "Pawan Singh Shekhawat",
    "wedding invitation",
    "शुभ विवाह",
    "Kothariya",
    "Nathdwara",
    "Rajasthan wedding",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Neha & Pawan",
    locale: "en_IN",
    title: TITLE,
    description: "15–21 November 2026 · Kothariya, Nathdwara",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "15–21 November 2026 · Kothariya, Nathdwara",
    images: [OG_IMAGE],
  },
  appleWebApp: { title: "Neha & Pawan", statusBarStyle: "default" },
  formatDetection: { telephone: false },
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
