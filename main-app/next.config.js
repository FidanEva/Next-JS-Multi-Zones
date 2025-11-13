/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/blog/:path*",
        destination: "http://localhost:3001/:path*",
      },
      {
        source: "/dashboard/:path*",
        destination: "http://localhost:3002/:path*",
      },
      {
        // React app entry point and all nested paths
        source: "/legacy/:path*",
        destination: "http://localhost:3003/legacy/:path*",
      },
      {
        // CRA assets served from root in dev
        source: "/static/:path*",
        destination: "http://localhost:3003/static/:path*",
      },
      {
        // CRA manifest + favicon etc.
        source: "/manifest.json",
        destination: "http://localhost:3003/manifest.json",
      },
      {
        source: "/favicon.ico",
        destination: "http://localhost:3003/favicon.ico",
      },
    ];
  },
};

export default nextConfig;
