/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/dashboard",
        missing: [
          {
            type: "cookie",
            key: "token",
          },
        ],
        permanent: false,
        destination: "/login",
      },
      {
        source: "/login",
        has: [
          {
            type: "cookie",
            key: "token",
          },
        ],
        permanent: false,
        destination: "/dashboard",
      },
    ];
  },
};

module.exports = nextConfig;
