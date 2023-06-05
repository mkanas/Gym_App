/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["d205bpvrqc9yn1.cloudfront.net", "ik.imagekit.io"],
  },
};

module.exports = nextConfig;
