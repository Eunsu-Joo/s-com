import Title from '@/app/_ui/Title'
import Tab from '@/app/(afterLogin)/home/_components/Tab'
import PostForm from '@/app/(afterLogin)/_components/PostForm'
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query'
import PostSuspense from '@/app/(afterLogin)/home/_components/PostSuspense'
import GetRecommendPosts from '@/app/(afterLogin)/_lib/getRecommendPosts'
import TabContext from '@/app/(afterLogin)/home/_components/TabContext'
import Spinner from '@/app/_components/Spinner'
import { auth } from '@/auth'
import { Suspense } from 'react'
import PageLoading from '@/app/_components/PageLoading'

export default async function MainPage() {
  // queryClient에 저장된 데이터를 직렬화하여 클라이언트에 전달하기 위해 필요함.
  const session = await auth()
  return (
    <section className={'border-grey_light border'}>
      <TabContext>
        <Tab />
        <article className={'mt-[105px] border-t'}>
          <PostForm session={session} />
          <Suspense fallback={<PageLoading />}>
            <PostSuspense />
          </Suspense>
        </article>
      </TabContext>
    </section>
  )
}
