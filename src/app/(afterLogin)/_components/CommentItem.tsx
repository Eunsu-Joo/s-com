'use client'
import Link from 'next/link'
import ProfileImage from '@/app/_ui/ProfileImage'
import dayjs from 'dayjs'
import ActionButtons from '@/app/(afterLogin)/_components/ActionButtons'
import { usePathname, useRouter } from 'next/navigation'
import { PostType } from '@/data'

type CommentItemType = {
  post: PostType
}

const CommentItem = ({ post }: CommentItemType) => {
  const router = useRouter()
  const pathname = usePathname()
  return (
    <div
      className={
        'border-grey_hover hover:bg-grey_hover flex cursor-pointer items-start border-b p-4 transition'
      }
      onClick={() =>
        router.push(`/${post.user.id}/status/${post.postId}`, {
          scroll: true,
        })
      }
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
        <p className={'font-sans'}>
          <span className={'text-primary'}>@{pathname.split('/')[1]} </span>
          님에게 보내는 댓글
        </p>
        <div className={'mb-3 mt-1 leading-5'}>{post.contents}</div>
        <div className={'mt-3'}>
          <ActionButtons post={post} />
        </div>
      </div>
    </div>
  )
}
export default CommentItem
