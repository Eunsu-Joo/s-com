'use client'
import ProfileImage from '@/app/_ui/ProfileImage'
import Link from 'next/link'
import { MailIcon } from '@/app/_ui/Icons'
import { MouseEventHandler, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import getUser from '@/app/(afterLogin)/_lib/getUser'
import { UserType } from '@/types'
import { UserPropsType } from '@/app/(afterLogin)/[user]/page'
import UserUndefined from '@/app/(afterLogin)/[user]/_components/UserUndefined'
import Title from '@/app/_ui/Title'
import Spinner from '@/app/_components/Spinner'

const myData = {
  name: 'eunsu',
}

const UserInfo = ({ userId }: UserPropsType) => {
  const [followed, setFollowed] = useState(false)

  const {
    data: user,
    error,
    isLoading,
  } = useQuery<UserType, object, UserType, [string, userId: string]>({
    queryKey: ['user', userId],
    queryFn: getUser,
    staleTime: 60 * 1000, //fresh->stale로 가는 시간
    gcTime: 300 * 1000,
  })
  if (isLoading) {
    return <Spinner />
  }
  if (error) {
    // 계정이 존재하지 않음.
    return <UserUndefined />
  }

  if (!user) return null
  const followAction: MouseEventHandler<HTMLButtonElement> = (e) => {
    setFollowed((prev) => !prev)
  }
  return (
    <div className={'px-3 pb-6'}>
      <Title title={user.id} />
      <div className={'flex flex-1 items-center py-4 font-sans'}>
        <ProfileImage src={user.image} alt={user.id} width={132} />
        <div className={'mx-5'}>
          <h4 className={'text-[20px] font-bold'}>{user.nickname}</h4>
          <p className={'text-[15px]'}>@{user.id}</p>
        </div>
        <Link
          href={`messages/${user.id}-${myData.name}`}
          className={
            'mr-2 flex h-[34px] w-[34px] items-center justify-center rounded-full border transition-all hover:bg-gray_light'
          }
        >
          <MailIcon />
        </Link>
        <button
          onClick={followAction}
          className={`${followed ? 'c-btn-background' : 'c-btn-foreground'} h-[34px] px-4`}
        >
          {followed ? '팔로잉' : '팔로우'}
        </button>
      </div>
      <p className={'mt-4 block'}>
        <span>{user.followerNumber} 팔로워</span>
        <span className={'pl-2'}> {user.followNumber} 팔로우 중</span>
      </p>
    </div>
  )
}
export default UserInfo
