'use client'
import ProfileImage from '@/app/_ui/ProfileImage'
import { usePathname } from 'next/navigation'
import Title from '@/app/_ui/Title'

const UserUndefined = () => {
  const user = usePathname().split('/')[1],
    koreanRegex = /[ㄱ-ㅎㅏ-ㅣ가-힣]/
  if (koreanRegex.test(decodeURI(user))) {
    return (
      <article className={'px-3'}>
        <Title title={'프로필'} />
        <div className={'mx-[80px] my-[32px]'}>
          <p className={'font-sans text-[31px] font-bold'}>
            다시 검색해 보세요.
          </p>
        </div>
      </article>
    )
  }
  return (
    <>
      <Title title={'프로필'} />
      <div className={'relative items-center font-sans'}>
        <div className={'h-[200px] w-full bg-gray_light'}></div>
      </div>
      <div>
        <div className={'mx-5 -translate-y-1/2 items-center'}>
          <ProfileImage src={null} width={132} />
          <h4 className={'ml-5 mt-3 text-[20px] font-bold'}>@{user}</h4>
        </div>
        <p className={'text-center font-sans text-[31px] font-bold'}>
          사용자가 존재하지 않습니다.
        </p>
      </div>
    </>
  )
}
export default UserUndefined
