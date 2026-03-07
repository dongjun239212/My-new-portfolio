import type { NextConfig } from "next";

// 仅在使用 GitHub Actions 部署到 GitHub Pages 时设为 /My-new-portfolio，Vercel 部署保持根路径
const basePath = process.env.GITHUB_PAGES === "true" ? "/My-new-portfolio" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
