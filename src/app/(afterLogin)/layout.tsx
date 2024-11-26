'use client'
import Sidebar from '@/app/(afterLogin)/_components/Sidebar'
import TrendSection from '@/app/(afterLogin)/_components/TrendSection'
import FollowSection from '@/app/(afterLogin)/_components/FollowSection'
import React, { useEffect } from 'react'
import RightSearch from '@/app/(afterLogin)/_components/RightSearch'
import { usePathname } from 'next/navigation'
import { SessionProvider } from 'next-auth/react'

export default function AfterLoginLayout({
  children,
  modal,
}: {
  children: React.ReactNode
  modal: React.ReactNode
}) {
  const pathname = usePathname()
  useEffect(() => {
    const storage = globalThis?.sessionStorage
    if (!storage) return
    // Set the previous path as the value of the current path.
    const prevPath = storage.getItem('currentPath') ?? ''
    storage.setItem('prevPath', prevPath)
    // Set the current path value by looking at the browser's location object.
    storage.setItem('currentPath', globalThis.location.pathname)
  }, [pathname])
  return (
    <SessionProvider>
      <div className='flex items-stretch'>
        {/*왼쪽 사이드바*/}
        <Sidebar />
        <main className={'flex h-dvh grow flex-col items-start'}>
          <div className={'flex h-full w-[990px] justify-between'}>
            {/*메인콘텐츠*/}
            <main className={'h-auth w-[600px]'}>
              {children}
              {modal}
            </main>
            {/*오른쪽 사이드바*/}
            <aside className='h-auto w-[350px]'>
              <RightSearch />
              <TrendSection />
              <FollowSection />
            </aside>
          </div>
        </main>
      </div>
    </SessionProvider>
  )
}
