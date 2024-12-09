import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query'
import GetRecommendPosts from '@/app/(afterLogin)/_lib/getRecommendPosts'
import PostList from '@/app/(afterLogin)/home/_components/PostList'
import Spinner from '@/app/_components/Spinner'

const PostSuspense = async () => {
  const queryClient = new QueryClient()
  // 서버에서 로딩없이 데이터를 미리 가져와서 캐싱함.
  await queryClient.prefetchInfiniteQuery({
    queryKey: ['posts', 'recommend'],
    queryFn: GetRecommendPosts,
    initialPageParam: 0,
  })
  const dehydratedState = dehydrate(queryClient)
  return (
    <HydrationBoundary state={dehydratedState}>
      <PostList />
    </HydrationBoundary>
  )
}
export default PostSuspense