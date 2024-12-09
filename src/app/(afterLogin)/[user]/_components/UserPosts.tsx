'use client'
import { UserPropsType } from '@/app/(afterLogin)/[user]/page'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { PostType, UserType } from '@/types'
import getUserPosts from '@/app/(afterLogin)/_lib/getUserPosts'
import PostItem from '@/app/(afterLogin)/_components/PostItem'
import Spinner from '@/app/_components/Spinner'

const UserPosts = ({ userId }: UserPropsType) => {
  const queryClient = useQueryClient()
  const userData = queryClient.getQueryData(['user', userId])
  const { data, isError, error, isLoading } = useQuery<
    PostType[],
    object,
    PostType[],
    [string, userId: string]
  >({
    queryKey: ['posts', userId],
    queryFn: getUserPosts,
    staleTime: 60 * 1000, //fresh->stale로 가는 시간
    gcTime: 300 * 1000,
    enabled: !!userData,
  })
  if (isLoading) {
    return <Spinner />
  }
  if (error) {
    return <div>애러발생</div>
  }
  if (!data) {
    return null
  }

  return (
    <div className={'border-t'}>
      {data.length === 0 ? (
        <p className={'pt-6 text-center font-sans text-[20px] font-bold'}>
          포스트가 없습니다.
        </p>
      ) : (
        data.map((post: PostType, index: number) => (
          <PostItem post={post} key={index} />
        ))
      )}
    </div>
  )
}
export default UserPosts
