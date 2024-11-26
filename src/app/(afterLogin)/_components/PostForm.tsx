'use client'
import { ChangeEvent, FormEvent, useRef, useState } from 'react'
import useTextarea from '@/hooks/useTextarea'
import useImagePreviews from '@/hooks/useImagePreviews'
import PreviewImageSlides from '@/app/(afterLogin)/_components/PreviewImageSlides'
import ProfileImage from '@/app/_ui/ProfileImage'
import { FileIcon } from '@/app/_ui/Icons'
import { user } from '@/data'
import clsx from 'clsx'

type PostFormProps = {
  smallSize?: boolean
  imageUpload?: boolean
}
const PostForm = ({ smallSize = false, imageUpload = true }: PostFormProps) => {
  const imageRef = useRef<HTMLInputElement | null>(null)
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)
  const { contents, onChange } = useTextarea(textareaRef)
  const { onChangeFiles, ondDeleteImages, previewImages } = useImagePreviews()
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }
  return (
    <form
      onSubmit={onSubmit}
      className={'border-b-grey_hover flex items-start border-b p-4'}
    >
      <ProfileImage src={user.image} alt={user.id} />
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
