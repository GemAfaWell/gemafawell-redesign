/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'd248tdztscvoqa.cloudfront.net',
                port: '',
                pathname: '/*',
            }
        ]
    }
};

export default nextConfig;
