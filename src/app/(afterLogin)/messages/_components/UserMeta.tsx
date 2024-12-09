'use client'
import BackButton from '@/app/_ui/BackButton'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import ProfileImage from '@/app/_ui/ProfileImage'

type UserProps = {
  user: any
}

const UserMeta = ({ user }: UserProps) => {
  const pathname = usePathname()
  const username = pathname.split('/').filter(Boolean)[1].split('-')[0]
  return (
    <Link
      href={`/${username}`}
      className={
        'flex flex-col items-center px-4 pb-12 pt-5 transition-all hover:bg-gray_glow'
      }
    >
      <ProfileImage src={user.image} alt={user.id} width={64} />
      <h4 className={'text-[20px] font-bold'}>{user.name}</h4>
      <p className={'text-[15px]'}>@{user.email}</p>
    </Link>
  )
}
export default UserMeta
