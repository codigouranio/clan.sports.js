/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  rewrites: () => {
    return [
      {
        source: '/app/:path*',
        destination: 'http://172.16.23.170:3001/:path*'
      }, 
      {
        source: '/google',
        destination: 'http://www.google.com'
      }
    ]
  }
}

module.exports = nextConfig
