'use client'
import ActionButtons from '@/app/(afterLogin)/_components/ActionButtons'
import { useRouter } from 'next/navigation'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/ko'
import ProfileImage from '@/app/_ui/ProfileImage'
import PostImages from '@/app/(afterLogin)/_components/PostImages'
import Link from 'next/link'
import { PostType } from '@/types'

dayjs.locale('ko')
dayjs.extend(relativeTime)

type PostItemProps = {
  post: PostType
  noImage?: boolean
}

const PostItem = ({ post, noImage }: PostItemProps) => {
  const router = useRouter()
  const onClickItem = () => {
    router.push(`/${post.user.id}/status/${post.postId}`, {
      scroll: true,
    })
  }
  return (
    <div
      className={
        'flex cursor-pointer items-start border-b p-4 transition hover:bg-gray_light'
      }
      onClick={onClickItem}
    >
      <Link
        href={`/${post.user.id}`}
        scroll={true}
        onClick={(e) => e.stopPropagation()}
      >
        <ProfileImage src={post.user.image} alt={post.user.id} />
      </Link>
      <div className={'ml-3 flex flex-1 flex-col'}>
        <div className={'flex items-center'}>
          <Link
            href={`/${post.user.id}`}
            onClick={(e) => e.stopPropagation()}
            className={'flex items-center'}
            scroll={true}
          >
            <span className={'font-bold hover:underline'}>
              {post.user.nickname}
            </span>
            &nbsp;
            <p>@{post.user.id}</p>
            &nbsp; · &nbsp;
          </Link>
          <span className={'text-grey hover:underline'}>
            {dayjs(post.createdAt).fromNow(true)}
          </span>
        </div>
        <div className={'mb-3 mt-1 leading-5'}>{post.contents}</div>
        {!noImage && <PostImages post={post} />}
        <div className={'mt-3'}>
          <ActionButtons post={post} />
        </div>
      </div>
    </div>
  )
}
export default PostItem
