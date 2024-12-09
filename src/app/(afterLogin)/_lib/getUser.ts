import { SearchParamsType } from '@/app/(afterLogin)/search/page'
import { QueryFunction } from '@tanstack/query-core'
import { UserType } from '@/types'

const getUser: QueryFunction<UserType, [string, userId: string]> = async ({
  queryKey,
}) => {
  const [, userId] = queryKey

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/user/${userId}`,
    {
      next: {
        tags: ['user', userId],
      },
      cache: 'no-cache',
    }
  )
  if (!res.ok) {
    throw new Error('애러가 발생했습니다.')
  }
  return res.json()
}
export default getUser
