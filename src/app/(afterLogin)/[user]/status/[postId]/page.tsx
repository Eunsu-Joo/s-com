import Title from '@/app/_ui/Title'
import PostItem from '@/app/(afterLogin)/_components/PostItem'
import { post, postList } from '@/data'
import PostForm from '@/app/(afterLogin)/_components/PostForm'
import CommentItem from '@/app/(afterLogin)/_components/CommentItem'

export default function PostDetailPage() {
  return (
    <section className={'border-grey_light border-l border-r'}>
      <Title title={'우편'} />
      <article>
        <PostItem post={post} />
        <PostForm imageUpload={false} />
        {postList.map((post, index) => (
          <CommentItem post={post} key={index} />
        ))}
      </article>
    </section>
  )
}
