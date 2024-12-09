'use client'
import Link from 'next/link'
import { PATH } from '@/utils/path'
import clsx from 'clsx'
import { usePathname, useRouter } from 'next/navigation'
import ProfileImage from '@/app/_ui/ProfileImage'
import {
  HomeIcon,
  ExploreIcon,
  MessagesIcon,
  ProfileIcon,
} from '@/app/_ui/Icons'
import { signOut, useSession } from 'next-auth/react'
import React from 'react'
import { SessionType } from '../../../types'

const Navbar = ({ session }: SessionType) => {
  const pathname = usePathname()
  const router = useRouter()

  const logout = async () => {
    await signOut({ redirect: false })
    return router.push('/')
  }

  return (
    <>
      <div className='my-4 flex-1'>
        <ul>
          <li className={''}>
            <Link scroll={true} href={PATH.HOME} className={'c-sidebar-item'}>
              <HomeIcon selected={PATH.HOME === pathname} />
              <span
                className={clsx('px-4', {
                  'font-bold': PATH.HOME === pathname,
                })}
              >
                홈
              </span>
            </Link>
          </li>
          <li>
            <Link
              scroll={true}
              className={'c-sidebar-item'}
              href={PATH.EXPLORE}
            >
              <ExploreIcon
                selected={PATH.EXPLORE === pathname || PATH.SEARCH === pathname}
              />
              <span
                className={clsx('px-4', {
                  'font-bold':
                    PATH.EXPLORE === pathname || PATH.SEARCH === pathname,
                })}
              >
                탐색하기
              </span>
            </Link>
          </li>
          <li>
            <Link
              scroll={true}
              className={'c-sidebar-item'}
              href={PATH.MESSAGES}
            >
              <MessagesIcon
                selected={
                  PATH.MESSAGES === pathname || pathname.includes(PATH.MESSAGES)
                }
              />
              <span
                className={clsx('px-4', {
                  'font-bold':
                    PATH.MESSAGES === pathname ||
                    pathname.includes(PATH.MESSAGES),
                })}
              >
                쪽지
              </span>
            </Link>
          </li>
          {session?.user && (
            <li>
              <Link
                scroll={true}
                className={'c-sidebar-item'}
                href={`/${session.user.email}`}
              >
                <ProfileIcon selected={pathname === `/${session.user.email}`} />
                <span
                  className={clsx('px-4', {
                    'font-bold': pathname === `/${session.user.email}`,
                  })}
                >
                  프로필
                </span>
              </Link>
            </li>
          )}
        </ul>
        <div>
          <Link
            className={
              'c-btn-primary mt-4 h-[52px] w-[234px] rounded-[26px] text-[17px] font-bold shadow-md'
            }
            href={PATH.TWEET}
            scroll={false}
          >
            게시하기
          </Link>
        </div>
      </div>
      {/*로그인 했을 때 버튼*/}
      {session?.user && (
        <button
          onClick={logout}
          className={
            'mt-auth my-3 flex h-[66px] w-[258px] items-center rounded-[28px] p-3 hover:bg-gray_light'
          }
        >
          {session?.user?.image && (
            <ProfileImage
              alt={session.user.image}
              src={session.user.image}
              width={30}
            />
          )}
          <div className={'ml-3 text-left text-[14px]'}>
            <p className={'font-bold'}>{session?.user?.name}</p>
            <p>@{session?.user?.email}</p>
          </div>
        </button>
      )}
    </>
  )
}
export default Navbar
