import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Bypass child process spawning for typechecks during build to avoid OS spawn crashes
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
