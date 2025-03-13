'use client'
import { useQuery } from '@tanstack/react-query'
import getFollowingPosts from '@/app/(afterLogin)/_lib/getFollowingPosts'
import getSearch from '@/app/(afterLogin)/_lib/getSearch'
import { ParamsType } from '@/app/(afterLogin)/search/page'
import PostItem from '@/app/(afterLogin)/_components/PostItem'
import { PostType } from '@/types'
import Spinner from '@/app/_components/Spinner'
import Error from '@/app/_components/Error'

const SearchResult = ({ searchParams }: { searchParams: ParamsType }) => {
  const { data, isError, error, isLoading } = useQuery({
    queryKey: ['search', searchParams],
    queryFn: getSearch,
    staleTime: 60 * 1000, //fresh->stale로 가는 시간
    gcTime: 300 * 1000,
  })

  return (
    <article className={'mt-[140px]'}>
      {isLoading && <Spinner />}
      {isError && <Error />}
      {/*{data.map((post: PostType, index: number) => (*/}
      {/*  <PostItem post={post} key={index} />*/}
      {/*))}*/}
    </article>
  )
}
export default SearchResult
