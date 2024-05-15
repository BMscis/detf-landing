/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
      {
        protocol: "https",
        hostname: "circle.com",
        pathname: "/favicon.ico",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
