/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "flexxydrive.com",
      },
    ],
  },
};

module.exports = nextConfig;