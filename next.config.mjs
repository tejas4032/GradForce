/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'media.istockphoto.com',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 't3.ftcdn.net',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'energized-fish-168.convex.cloud',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'upload.wikimedia.org',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'storage.googleapis.com',
                pathname: '**',
              },
        ],
    },
};

export default nextConfig;
