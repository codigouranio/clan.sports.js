/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslints: {

  },
  rewrites: () => {
    return [
      {
        source: '/app/:path*',
        destination: 'http://localhost:3001/:path*'
      },
      {
        source: '/google',
        destination: 'http://www.google.com'
      }
    ]
  }
}

module.exports = nextConfig
