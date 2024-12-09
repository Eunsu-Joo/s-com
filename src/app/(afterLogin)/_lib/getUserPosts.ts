import { QueryFunction } from '@tanstack/query-core'
import { PostType } from '@/types'

const getUserPosts: QueryFunction<
  PostType[],
  [string, userId: string]
> = async ({ queryKey }) => {
  const [, userId] = queryKey

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/user/${userId}/posts`,
    {
      next: {
        tags: ['posts', userId],
      },
      cache: 'no-cache',
    }
  )
  if (!res.ok) {
    throw new Error('애러가 발생했습니다.')
  }
  return res.json()
}
export default getUserPosts
