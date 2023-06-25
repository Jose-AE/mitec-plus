/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/login",
        permanent: true,
      },
      {
        source: "/dashboard",
        missing: [
          {
            type: "cookie",
            key: "token",
          },
          {
            type: "cookie",
            key: "demo",
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
