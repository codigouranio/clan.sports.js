/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  rewrites: () => {
    return [
      {
        source: '/app',
        destination: 'http://172.16.23.170:3001'
      }
    ]
  }
}

module.exports = nextConfig
