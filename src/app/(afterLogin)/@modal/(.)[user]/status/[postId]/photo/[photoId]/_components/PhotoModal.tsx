'use client'
import { CloseForegroundIcon } from '@/app/_ui/Icons'
import ActionButtons from '@/app/(afterLogin)/_components/ActionButtons'
import PostItem from '@/app/(afterLogin)/_components/PostItem'
import PostForm from '@/app/(afterLogin)/_components/PostForm'
import React from 'react'
import { usePathname, useRouter } from 'next/navigation'
import PhotoModalSlides from '@/app/(afterLogin)/@modal/(.)[user]/status/[postId]/photo/[photoId]/_components/PhotoModalSlides'
import CommentItem from '@/app/(afterLogin)/_components/CommentItem'
import { PostPropsType } from '@/app/(afterLogin)/[user]/status/[postId]/page'
import getComments from '@/app/(afterLogin)/_lib/getComments'
import { useQueries } from '@tanstack/react-query'
import getPost from '@/app/(afterLogin)/_lib/getPost'

const PhotoModal = ({ user, postId }: PostPropsType) => {
  const router = useRouter()
  const [postResult, commentsResult] = useQueries({
    queries: [
      {
        queryKey: ['posts', postId],
        queryFn: getPost,
        staleTime: 60 * 1000, //fresh->stale로 가는 시간
        gcTime: 300 * 1000,
      },
      {
        queryKey: ['comments', postId],
        queryFn: getComments,
        staleTime: 60 * 1000, //fresh->stale로 가는 시간
        gcTime: 300 * 1000,
      },
    ],
  })
  if (postResult.isLoading || commentsResult.isLoading) {
    return <div>Loading...</div>
  }
  if (postResult.error || commentsResult.error) {
    return <div>애러발생</div>
  }
  if (!postResult.data || !commentsResult.data) {
    return <div>데이터 없음</div>
  }
  const closeModal = () => router.back()
  const post = postResult.data

  return (
    <div
      className='fixed inset-0 z-20 flex h-full w-screen flex-row bg-black bg-opacity-95 transition-opacity'
      id={'imageModal'}
    >
      <button
        onClick={closeModal}
        className='absolute left-4 top-4 z-10 flex h-[34px] w-[34px] cursor-pointer items-center justify-center rounded-[17px] border-0 hover:bg-stone-800'
      >
        <CloseForegroundIcon />
      </button>
      <section
        onClick={closeModal}
        className='c-center relative flex-1 flex-col'
      >
        <PhotoModalSlides images={post.images} />
        <div
          className={
            'mx-auth absolute bottom-0 left-1/2 flex w-[600px] -translate-x-1/2 justify-between py-3'
          }
        >
          <ActionButtons darkMode={true} post={post} />
        </div>
      </section>
      <div
        className={
          'border-l-grey_light w-[350px] overflow-y-auto border-l bg-background'
        }
      >
        <PostItem post={post} noImage={true} />

        <p className={'pl-6 pt-1 font-sans'}>
          Replying to <span className={'text-primary'}>@{post.user.id}</span>
        </p>
        <PostForm smallSize />
        {commentsResult.data.map((post, index) => (
          <CommentItem post={post} key={index} />
        ))}
      </div>
    </div>
  )
}
export default PhotoModal
