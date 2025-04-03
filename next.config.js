/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  eslint: {
    // we use biome for linting
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [],
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
