'use client'

import React, { useEffect, useRef, useState } from 'react'
import Slider, { CustomArrowProps } from 'react-slick'
import { CloseIcon, NextIcon, PrevIcon } from '@/app/_ui/Icons'
import { PreviewImagesStateType } from '@/hooks/useImagePreviews'

export type ImageSlidesType = {
  images: PreviewImagesStateType
  deleteAction: (file: File) => void
}
const PreviewImageSlides = ({ images, deleteAction }: ImageSlidesType) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const slideRef = useRef<Slider | null>(null)
  useEffect(() => {
    if (!slideRef.current) return
    slideRef.current?.slickGoTo(currentIndex - 1)
  }, [images])
  if (images.length === 0) return

  if (images.length === 1) {
    return (
      <div className={'relative h-full w-full overflow-hidden rounded-[16px]'}>
        <button
          onClick={() => deleteAction(images[0].file)}
          className='absolute right-4 top-4 z-10 flex h-6 w-6 cursor-pointer items-center justify-center rounded-[17px] border-0 bg-gray_glow transition-all'
        >
          <CloseIcon />
        </button>
        <img
          src={images[0].dataURL}
          alt={images[0].dataURL}
          className={'h-full w-full object-cover object-center'}
        />
      </div>
    )
  }
  // React-Slick Slider
  const PrevButton = (props: CustomArrowProps) => {
    const { className, style, onClick } = props

    return (
      <div
        className={`${className} w-6items-center absolute left-1 top-1/2 z-10 flex h-6 w-6 justify-center rounded-full bg-gray_glow before:hidden hover:bg-gray_glow`}
        onClick={onClick}
      >
        <PrevIcon />
      </div>
    )
  }
  const NextButton = (props: CustomArrowProps) => {
    const { className, style, onClick } = props
    return (
      <div
        className={`${className} absolute right-2 top-1/2 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-gray_glow before:hidden hover:bg-gray_glow`}
        onClick={onClick}
      >
        <NextIcon />
      </div>
    )
  }
  const settings = {
    dots: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: false,
    speed: 500,
    swipeToSlide: false,
    touchMove: false,
    nextArrow: <NextButton />,
    prevArrow: <PrevButton />,
    afterChange: (next: number) => setCurrentIndex(next),
  }

  return (
    <>
      <Slider {...settings} ref={slideRef}>
        {images.map((image, index) => {
          return (
            <div
              className={`border-grey_light relative h-auto gap-5 overflow-hidden rounded-2xl border`}
              key={index}
            >
              <img
                src={image.dataURL}
                className={'h-[inherit] object-cover object-center'}
                alt=''
              />
              <button
                onClick={() => {
                  deleteAction(image.file)
                }}
                className='absolute right-4 top-4 z-10 flex h-6 w-6 cursor-pointer items-center justify-center rounded-[17px] border-0 bg-gray_glow transition-all'
              >
                <CloseIcon />
              </button>
            </div>
          )
        })}
      </Slider>
    </>
  )
}
export default PreviewImageSlides
