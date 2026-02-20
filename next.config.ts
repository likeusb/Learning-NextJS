import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  allowedDevOrigins: ['http://192.168.100.4', '*.http://192.168.100.4']
};

export default nextConfig;
