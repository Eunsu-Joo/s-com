'use client'
import ProfileImage from '@/app/_ui/ProfileImage'
import { UserType } from '@/types'
import { MouseEventHandler, useState } from 'react'
import { useRouter } from 'next/navigation'
import clsx from 'clsx'

type FollowItem = {
  item: UserType
  isLogin: boolean
}
const FollowItem = ({ item, isLogin }: FollowItem) => {
  const router = useRouter()
  const [isFollowing, setIsFollowing] = useState(item.isFollowing)
  const followAction: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation()
    if (isLogin) {
      setIsFollowing((prev) => !prev)
    } else {
      router.push('/', { scroll: true })
    }
  }
  const navigateToProfile = () => {
    router.push(`/${item.id}`, { scroll: true })
  }
  return (
    <div
      className={'flex cursor-pointer items-center justify-between py-3'}
      onClick={navigateToProfile}
    >
      <div className={'flex'}>
        {item.image && <ProfileImage src={item.image} alt={item.nickname} />}
        <div className={'ml-3'}>
          <p className={'text-[15px] font-bold leading-5 hover:underline'}>
            {item.nickname}
          </p>
          <p className={'text-grey text-[13px] font-bold leading-4'}>
            @{item.id}
          </p>
        </div>
      </div>
      <button
        className={clsx(
          'ml-auth h-[32px] w-[76px]',
          isFollowing ? 'c-btn-background' : 'c-btn-foreground'
        )}
        onClick={followAction}
      >
        팔로우
      </button>
    </div>
  )
}
export default FollowItem
