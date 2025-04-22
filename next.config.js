<<<<<<< HEAD
 
=======
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  // Optimize for production
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Enable static optimization where possible
  experimental: {
    optimizeCss: true,
  },
}

module.exports = nextConfig;
>>>>>>> origin/main
