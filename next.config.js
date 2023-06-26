const nextConfig = {
  async redirects() {
    return [
      // Default redirect from root to dashboard
      {
        source: "/",
        destination: "/dashboard",
        permanent: true,
      },

      {
        source: "/dashboard/(.*)",

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
