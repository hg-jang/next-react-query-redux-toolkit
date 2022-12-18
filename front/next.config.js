/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/back/api/:path*',
        destination: 'http://localhost:8080/back/api/:path*'
      }
    ]
  },
}

module.exports = nextConfig
