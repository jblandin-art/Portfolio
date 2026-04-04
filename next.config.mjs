/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  output: "export",
  trailingSlash: true,
  basePath: "/jblandin",
  assetPrefix: "/jblandin/",
  env: {
    NEXT_PUBLIC_BASE_PATH: "/jblandin",
  },
};

export default nextConfig;
