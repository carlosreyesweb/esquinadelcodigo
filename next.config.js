/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: 'a-us.storyblok.com',
        protocol: 'https',
      },
    ],
  },
}

module.exports = nextConfig
