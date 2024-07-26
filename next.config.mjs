/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['image.tmdb.org'],
  },
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
