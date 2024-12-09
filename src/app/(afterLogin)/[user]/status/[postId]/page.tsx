import Title from '@/app/_ui/Title'
import getPost from '@/app/(afterLogin)/_lib/getPost'
import getComments from '@/app/(afterLogin)/_lib/getComments'
import PostDetail from '@/app/(afterLogin)/[user]/_components/PostDetail'
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query'

export type PostPropsType = {
  user: string
  postId: string
}

type DetailPageProps = {
  params: Promise<PostPropsType>
}
export default async function PostDetailPage({ params }: DetailPageProps) {
  const { user, postId } = await params
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery({
    queryKey: ['posts', postId],
    queryFn: getPost,
  })
  await queryClient.prefetchQuery({
    queryKey: ['comments', postId],
    queryFn: getComments,
  })
  const dehydratedState = dehydrate(queryClient)
  return (
    <section className={'border-grey_light border-l border-r'}>
      <Title title={'우편'} />
      <article>
        <HydrationBoundary state={dehydratedState}>
          <PostDetail user={user} postId={postId} />
        </HydrationBoundary>
      </article>
    </section>
  )
}
