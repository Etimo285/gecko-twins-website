// /** @type {import('next').NextConfig} */

module.exports = {

    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.ytimg.com',
                port: '',
                pathname: '/vi/**',
            },
            {
                hostname: 'yt3.ggpht.com',
                pathname: '**',
            },
            {
                hostname: 'cdn.cloudflare.steamstatic.com',
                pathname: '**'
            }
        ]
    },

    async redirects() {
        return [
            {
                source: '/',
                destination: '/home',
                permanent: true,
            }
        ]
    },
}
