import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  turbopack: {
    // Parent lockfile at C:\Users\boomm\package-lock.json otherwise wins root detection.
    root: path.join(__dirname),
  },
  images: {
    localPatterns: [
      { pathname: "/img/**" },
      { pathname: "/api/roster-portraits/**" },
    ],
  },
};

export default nextConfig;
