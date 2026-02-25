import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  allowedDevOrigins: ['192.168.100.4', '*.192.168.100.4'],
};

export default nextConfig;
