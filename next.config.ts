import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/portfoliotest" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/portfoliotest/" : "",
  images: { unoptimized: true },
};

export default nextConfig;
