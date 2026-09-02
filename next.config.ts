import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGithubPages ? "/royal-trip-website" : "";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Exposed to both server and client code so components can prefix
  // public/ asset paths (e.g. next/image src) that Next doesn't
  // rewrite automatically the way it does for its own _next/* assets.
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  ...(isGithubPages && {
    basePath,
    assetPrefix: basePath,
  }),
};

export default nextConfig;
