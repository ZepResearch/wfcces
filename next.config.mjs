/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    domains: ['res.cloudinary.com','illustrations.popsy.co', 'images.unsplash.com','plus.unsplash.com'],
  },
  experimental: {
    serverActions: true,
  },
};

export default nextConfig;