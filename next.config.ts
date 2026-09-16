import type { NextConfig } from "next";

const nextConfig: NextConfig = {};

module.exports = {
    htmlLimitedBots: /.*/,
    async redirects() {
        return [
            {
                source: "/",
                destination: "/about",
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
