'use client'
import { ChangeEvent, FormEvent, useRef, useState } from 'react'
import useTextarea from '@/hooks/useTextarea'
import useImagePreviews from '@/hooks/useImagePreviews'
import PreviewImageSlides from '@/app/(afterLogin)/_components/PreviewImageSlides'
import ProfileImage from '@/app/_ui/ProfileImage'
import { FileIcon } from '@/app/_ui/Icons'

import clsx from 'clsx'
import { PostType, SessionType } from '@/types'
import { InfiniteData, useQueryClient } from '@tanstack/react-query'

type PostFormProps = {
  smallSize?: boolean
  imageUpload?: boolean
} & SessionType
const PostForm = ({
  smallSize = false,
  imageUpload = true,
  session,
}: PostFormProps) => {
  const imageRef = useRef<HTMLInputElement | null>(null)
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)
  const { contents, onChange, setContents } = useTextarea(textareaRef)
  const { onChangeFiles, ondDeleteImages, previewImages, setPreviewImages } =
    useImagePreviews()
  const queryClient = useQueryClient()
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('content', contents)
    previewImages.forEach((item) => {
      item && formData.append('images', item.file)
    })
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`,
        {
          cache: 'no-cache',
          credentials: 'include',
          method: 'POST',
          body: formData,
        }
      )
      if (response.status === 201) {
        setContents('')
        setPreviewImages([])
        const newPost = await response.json()
        //   쿼리에 새로운 데이터 추가하는 작업.
        queryClient.setQueryData(
          ['posts', 'recommends'],
          (prevData: InfiniteData<PostType[]>) => {
            const shallow = {
              ...prevData,
              pages: [...prevData.pages],
            }
            shallow.pages[0] = [...shallow.pages[0]]
            shallow.pages[0].unshift(newPost)
            return shallow
          }
        )
      }
    } catch (error: any) {}
  }
  if (!session?.user) return null
  return (
    <form
      onSubmit={onSubmit}
      className={'border-b-grey_hover flex items-start border-b p-4'}
    >
      <ProfileImage
        src={session.user.image as string}
        alt={session.user.email as string}
      />
      <div className={'ml-3 flex-1'}>
        <textarea
          name='textarea'
          placeholder={'포스트를 입력해주세요.'}
          className={
            'h-auth w-full bg-background py-3 text-[20px] leading-6 text-foreground outline-0'
          }
          value={contents}
          onChange={onChange}
          ref={textareaRef}
        />
        {previewImages.length !== 0 && (
          <div
            style={{
              height: smallSize ? '176px' : '290px',
              width: smallSize ? '265px' : '514px',
            }}
          >
            <PreviewImageSlides
              images={previewImages}
              deleteAction={ondDeleteImages}
            />
          </div>
        )}
        <div className={'mt-4 flex items-center justify-between'}>
          <input
            type='file'
            hidden
            ref={imageRef}
            multiple={true}
            onChange={onChangeFiles}
          />
          <button
            onClick={() => imageRef.current && imageRef.current?.click()}
            className={clsx(
              'flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-0 transition-all hover:bg-primary_light',
              !imageUpload && 'invisible'
            )}
          >
            <FileIcon />
          </button>
          <button
            disabled={!previewImages.length && !contents}
            className={'c-btn-primary h-8 w-[94px] text-[15px] font-bold'}
          >
            게시하기
          </button>
        </div>
      </div>
    </form>
  )
}
export default PostForm
