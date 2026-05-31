/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export — works on any hosting (Hostinger Shared, VPS, CDN, etc.)
  // Supabase browser client works fine in static mode.
  output: "export",

  // Disable image optimisation (requires a Node.js server; not available in static mode)
  images: {
    unoptimized: true,
  },

  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

module.exports = nextConfig;
