/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: { domains: ["images.unsplash.com", "wembleypark.com"] },
    experimental: {
        staleTimes: {
            dynamic: 0,
        },
    },
};

module.exports = nextConfig;
