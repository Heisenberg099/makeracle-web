import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  // Class 6 Studio: each AI chapter link opens the first step of its path.
  async redirects() {
    return [
      { source: "/studio/ai/1", destination: "/studio/ai/1/intelligence", permanent: false },
      { source: "/studio/ai/2", destination: "/studio/ai/2/what-is-data", permanent: false },
      { source: "/studio/ai/3", destination: "/studio/ai/3/patterns", permanent: false },
      { source: "/studio/ai/4", destination: "/studio/ai/4/responsible-use", permanent: false },
    ];
  },
};

export default nextConfig;
