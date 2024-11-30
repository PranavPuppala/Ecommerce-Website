import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { hostname: "m.media-amazon.com" },
      { hostname: "media.cnn.com" },
      { hostname: "pisces.bbystatic.com" },
    ],
  },
};

export default nextConfig;
