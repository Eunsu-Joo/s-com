'use client'
import PostItem from '@/app/(afterLogin)/_components/PostItem'
import { useQueries, useQuery } from '@tanstack/react-query'
import { PostPropsType } from '@/app/(afterLogin)/[user]/status/[postId]/page'
import getPost from '@/app/(afterLogin)/_lib/getPost'
import getComments from '@/app/(afterLogin)/_lib/getComments'
import PostForm from '@/app/(afterLogin)/_components/PostForm'
import CommentItem from '@/app/(afterLogin)/_components/CommentItem'

const PostDetail = ({ postId, user }: PostPropsType) => {
  const [postResult, commentsResult] = useQueries({
    queries: [
      {
        queryKey: ['posts', postId],
        queryFn: getPost,
        staleTime: 60 * 1000, //fresh->stale로 가는 시간
        gcTime: 300 * 1000,
      },
      {
        queryKey: ['comments', postId],
        queryFn: getComments,
        staleTime: 60 * 1000, //fresh->stale로 가는 시간
        gcTime: 300 * 1000,
      },
    ],
  })
  if (postResult.isLoading || commentsResult.isLoading) {
    return (
      <div
        className={
          'min-h-screen border-b border-t pt-4 text-center font-sans text-xl'
        }
      >
        <p>Loading...</p>
      </div>
    )
  }
  if (postResult.error || commentsResult.error) {
    return (
      <div
        className={
          'min-h-screen border-b border-t pt-4 text-center font-sans text-xl'
        }
      >
        <p>애러가 발생했습니다.</p>
      </div>
    )
  }
  if (!postResult.data || !commentsResult.data) {
    return <div>데이터 없음</div>
  }
  return (
    <>
      <PostItem post={postResult.data} />
      <PostForm imageUpload={false} />
      {commentsResult.data.length === 0 ? (
        <div>댓글이 없습니다.</div>
      ) : (
        commentsResult.data.map((post, index) => (
          <CommentItem post={post} key={index} />
        ))
      )}
    </>
  )
}
export default PostDetail
