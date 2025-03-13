/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      // 이미지 업로드 10mb로 제한
      bodySizeLimit: '10mb',
    },
  },
  async redirects() {
    return [
      {
        source: '/upload/:slug',
        destination: `${process.env.NEXT_PUBLIC_BASE_URL}/upload/:slug`,
        permanent: true,
      },
    ]
  },
  // images: {
  //   remotePatterns: [
  //     // 임시로 unsplah 가져오려고 설저웨ㅡ
  //     {
  //       protocol: 'https',
  //       hostname: 'plus.unsplash.com',
  //       port: '',
  //     },
  //     {
  //       protocol: 'https',
  //       hostname: 'images.unsplash.com',
  //       port: '',
  //     },
  //     {
  //       //   https://
  //       protocol: 'https',
  //       hostname: 'res.cloudinary.com',
  //       port: '',
  //     },
  //   ],
  // },
}

export default nextConfig
