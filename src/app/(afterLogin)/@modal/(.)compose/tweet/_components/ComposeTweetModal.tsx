'use client'
import ModalContainer from '@/app/_components/ModalContainer'
import Image from 'next/image'
import PostForm from '@/app/(afterLogin)/_components/PostForm'
import { ChangeEvent, FormEvent, useRef, useState } from 'react'
import logo from '../../../../../../../public/logo.png'
import PreviewImageSlides from '@/app/(afterLogin)/_components/PreviewImageSlides'
import useTextarea from '@/hooks/useTextarea'
import useImagePreviews from '@/hooks/useImagePreviews'
import Link from 'next/link'
import dayjs from 'dayjs'
import 'dayjs/locale/ko'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.locale('ko')
dayjs.extend(relativeTime)
const ComposeTweetModal = () => {
  const imageRef = useRef<HTMLInputElement | null>(null)
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)
  const { contents, onChange } = useTextarea(textareaRef)
  const { onChangeFiles, ondDeleteImages, previewImages } = useImagePreviews()
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(contents, imageRef.current)
  }
  return (
    <ModalContainer>
      {/*/!*댓글일 때 *!/*/}
      {/*<div className={'relative mt-6 flex items-center px-4'}>*/}
      {/*  <span*/}
      {/*    className={*/}
      {/*      'absolute left-[34px] top-1/2 inline-block h-[34px] w-[2px] bg-grey_hover'*/}
      {/*    }*/}
      {/*  />*/}
      {/*  <Image*/}
      {/*    src={logo}*/}
      {/*    width={40}*/}
      {/*    height={40}*/}
      {/*    className={'self-start rounded-full'}*/}
      {/*    alt={'프로필이미지'}*/}
      {/*  />*/}
      {/*  <div className={'ml-4 font-sans text-[15px]'}>*/}
      {/*    <span className={'font-bold'}>holicholicpop</span>*/}
      {/*    &nbsp;*/}
      {/*    <span className={'text-grey'}>@holicholicpop</span>*/}
      {/*    &nbsp; · &nbsp;*/}
      {/*    <span className={'text-grey'}>{dayjs(new Date()).fromNow(true)}</span>*/}
      {/*    <p className={'mt-1 leading-5'}>*/}
      {/*      내용내용내용내용내용내용내용용내용내용*/}
      {/*    </p>*/}
      {/*    <p className={'pt-2'}>*/}
      {/*      Replay to <span className={'text-primary'}>@holicholicpop</span>*/}
      {/*    </p>*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*/!*댓글 달 때*!/*/}
      <form
        onSubmit={onSubmit}
        className={'relative mt-2 flex min-h-[inherit] items-start p-4'}
      >
        <div className={'mr-3 flex items-center'}>
          <Image
            src={logo}
            width={40}
            height={40}
            className={'rounded-full'}
            alt={'프로필이미지'}
          />
        </div>
        <div className={'flex-1'}>
          <textarea
            name='textarea'
            placeholder={'포스트를 입력해주세요.'}
            id='area'
            autoFocus={true}
            className={
              'h-auth w-full bg-inherit py-3 text-[20px] leading-6 text-foreground outline-0'
            }
            value={contents}
            onChange={onChange}
            ref={textareaRef}
          />

          {previewImages.length !== 0 && (
            <div style={{ width: '514px', height: '290px' }}>
              <PreviewImageSlides
                images={previewImages}
                deleteAction={ondDeleteImages}
              />
            </div>
          )}

          <div
            className={
              'border-b-grey_hover absolute bottom-0 left-0 flex w-full items-center justify-between border-t px-4 pt-4'
            }
          >
            <input
              type='file'
              hidden
              ref={imageRef}
              onChange={onChangeFiles}
              multiple={true}
            />
            <button
              onClick={() => imageRef.current && imageRef.current?.click()}
              className={
                'flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-0 transition-all hover:bg-primary_light'
              }
            >
              <svg
                width='24'
                className={'fill-primary'}
                viewBox='0 0 24 24'
                aria-hidden='true'
              >
                <g>
                  <path d='M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v9.086l3-3 3 3 5-5 3 3V5.5c0-.276-.224-.5-.5-.5h-13zM19 15.414l-3-3-5 5-3-3-3 3V18.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-3.086zM9.75 7C8.784 7 8 7.784 8 8.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75S10.716 7 9.75 7z'></path>
                </g>
              </svg>
            </button>
            <button
              disabled={!contents}
              className={'c-btn-primary h-8 w-[94px] text-[15px] font-bold'}
            >
              게시하기
            </button>
          </div>
        </div>
      </form>
    </ModalContainer>
  )
}
export default ComposeTweetModal
