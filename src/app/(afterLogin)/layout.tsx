import Navbar from '@/app/(afterLogin)/_components/Navbar'
import TrendSection from '@/app/(afterLogin)/_components/TrendSection'
import FollowSection from '@/app/(afterLogin)/_components/FollowSection'
import React from 'react'
import RightSearch from '@/app/(afterLogin)/_components/RightSearch'
import { auth } from '@/auth'
import Link from 'next/link'
import { PATH } from '@/utils/path'
import Image from 'next/image'
import Logo from '../../../public/logo.png'
import RQProvider from '@/app/(afterLogin)/_components/RQProvider'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'

export default async function AfterLoginLayout({
  children,
  modal,
}: {
  children: React.ReactNode
  modal: React.ReactNode
}) {
  const session = await auth()

  return (
    <RQProvider>
      <div className='flex items-stretch'>
        {/*왼쪽 사이드바*/}
        <nav className='flex grow flex-col items-end'>
          <div className={'h-dvh w-[275px]'}>
            <div className={'fixed flex h-dvh flex-col'}>
              <Link
                href={session ? PATH.HOME : PATH.MAIN}
                scroll={true}
                className='mt-2 flex h-[50px] w-[50px] items-center justify-center rounded-full hover:bg-gray_light'
              >
                <Image src={Logo} alt={'로고이미지'} width={40} height={40} />
              </Link>
              {session && <Navbar session={session} />}
            </div>
          </div>
        </nav>
        {/*메인콘텐츠*/}
        <main className={'flex h-dvh grow flex-col items-start'}>
          <div className={'flex h-full w-[990px] justify-between'}>
            <main className={'h-auth w-[600px]'}>
              {children}
              {modal}
            </main>
            {/*오른쪽 사이드바*/}
            <aside className='h-auto w-[350px]'>
              <RightSearch />
              <TrendSection session={session} />
              <FollowSection session={session} />
            </aside>
          </div>
        </main>
      </div>
    </RQProvider>
  )
}
