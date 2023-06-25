const nextConfig = {
  async redirects() {
    return [
      // Default redirect from root to dashboard
      {
        source: "/",
        destination: "/login",
        permanent: true,
      },

      /*
      // missiing  token has  demo, redirect to dash
      {
        source: "/dashboard",

        missing: [
          {
            type: "cookie",
            key: "token",
          },
        ],
        has: [
          {
            type: "cookie",
            key: "token",
          },
        ],

        permanent: false,
        destination: "/dashboard",
      },

      // missiing  token has  demo, redirect to dash
      {
        source: "/dashboard",

        missing: [
          {
            type: "cookie",
            key: "demo",
          },
        ],

        permanent: false,
        destination: "/login",
      },

      
      // has demo  redirect to dashboard
      {
        source: "/login",
        has: [
          {
            type: "cookie",
            key: "demo",
          },
        ],
        permanent: false,
        destination: "/dashboard",
      },
      // has token  redirect to dashboard
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
      */
    ];
  },
};

module.exports = nextConfig;
