/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true, // Ignora ESLint durante el build
  },
  output: 'standalone', // Hace que la aplicación sea más compatible con entornos de despliegue
};

module.exports = nextConfig;
