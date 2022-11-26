/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports = {
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: 'https://www.hidoglovers.com/:path*',
        permanent: true,
      },
    ]
  },
}
