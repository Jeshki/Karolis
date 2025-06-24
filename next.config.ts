import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
  },
  serverExternalPackages: [],
  transpilePackages: ['react-i18next', 'i18next', 'i18next-browser-languagedetector'],
};

export default nextConfig;
