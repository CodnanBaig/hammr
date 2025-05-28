/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static optimization where possible
  swcMinify: true,
  // Reduce memory usage during build
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react'],
  },
  // Reduce build memory usage
  webpack: (config, { dev, isServer }) => {
    // Optimize only in production
    if (!dev) {
      config.optimization = {
        ...config.optimization,
        minimize: true,
      }
    }
    return config
  },
}

module.exports = nextConfig 