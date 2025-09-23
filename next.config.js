/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  // GitHub Pages configuration
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Base path for GitHub Pages (if your repo name is not the same as the domain)
  // basePath: '/abro-cycle',
  // assetPrefix: '/abro-cycle',
};

module.exports = nextConfig;
