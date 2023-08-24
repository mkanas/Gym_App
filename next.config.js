/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "d205bpvrqc9yn1.cloudfront.net",
      "ik.imagekit.io",
      "edbv2-ff7foj6vca-uc.a.run.app",
      "i.ytimg.com",
      "edb-4rme8.ondigitalocean.app",
      "api.exercisedb.io",
    ],
  },
};

module.exports = nextConfig;
