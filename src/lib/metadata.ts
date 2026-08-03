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

function normalizeAbsoluteUrl(value: string, source: string) {
  const trimmedValue = value.trim();
  if (!trimmedValue) {
    throw new Error(`${source} must not be empty.`);
  }

  let url: URL;
  try {
    url = new URL(trimmedValue);
  } catch {
    throw new Error(`${source} must be a valid absolute URL including http:// or https://.`);
  }

  if (url.protocol !== "http:" && url.protocol !== "https:") {
    throw new Error(`${source} must use http:// or https://.`);
  }
  if (url.username || url.password) {
    throw new Error(`${source} must not include credentials.`);
  }
  if (url.pathname !== "/" || url.search || url.hash) {
    throw new Error(`${source} must contain only the site origin, without a path, query, or hash.`);
  }
  if (url.protocol === "http:" && url.hostname !== "localhost" && url.hostname !== "127.0.0.1") {
    throw new Error(`${source} must use HTTPS unless it points to a local development server.`);
  }

  return new URL(url.origin);
}

function normalizeVercelUrl(value: string, source: string) {
  const trimmedValue = value.trim();
  const absoluteValue = /^https?:\/\//i.test(trimmedValue)
    ? trimmedValue
    : `https://${trimmedValue}`;
  return normalizeAbsoluteUrl(absoluteValue, source);
}

export function getSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL !== undefined) {
    return normalizeAbsoluteUrl(
      process.env.NEXT_PUBLIC_SITE_URL,
      "NEXT_PUBLIC_SITE_URL",
    );
  }
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL !== undefined) {
    return normalizeVercelUrl(
      process.env.VERCEL_PROJECT_PRODUCTION_URL,
      "VERCEL_PROJECT_PRODUCTION_URL",
    );
  }
  if (process.env.VERCEL_URL !== undefined) {
    return normalizeVercelUrl(process.env.VERCEL_URL, "VERCEL_URL");
  }
  if (process.env.VERCEL === "1") {
    throw new Error("Vercel did not provide a deployment URL for public metadata.");
  }

  return new URL("http://localhost:3000");
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
