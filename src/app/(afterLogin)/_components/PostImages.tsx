'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { MouseEventHandler } from 'react'
import { PostType } from '@/data'

type PostImagesProps = {
  post: PostType
}
const PostImages = ({ post }: PostImagesProps) => {
  const pathname = usePathname()

  const preventClickEvent: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.stopPropagation()
  }
  if (pathname.includes('photo') || post.images.length === 1) {
    return (
      <Link
        href={`/${post.user.id}/status/${post.postId}/photo/${post.images[0].imageId}`}
        onClick={preventClickEvent}
        scroll={false}
      >
        <Image
          src={post.images[0].url}
          width={post.images[0].width}
          height={post.images[0].height}
          alt={post.images[0].name}
          className={'rounded-[16px] object-cover object-center'}
          style={{
            width: `${post.images[0].width}px`,
            height: `${post.images[0].height}px`,
          }}
        />
      </Link>
    )
  }

  if (post.images.length === 2) {
    return (
      <div
        className={
          'flex h-[290.25px] w-full gap-0.5 overflow-hidden rounded-[16px] bg-background'
        }
      >
        <Link
          href={`/${post.user.id}/status/${post.postId}/photo/${post.images[0].imageId}`}
          className={'relative flex-1 overflow-hidden'}
          onClick={preventClickEvent}
          scroll={false}
        >
          <Image
            src={post.images[0].url}
            fill={true}
            alt={post.images[0].name}
            className={'object-cover'}
            sizes={'auto'}
          />
        </Link>
        <Link
          href={`/${post.user.id}/status/${post.postId}/photo/${post.images[1].imageId}`}
          className={'relative flex-1 overflow-hidden'}
          onClick={preventClickEvent}
          scroll={false}
        >
          <Image
            src={post.images[1].url}
            fill={true}
            alt={post.images[1].name}
            className={'object-cover'}
            sizes={'auto'}
          />
        </Link>
      </div>
    )
  }

  if (post.images.length === 3) {
    return (
      <div
        className={
          'flex h-[290.25px] w-full gap-0.5 overflow-hidden rounded-[16px] bg-background'
        }
      >
        <Link
          href={`/${post.user.id}/status/${post.postId}/photo/${post.images[0].imageId}`}
          className={'relative flex-1 overflow-hidden'}
          onClick={preventClickEvent}
          scroll={false}
        >
          <Image
            src={post.images[0].url}
            fill={true}
            alt={post.images[0].name}
            className={'object-cover'}
            sizes={'auto'}
          />
        </Link>
        <div className={'flex flex-1 flex-col gap-0.5 outline-1'}>
          <Link
            href={`/${post.user.id}/status/${post.postId}/photo/${post.images[1].imageId}`}
            className={'relative flex-1'}
            onClick={preventClickEvent}
            scroll={false}
          >
            <Image
              src={post.images[1].url}
              fill={true}
              alt={post.images[1].name}
              className={'object-cover'}
              sizes={'auto'}
            />
          </Link>
          <Link
            href={`/${post.user.id}/status/${post.postId}/photo/${post.images[2].imageId}`}
            className={'relative flex-1'}
            onClick={preventClickEvent}
            scroll={false}
          >
            <Image
              src={post.images[2].url}
              fill={true}
              alt={post.images[2].name}
              className={'object-cover'}
              sizes={'auto'}
            />
          </Link>
        </div>
      </div>
    )
  }
  if (post.images.length === 4) {
    return (
      <div
        className={
          'flex h-[290.25px] w-full gap-0.5 overflow-hidden rounded-[16px] bg-background'
        }
      >
        <div className={'flex flex-1 flex-col gap-0.5 outline-1'}>
          <Link
            href={`/${post.user.id}/status/${post.postId}/photo/${post.images[0].imageId}`}
            className={'relative flex-1'}
            onClick={preventClickEvent}
            scroll={false}
          >
            <Image
              src={post.images[0].url}
              fill={true}
              alt={post.images[0].name}
              className={'object-cover'}
              sizes={'auto'}
            />
          </Link>
          <Link
            href={`/${post.user.id}/status/${post.postId}/photo/${post.images[1].imageId}`}
            className={'relative flex-1'}
            onClick={preventClickEvent}
            scroll={false}
          >
            <Image
              src={post.images[1].url}
              fill={true}
              alt={post.images[1].name}
              className={'object-cover'}
              sizes={'auto'}
            />
          </Link>
        </div>
        <div className={'flex flex-1 flex-col gap-0.5 outline-1'}>
          <Link
            href={`/${post.user.id}/status/${post.postId}/photo/${post.images[2].imageId}`}
            className={'relative flex-1'}
            onClick={preventClickEvent}
            scroll={false}
          >
            <Image
              src={post.images[2].url}
              fill={true}
              alt={post.images[2].name}
              className={'object-cover'}
              sizes={'auto'}
            />
          </Link>
          <Link
            href={`/${post.user.id}/status/${post.postId}/photo/${post.images[3].imageId}`}
            className={'relative flex-1'}
            onClick={preventClickEvent}
            scroll={false}
          >
            <Image
              src={post.images[3].url}
              fill={true}
              alt={post.images[3].name}
              className={'object-cover'}
              sizes={'auto'}
            />
          </Link>
        </div>
      </div>
    )
  }
}
export default PostImages
