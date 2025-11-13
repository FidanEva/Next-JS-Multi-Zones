/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/blog',
  
  async rewrites() {
    return [
      // Route back to main app for other paths
      {
        source: '/:path*',
        destination: 'http://localhost:3000/:path*',
      },
    ];
  },
};

export default nextConfig;