/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "a-us.storyblok.com",
        protocol: "https",
      },
    ],
  },
}

export default nextConfig
