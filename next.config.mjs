/** @type {import('next').NextConfig} */

// When building for GitHub Pages (project site served under /personal-website),
// emit a fully static export with the right base path. Local dev and normal
// builds are unaffected so a future Vercel / custom-domain deploy stays clean.
const isPages = process.env.GITHUB_PAGES === "true";
const repoBase = "/personal-website";

const nextConfig = {
  reactStrictMode: true,
  ...(isPages
    ? {
        output: "export",
        basePath: repoBase,
        assetPrefix: repoBase,
        trailingSlash: true,
        images: { unoptimized: true },
        env: { NEXT_PUBLIC_BASE_PATH: repoBase },
      }
    : {}),
};

export default nextConfig;
