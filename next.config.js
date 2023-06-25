const nextConfig = {
  async redirects() {
    return [
      // Default redirect from root to dashboard
      {
        source: "/",
        destination: "/dashboard",
        permanent: true,
      },
      // Missing demo and token, redirect to dashboard
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
