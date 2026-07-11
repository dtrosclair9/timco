/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
        ],
      },
    ]
  },
  async redirects() {
    return [
      // v2 (property/land buckets) → v3 (single land-management identity)
      { source: '/services/residential-property-management', destination: '/services/residential-land-management', permanent: true },
      { source: '/services/commercial-property-management', destination: '/services/commercial-land-management', permanent: true },
      { source: '/services/property-restoration', destination: '/services/residential-land-management', permanent: true },
      { source: '/services/land-restoration', destination: '/services/recreational-land-management', permanent: true },
      { source: '/services/property-management', destination: '/services', permanent: true },
      { source: '/services/land-management', destination: '/services', permanent: true },
      // removed city pages → nearest live equivalent
      { source: '/services/property-restoration-thibodaux-la', destination: '/services/residential-land-management-thibodaux-la', permanent: true },
      { source: '/services/property-restoration-houma-la', destination: '/services/residential-land-management-thibodaux-la', permanent: true },
      // (recreational-land-management-houma-la is a live page again as of 2026-06-12 — no redirect)
    ]
  },
}

module.exports = nextConfig
