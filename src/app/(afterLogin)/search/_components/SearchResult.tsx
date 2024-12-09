'use client'
import { useQuery } from '@tanstack/react-query'
import getFollowingPosts from '@/app/(afterLogin)/_lib/getFollowingPosts'
import getSearch from '@/app/(afterLogin)/_lib/getSearch'
import { ParamsType } from '@/app/(afterLogin)/search/page'
import PostItem from '@/app/(afterLogin)/_components/PostItem'
import { PostType } from '@/types'
import Spinner from '@/app/_components/Spinner'

const SearchResult = ({ searchParams }: { searchParams: ParamsType }) => {
  const { data, isError, error, isLoading } = useQuery({
    queryKey: ['posts', 'search', searchParams],
    queryFn: getSearch,
    staleTime: 60 * 1000, //fresh->stale로 가는 시간
    gcTime: 300 * 1000,
  })
  if (isLoading) {
    return (
      <article className={'mt-[128px] min-h-screen'}>
        <Spinner />
      </article>
    )
  }
  if (isError) {
    return <div>애러발생</div>
  }
  return (
    <article className={'mt-[128px]'}>
      {data.map((post: PostType, index: number) => (
        <PostItem post={post} key={index} />
      ))}
    </article>
  )
}
export default SearchResult
