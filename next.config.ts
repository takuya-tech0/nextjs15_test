import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  // 環境変数の設定を追加
  env: {
    API_ENDPOINT: process.env.API_ENDPOINT,
  },
};

export default nextConfig;
