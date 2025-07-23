import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "2vgxy284qk.ufs.sh", // For Uploadthing
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;