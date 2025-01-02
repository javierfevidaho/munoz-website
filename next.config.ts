/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  output: 'standalone', // Asegúrate de tener esta opción
  experimental: {
    appDir: true,
  },
};
