/** @type {import('next').NextConfig} */
const withCss = require('@zeit/next-css')
const nextConfig = {
  reactStrictMode: true,
}
module.exports = {
  nextConfig,
  resolve: {
  alias: {
    react: require.resolve('react')
  } 
}
}