/** @type {import('next').NextConfig} */
const nextConfig = {
  // Rewrites for all zones
  async rewrites() {
    return [
      // Blog zone
      {
        source: '/blog',
        destination: 'http://localhost:3001/blog',
      },
      {
        source: '/blog/:path*',
        destination: 'http://localhost:3001/blog/:path*',
      },
      // Dashboard zone
      {
        source: '/dashboard',
        destination: 'http://localhost:3002/dashboard',
      },
      {
        source: '/dashboard/:path*',
        destination: 'http://localhost:3002/dashboard/:path*',
      },
      // Legacy React app (not a zone)
      {
        source: '/legacy/:path*',
        destination: 'http://localhost:3003/legacy/:path*',
      },
      {
        source: '/static/:path*',
        destination: 'http://localhost:3003/static/:path*',
      },
      {
        source: '/manifest.json',
        destination: 'http://localhost:3003/manifest.json',
      },
      {
        source: '/favicon.ico',
        destination: 'http://localhost:3003/favicon.ico',
      },
    ];
  },
};

export default nextConfig;