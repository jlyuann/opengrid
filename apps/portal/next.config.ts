import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 让 Next 编译并打包本地 workspace 包 @opengrid/ui（共享设计系统）。
  transpilePackages: ["@opengrid/ui"],
};

export default nextConfig;
