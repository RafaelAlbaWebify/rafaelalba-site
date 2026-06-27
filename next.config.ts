import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  turbopack: {
    root: process.cwd(),
  },

  images: {
    unoptimized: true,
    qualities: [75, 95],
  },

  trailingSlash: true,

  typescript: {
    ignoreBuildErrors: false,
  },

  reactStrictMode: true,
};

export default nextConfig;