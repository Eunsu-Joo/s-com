import {
  InfiniteData,
  useInfiniteQuery,
  useSuspenseInfiniteQuery,
} from '@tanstack/react-query'
import { PostType } from '@/types'
import getFollowingPosts from '@/app/(afterLogin)/_lib/getFollowingPosts'
import { useInView } from 'react-intersection-observer'
import { Fragment, useEffect } from 'react'
import PostItem from '@/app/(afterLogin)/_components/PostItem'

const FollowingPostList = () => {
  const {
    data,
    isError,
    isFetching,
    hasNextPage,
    fetchNextPage,
    isLoading,
    error,
  } = useSuspenseInfiniteQuery<
    PostType[],
    object,
    InfiniteData<PostType[]>,
    [string, string],
    number
  >({
    queryKey: ['posts', 'following'],
    queryFn: getFollowingPosts,
    staleTime: 60 * 1000, //fresh->stale로 가는 시간
    gcTime: 300 * 1000,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      return lastPage ? lastPage.at(-1)?.postId : false
    },
  })
  const { ref, inView } = useInView()

  useEffect(() => {
    if (inView) {
      hasNextPage && !isFetching && fetchNextPage()
    }
  }, [inView, isFetching, hasNextPage])
  console.log(isLoading)
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
export default FollowingPostList
