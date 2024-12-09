'use client'
import TrendItem from '@/app/(afterLogin)/_components/TrendItem'
import { usePathname } from 'next/navigation'
import { PATH } from '@/utils/path'
import { SessionType, TrendType } from '@/types/index'
import { useQuery } from '@tanstack/react-query'
import getTrends from '@/app/(afterLogin)/_lib/getTrends'
import Spinner from '@/app/_components/Spinner'

const TrendSection = ({ session }: SessionType) => {
  const pathname = usePathname()
  const { data, isError, error, isLoading } = useQuery({
    queryKey: ['trends'],
    queryFn: getTrends,
    staleTime: 0, //fresh->stale로 가는 시간
    // gcTime: 300 * 1000,
    enabled: !!session,
  })
  if (pathname === PATH.EXPLORE) return null
  if (isError) {
    return <div>애러발생</div>
  }
  if (isLoading) {
    return (
      <div
        style={{ marginTop: pathname === PATH.SEARCH ? '4px' : '60px' }}
        className={`rounded-2xl bg-gray_light py-3`}
      >
        <Spinner />
      </div>
    )
  }

  return (
    <div
      style={{ marginTop: pathname === PATH.SEARCH ? '4px' : '60px' }}
      className={`rounded-2xl bg-gray_light py-3`}
    >
      <h3 className={'mb-3 px-4 text-[20px] font-bold'}>나를 위한 트렌드</h3>
      {session ? (
        data.map((item: TrendType, index: number) => (
          <TrendItem item={item} key={index} />
        ))
      ) : (
        <p className={'px-4 font-sans text-[14px]'}>
          트렌드를 가져올 수 없습니다.
        </p>
      )}
    </div>
  )
}
export default TrendSection
