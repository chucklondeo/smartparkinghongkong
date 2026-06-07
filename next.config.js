/** @type {import('next').NextConfig} */
const nextConfig = {
  // Hostinger is configured as a Next.js Node app on the main branch.
  // Keep this as a standard Next.js build so `next build` + `next start` works there.
  images: {
    unoptimized: true,
  },

  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

module.exports = nextConfig;
