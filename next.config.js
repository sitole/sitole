/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        swcMinify: true
    },

    // Support static export handled by Nginx
    // We are using "next-nginx-routes" to build Nginx config for dynamic routes
    // @see https://geops.com/en/blog/next-nginx-routes
    output: 'export',

    images: {
        unoptimized: true
    },
}

module.exports = nextConfig
