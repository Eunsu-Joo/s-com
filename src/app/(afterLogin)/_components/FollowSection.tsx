import FollowItem from '@/app/(afterLogin)/_components/FollowItem'
import { followRecommendList } from '@/data'

const FollowSection = () => {
  return (
    <div className={'bg-gray_light mt-3 rounded-2xl px-4 py-3'}>
      <h3 className={'mb-3 px-4 text-[20px] font-bold'}>팔로우 추천</h3>
      {followRecommendList.map((item, index) => (
        <FollowItem item={item} key={index} />
      ))}
    </div>
  )
}
export default FollowSection
