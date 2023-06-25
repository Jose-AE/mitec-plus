/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/dashboard",
        permanent: true,
      },

      // Has no demo to dashboard
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

        permanent: false,
        destination: "/login",
      },
    ];
  },
};

module.exports = nextConfig;
