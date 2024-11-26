import TrendItem from '@/app/(afterLogin)/_components/TrendItem'
import { usePathname } from 'next/navigation'
import { PATH } from '@/utils/path'
import { trendList } from '@/data'

const TrendSection = () => {
  const pathname = usePathname()
  if (pathname === PATH.EXPLORE) return null
  return (
    <div
      style={{ marginTop: pathname === PATH.SEARCH ? '4px' : '60px' }}
      className={`bg-gray_light rounded-2xl py-3`}
    >
      <h3 className={'mb-3 px-4 text-[20px] font-bold'}>나를 위한 트렌드</h3>
      {trendList.map((item, index) => (
        <TrendItem item={item} key={index} />
      ))}
    </div>
  )
}
export default TrendSection
