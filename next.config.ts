import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
};

module.exports = {
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
