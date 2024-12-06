/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: '/purepro4561-blog/',
  basePath: '/purepro4561-blog',
}

module.exports = nextConfig

