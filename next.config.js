/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd ? '/lottery-simulator/' : '',
  images: {
    loader: "custom"
  },
}

module.exports = nextConfig
