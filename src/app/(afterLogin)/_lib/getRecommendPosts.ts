import { redirect } from 'next/navigation'

type Props = {
  pageParam: number
}
export default async function ({ pageParam }: Props) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/postsRecommend?cursor=${pageParam}`,
    {
      next: {
        tags: ['posts', 'recommend'],
      },
    }
  )
  if (!res.ok) {
    throw new Error('애러가 발생했습니다.')
  }
  return res.json()
}