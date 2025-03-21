import Link from 'next/link'
import { PATH } from '@/utils/path'
import { TrendType } from '@/types'

const TrendItem = ({ item }: { item: TrendType }) => {
  const { tagId, count, title } = item
  return (
    <Link
      className={'block h-[82px] px-3 py-4 hover:bg-gray_glow'}
      href={`${PATH.SEARCH}?q=${title}`}
      scroll={true}
    >
      <p className='text-grey text-[13px] leading-4'>실시간 트렌드</p>
      <p className={'mb-1 mt-0.5 text-[15px] font-bold leading-5'}>#{title}</p>
      <p className='text-grey text-[13px] font-light leading-4'>
        {count} &nbsp; posts
      </p>
    </Link>
  )
}
export default TrendItem
