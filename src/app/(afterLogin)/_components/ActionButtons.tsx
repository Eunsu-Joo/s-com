'use client'
import { MouseEventHandler, useState } from 'react'
import clsx from 'clsx'
import {
  CommentIcon,
  ExportIcon,
  FillLikedIcon,
  LikeIcon,
  RetweetIcon,
} from '@/app/_ui/Icons'
import { PostType } from '@/data'
import { useRouter } from 'next/navigation'
import { PATH } from '@/utils/path'

type ActionButtonsProps = {
  darkMode?: boolean
  post: PostType
}

const ActionButtons = ({ darkMode, post }: ActionButtonsProps) => {
  const router = useRouter()
  const { likes, retweets, comments } = post
  const [liked, setLiked] = useState(likes.liked)
  const [retweeted, setRetweeted] = useState(retweets.retweeted)
  const onClickComment: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation()
    router.push(PATH.TWEET, { scroll: false })
  }
  const onClickRetweet: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation()
    setRetweeted((prev) => !prev)
  }
  const onClickLike: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation()
    setLiked((prev) => !prev)
  }
  const onClickExport: MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.stopPropagation()
    const baseURL = process.env.NEXT_PUBLIC_BASE_URL
    try {
      await navigator.clipboard.writeText(
        baseURL + `/${post.user.id}/status/${post.postId}`
      )
      alert('클립보드에 링크가 복사되었습니다.')
    } catch (error: any) {
      alert('애러가 발생했습니다.')
    }
  }
  return (
    <div className={'flex h-6 w-full justify-between bg-inherit'}>
      <button
        className={clsx(
          'group flex items-center fill-foreground transition-all duration-100 hover:fill-primary hover:text-primary',
          darkMode && ['fill-white', 'text-white']
        )}
        onClick={onClickComment}
      >
        <div
          className={
            'flex h-6 w-6 items-center justify-center rounded-full group-hover:bg-primary_light'
          }
        >
          <CommentIcon />
        </div>
        <span className={'-mt-0.5 pl-1 text-[13px]'}>{comments}</span>
      </button>
      <button
        className={clsx(
          'group flex items-center fill-foreground transition-all duration-100 hover:fill-retweet hover:text-retweet',
          darkMode && [
            retweeted ? 'fill-retweet' : 'fill-white',
            retweeted ? 'text-retweet' : 'text-white',
          ]
        )}
        onClick={onClickRetweet}
      >
        <div
          className={
            'flex h-6 w-6 items-center justify-center rounded-full group-hover:bg-[rgba(0,186,124,0.1)]'
          }
        >
          <RetweetIcon />
        </div>

        <span className={'-mt-0.5 pl-1 text-[13px]'}>
          {retweets.retweetCount}
        </span>
      </button>
      <button
        className={clsx(
          'group flex items-center fill-foreground transition-all duration-100 hover:fill-like hover:text-like',
          darkMode && [
            liked ? 'fill-like' : 'fill-white',
            liked ? 'text-like' : 'text-white',
          ]
        )}
        onClick={onClickLike}
      >
        <div
          className={
            'flex h-6 w-6 items-center justify-center rounded-full group-hover:bg-[rgba(249,24,128,0.1)]'
          }
        >
          {liked ? <FillLikedIcon /> : <LikeIcon />}
        </div>
        <span className={'-mt-0.5 pl-1 text-[13px]'}>{likes.likeCount}</span>
      </button>

      <button
        className={clsx(
          'flex h-6 w-6 items-center justify-center rounded-full fill-foreground transition-all duration-100 hover:bg-primary_light hover:fill-primary hover:backdrop-opacity-30',
          darkMode && ['fill-white']
        )}
        onClick={onClickExport}
      >
        <ExportIcon />
      </button>
    </div>
  )
}
export default ActionButtons
