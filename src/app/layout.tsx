import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MSWComponent from '@/app/_components/MSWComponent'

const chirpBold = localFont({
  src: '../styles/fonts/Chirp-Bold.ttf',
  variable: '--font-chirp-bold',
  display: 'swap',
})
const chirpRegular = localFont({
  src: '../styles/fonts/Chirp-Regular.ttf',
  variable: '--font-chirp-regular',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className={''}>
      <body className={`${chirpBold.variable} ${chirpRegular.variable}`}>
        <MSWComponent />
        {children}
      </body>
    </html>
  )
}
