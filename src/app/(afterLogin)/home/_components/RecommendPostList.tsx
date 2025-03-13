import {
  InfiniteData,
  useInfiniteQuery,
  useSuspenseInfiniteQuery,
} from '@tanstack/react-query'
import { PostType } from '@/types'
import getRecommendPosts from '@/app/(afterLogin)/_lib/getRecommendPosts'
import { useInView } from 'react-intersection-observer'
import { Fragment, useEffect } from 'react'
import PostItem from '@/app/(afterLogin)/_components/PostItem'

const RecommendPostList = () => {
  const { data, isFetching, hasNextPage, fetchNextPage, isLoading, error } =
    useSuspenseInfiniteQuery<
      PostType[],
      object,
      InfiniteData<PostType[]>,
      [string, string],
      number
    >({
      queryKey: ['posts', 'recommend'],
      queryFn: getRecommendPosts,
      staleTime: 60 * 1000, //fresh->stale로 가는 시간
      gcTime: 300 * 1000,
      initialPageParam: 0,
      getNextPageParam: (lastPage) => lastPage.at(-1)?.postId,
    })
  const { ref, inView } = useInView()

  useEffect(() => {
    if (inView) {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      hasNextPage && !isFetching && fetchNextPage()
    }
  }, [inView, isFetching, hasNextPage])

  if (error) {
    return <div>애러발생</div>
  }
  if (!data) {
    return <div>데이터 없음.</div>
  }
  return (
    <>
      {/*{data.pages.map((page, index) => (*/}
      {/*  <Fragment key={index}>*/}
      {/*    {page.map((post: PostType, index: number) => (*/}
      {/*      <PostItem post={post} key={index} />*/}
      {/*    ))}*/}
      {/*  </Fragment>*/}
      {/*))}*/}
      {/*{!isFetching && <div className={'h-[40px]'} ref={ref} />}*/}
    </>
  )
}
export default RecommendPostList
