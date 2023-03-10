/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['picsum.photos'],
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
