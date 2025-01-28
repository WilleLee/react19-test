import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ['@monorepo/ui', '@monorepo/features'],
};

export default nextConfig;
