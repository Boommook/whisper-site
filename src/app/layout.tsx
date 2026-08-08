import type { Metadata, Viewport } from "next";
import { Barlow } from "next/font/google";
import type { ReactNode } from "react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { siteConfig } from "@/config/site";
import { publicSocialLinks } from "@/config/communications";
import { getSiteUrl } from "@/lib/metadata";

import "./globals.css";

// Headline font: a normal-width, ultra-bold display face. We intentionally
// avoid "condensed" family names (e.g. Roboto Condensed) — combined with the
// heavy negative letter-spacing used on headlines, condensed glyph metrics
// make text render visibly squished in Firefox (both locally and on
// Vercel), even after disabling metric-based fallback size-adjust. Barlow is
// normal-width, ships a true 900 weight (no synthetic/faux bold), and keeps
// an athletic, tall-and-bold headline feel without the condensed narrowing.
const headingFont = Barlow({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-heading-family",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "WPI Whisper",
    "WPI men's ultimate frisbee",
    "Worcester Polytechnic Institute ultimate frisbee",
    "college ultimate frisbee",
  ],
  icons: {
    icon: "/img/whisper-logo.png",
    apple: "/img/whisper-logo.png",
  },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f5f6" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsTeam",
  name: siteConfig.name,
  url: getSiteUrl().toString(),
  description: siteConfig.description,
  sport: "Ultimate frisbee",
  email: "gr-ateam_exec@wpi.edu",
  sameAs: publicSocialLinks.map((link) => link.href),
};

const themeScript = `
  try {
    const savedTheme = localStorage.getItem("whisper-theme");
    const theme = savedTheme === "light" || savedTheme === "dark"
      ? savedTheme
      : (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  } catch (_) {}
`;

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={headingFont.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className="flex min-h-dvh flex-col antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
