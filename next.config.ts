/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  eslint: {
    ignoreDuringBuilds: true  // Esto deshabilitará las verificaciones de ESLint durante el build
  },
  images: {
    domains: ['gemtaxexpert.com'],
  },
}

module.exports = nextConfig