/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    // enables the styled-components SWC transform
    styledComponents: true
  }
}


module.exports = nextConfig
