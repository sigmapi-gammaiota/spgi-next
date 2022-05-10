/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/public",
      },
      {
        source: "/about",
        destination: "/public/about",
      },
      {
        source: "/philanthropy",
        destination: "/public/philanthropy",
      },
      {
        source: "/rush",
        destination: "/public/rush",
      },
      {
        source: "/donate",
        destination: "/public/donate",
      },
    ];
  },
};

module.exports = nextConfig;
