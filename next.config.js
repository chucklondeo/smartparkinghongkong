/** @type {import('next').NextConfig} */
const nextConfig = {
  // Hostinger's current deploy pipeline expects a build output directory.
  // Static export creates `out/`, matching the configured output directory.
  output: "export",

  // Disable image optimisation because static export cannot use the Next.js image server.
  images: {
    unoptimized: true,
  },

  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

module.exports = nextConfig;
