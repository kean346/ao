import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  devIndicators: false,
  experimental: {
    serverActions: { bodySizeLimit: '11mb' },
    optimizePackageImports: ['lucide-react'],
  },
};

export default nextConfig;
