import type { NextConfig } from "next";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      // If you end up using real Ecoyaan images later, add their domain here too!
    ],
  },
};

export default nextConfig;
