/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['pbs.twimg.com', 'static-cdn.jtvnw.net'],
  },
  experimental: {
    appDir: true,
  },
  compiler: {
    removeConsole: true,
  },
}

module.exports = nextConfig
