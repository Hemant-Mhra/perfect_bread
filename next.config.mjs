/** @type {import('next').NextConfig} */
const nextConfig = {
    // next.config.js
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'drive.google.com',
          pathname: '/uc',
        },
      ],
    },
};

export default nextConfig;
