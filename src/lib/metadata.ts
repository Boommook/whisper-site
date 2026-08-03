import type { Metadata } from "next";

export const defaultDescription =
  "The official website of WPI Whisper, Worcester Polytechnic Institute's men's ultimate frisbee club. Meet the team, view events, explore media, and learn how to join.";

export const publicRoutes = [
  "/",
  "/about",
  "/roster",
  "/schedule",
  "/join",
  "/media",
  "/contact",
] as const;

export function getSiteUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const vercelUrl =
    process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;
  const value = configuredUrl ?? (vercelUrl ? `https://${vercelUrl}` : "http://localhost:3000");

  return new URL(value);
}

export function createPageMetadata(
  title: string,
  description: string,
  path: (typeof publicRoutes)[number],
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      title,
      description,
      url: path,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
