/** @type {import('next').NextConfig} */

const nextConfig = {
  reactCompiler: true,
  trailingSlash: true,
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/melody-popup/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/slider-tabs/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/exit-animation/",
        destination: "/",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
