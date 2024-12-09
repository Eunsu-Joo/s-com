import { SearchParamsType } from '@/app/(afterLogin)/search/page'

type GetSearchProps = {
  queryKey: any
}

export default async function ({ queryKey }: GetSearchProps) {
  const [, , searchParams] = queryKey

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/search/${searchParams.q}?${searchParams.toString()}`,
    {
      next: {
        tags: ['posts', 'search', searchParams],
      },
      cache: 'no-cache',
    }
  )
  if (!res.ok) {
    throw new Error('애러가 발생했습니다.')
  }
  return res.json()
}
