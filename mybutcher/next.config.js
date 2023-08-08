/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: true
    },
    reactStrictMode: true,
    images: {
        domains: ['baconmockup.com']
    }
}

module.exports = nextConfig
