import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "marketplace.canva.com",
      },
      {
        protocol: "https",
        hostname: "www.tribegroup.co",
      },
      {
        protocol: "https",
        hostname: "tribegroup.co",
      },
    ],
  },
};

export default nextConfig;