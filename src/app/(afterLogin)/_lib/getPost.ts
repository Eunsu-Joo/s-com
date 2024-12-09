import { SearchParamsType } from '@/app/(afterLogin)/search/page'
import { QueryFunction } from '@tanstack/query-core'
import { PostType } from '@/types'

const getPost: QueryFunction<PostType, [string, postId: string]> = async ({
  queryKey,
}) => {
  const [, postId] = queryKey

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/${postId}`,
    {
      next: {
        tags: ['posts', postId],
      },
    }
  )
  if (!res.ok) {
    throw new Error('애러가 발생했습니다.')
  }
  return res.json()
}
export default getPost
