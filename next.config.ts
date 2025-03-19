import type {NextConfig} from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone',
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL, // This will be available in the browser
  },
};

export default nextConfig;
