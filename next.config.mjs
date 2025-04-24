/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    swcMinify: true,
    eslint: {
      ignoreDuringBuilds: true,
    },
    typescript: {
      ignoreBuildErrors: true,
    },
    images: {
      unoptimized: true,
    },
    // Disable server components completely
    experimental: {
      appDir: true,
    },
    // Add custom page extensions to ensure client-side rendering
    pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
    // Disable static optimization for all pages
    compiler: {
      styledComponents: true,
    },
    // Disable static generation
    output: 'standalone',
  }
  
  export default nextConfig
  