import type { MetadataRoute } from "next";

import { getSiteUrl, publicRoutes } from "@/lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  return publicRoutes.map((path) => ({
    url: new URL(path, siteUrl).toString(),
    changeFrequency: path === "/roster" || path === "/schedule" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
