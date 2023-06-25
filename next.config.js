const nextConfig = {
  async redirects() {
    return [
      // Default redirect from root to dashboard
      {
        source: "/",
        destination: "/dashboard",
        permanent: true,
      },

      // missiing  token missing demo, redirect to dash
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

      //goooooooooood
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
    ];
  },
};

module.exports = nextConfig;
