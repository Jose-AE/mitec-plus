/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/dashboard",
        permanent: true,
      },
      // Has demo and no token when going to login
      {
        source: "/login",
        missing: [
          {
            type: "cookie",
            key: "token",
          },
        ],
        has: [
          {
            type: "cookie",
            key: "demo",
          },
        ],

        permanent: true,
        destination: "/dashboard",
      },
      // Has no demo but token when going to login
      {
        source: "/login",
        has: [
          {
            type: "cookie",
            key: "token",
          },
        ],
        missing: [
          {
            type: "cookie",
            key: "demo",
          },
        ],

        permanent: true,
        destination: "/dashboard",
      },
      // Has no demo and no token when going to dashboard
      {
        source: "/dashboard",
        missing: [
          {
            type: "cookie",
            key: "demo",
          },
          {
            type: "cookie",
            key: "token",
          },
        ],

        permanent: true,
        destination: "/login",
      },
    ];
  },
};

module.exports = nextConfig;
