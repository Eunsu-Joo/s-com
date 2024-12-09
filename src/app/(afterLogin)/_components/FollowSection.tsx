'use client'
import FollowItem from '@/app/(afterLogin)/_components/FollowItem'
import { SessionType, UserType } from '@/types/index'
import { useQuery } from '@tanstack/react-query'
import getFollowRecommend from '@/app/(afterLogin)/_lib/getFollowRecommend'
import Spinner from '@/app/_components/Spinner'

const FollowSection = ({ session }: SessionType) => {
  const { data, isError, error, isLoading } = useQuery({
    queryKey: ['followRecommend'],
    queryFn: getFollowRecommend,
    staleTime: 0, //fresh->stale로 가는 시간
    // gcTime: 0,
    enabled: !!session,
  })
  if (!session) return null
  if (isError) {
    return <div>애러발생</div>
  }
  if (isLoading) {
    return (
      <div className={'mt-3 rounded-2xl bg-gray_light px-4 py-3'}>
        <Spinner />
      </div>
    )
  }

  return (
    <div className={'mt-3 rounded-2xl bg-gray_light px-4 py-3'}>
      <h3 className={'mb-3 px-4 text-[20px] font-bold'}>팔로우 추천</h3>
      {data.map((item: UserType, index: number) => (
        <FollowItem item={item} key={index} isLogin={!!session} />
      ))}
    </div>
  )
}
export default FollowSection
