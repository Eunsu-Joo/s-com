'use client'
import ProfileImage from '@/app/_ui/ProfileImage'
import { UserType } from '@/data'
import Link from 'next/link'
import { MailIcon } from '@/app/_ui/Icons'
import { MouseEventHandler, useState } from 'react'

const myData = {
  name: 'eunsu',
}
type UserInfoType = {
  user: UserType
}
const UserInfo = ({ user }: UserInfoType) => {
  const [followed, setFollowed] = useState(false)
  const followAction: MouseEventHandler<HTMLButtonElement> = (e) => {
    setFollowed((prev) => !prev)
  }
  return (
    <article className={'py-4'}>
      <div className={'flex flex-1 items-center font-sans'}>
        <ProfileImage src={user.image} alt={user.id} width={132} />
        <div className={'mx-5'}>
          <h4 className={'text-[20px] font-bold'}>{user.nickname}</h4>
          <p className={'text-[15px]'}>@{user.id}</p>
        </div>
        <Link
          href={`messages/${user.id}-${myData.name}`}
          className={
            'hover:bg-gray_light mr-2 flex h-[34px] w-[34px] items-center justify-center rounded-full border transition-all'
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
    </article>
  )
}
export default UserInfo
