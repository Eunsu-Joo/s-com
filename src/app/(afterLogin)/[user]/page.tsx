import UserInfo from '@/app/(afterLogin)/[user]/_components/UserInfo'
import {
  QueryClient,
  dehydrate,
  HydrationBoundary,
} from '@tanstack/react-query'
import getUser from '@/app/(afterLogin)/_lib/getUser'
import getUserPosts from '@/app/(afterLogin)/_lib/getUserPosts'
import UserPosts from '@/app/(afterLogin)/[user]/_components/UserPosts'

type UserPageProps = {
  params: Promise<{
    user: string
  }>
}
export type UserPropsType = {
  userId: string
}
export default async function UserPage({ params }: UserPageProps) {
  const queryClient = new QueryClient()
  // 서버에서 로딩없이 데이터를 미리 가져와서 캐싱함.
  const { user } = await params

  await queryClient.prefetchQuery({
    queryKey: ['user', user],
    queryFn: getUser,
  })
  await queryClient.prefetchQuery({
    queryKey: ['posts', user],
    queryFn: getUserPosts,
  })
  // queryClient에 저장된 데이터를 직렬화하여 클라이언트에 전달하기 위해 필요함.
  const dehydratedState = dehydrate(queryClient)
  return (
    <section className={'min-h-screen border-b border-l border-r'}>
      <HydrationBoundary state={dehydratedState}>
        <UserInfo userId={user} />
        <UserPosts userId={user} />
      </HydrationBoundary>
    </section>
  )
}
