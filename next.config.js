/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/public',
      },
      {
        source: '/about',
        destination: '/public/about',
      },
      {
        source: '/activities',
        destination: '/public/activities',
      },
      {
        source: '/rush',
        destination: '/public/rush',
      },
      {
        source: '/brothers',
        destination: '/public/brothers',
      },
    ];
  },
};

module.exports = nextConfig;
