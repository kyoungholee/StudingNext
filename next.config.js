/** @type {import('next').NextConfig} */
const nextConfig = {}
// next.config.js
module.exports = {
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'http://localhost:3001/api/:path*', // Express 서버 주소
        },
      ];
    },
  };
  