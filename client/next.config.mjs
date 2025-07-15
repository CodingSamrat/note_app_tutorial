/** @type {import('next').NextConfig} */
const nextConfig = {
    allowedDevOrigins: ['192.168.100.191'],
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: `${process.env.NEXT_PUBLIC_API_BASE}/:path*`,
            },
        ];
    },
};

export default nextConfig;
