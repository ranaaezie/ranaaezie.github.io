/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['muhammad-azeem.me', 'i.postimg.cc'],
    unoptimized: true,
  },
  // output: "export",
  reactStrictMode: true,
  swcMinify: true,
  experimental: {

  },
  // basePath: process.env.NODE_ENV === 'production' ? '/rana-aezie' : '',
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/rana-aezie/' : '',
}

module.exports = nextConfig
