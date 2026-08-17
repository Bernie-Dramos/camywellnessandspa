/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // Only used by the placeholder testimonial avatars on the homepage.
      // Remove once those are replaced with real client photos.
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  poweredByHeader: false,
}

export default nextConfig
