/** @type {import('next').NextConfig} */

// Static export for GitHub Pages. The base path is derived from the repo
// name by the deploy workflow (PAGES_BASE_PATH):
//   - a user/org site repo (e.g. Wei-Chen-7.github.io) serves at the root  -> ""
//   - a project repo (e.g. personal-website) serves under /personal-website
// Local dev and normal builds are unaffected, so a future Vercel / custom-
// domain deploy stays clean.
const isPages = process.env.GITHUB_PAGES === "true";
const basePath = process.env.PAGES_BASE_PATH ?? "";

const nextConfig = {
  reactStrictMode: true,
  ...(isPages
    ? {
        output: "export",
        ...(basePath ? { basePath, assetPrefix: basePath } : {}),
        trailingSlash: true,
        images: { unoptimized: true },
        env: { NEXT_PUBLIC_BASE_PATH: basePath },
      }
    : {}),
};

export default nextConfig;
