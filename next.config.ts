import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    localPatterns: [
      { pathname: "/img/**" },
      { pathname: "/api/roster-portraits/**" },
    ],
  },
};

export default nextConfig;
