/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');
const nextConfig = {
  reactStrictMode: true,
  i18n,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://spadecompany.net',
      },
    ];
  },
  images: {
    domains: ['images.dog.ceo'],
  },
};

module.exports = nextConfig;
