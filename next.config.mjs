/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['@prisma/client', '@prisma/engines'],
  },
  serverActions: {
    bodySizeLimit: '2mb',
  },
};

export default nextConfig;
