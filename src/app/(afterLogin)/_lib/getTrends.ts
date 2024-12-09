import { SearchParamsType } from '@/app/(afterLogin)/search/page'

export default async function () {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/trends`, {
    next: {
      tags: ['posts', 'trends'],
    },
    cache: 'no-cache',
  })
  if (!res.ok) {
    throw new Error('애러가 발생했습니다.')
  }
  return res.json()
}
