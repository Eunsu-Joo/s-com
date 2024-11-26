'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import { NextIcon, PrevIcon } from '@/app/_ui/Icons'
import { usePathname, useRouter } from 'next/navigation'

type PhotoModalSlidesProps = {
  images: any[]
}

// 클릭 한 post의 이미지 리스트 === 이미지 슬라이드 이미지 리스트
// 페이지가 로드되면 받아오는지 or props로 전달하는지

const PhotoModalSlides = ({ images }: PhotoModalSlidesProps) => {
  const pathname = usePathname()
  const router = useRouter()
  const [currentIndex, setCurrentIndex] = useState(
    Number(pathname.split('/').pop()) - 1
  )

  useEffect(() => {
    const modalElement = document.getElementById('imageModal')
    if (!modalElement) return
    const slickNodeList = modalElement.querySelectorAll(
      '.slick-slide'
    ) as NodeListOf<HTMLDivElement>
    if (!slickNodeList) return
    slickNodeList.forEach((elem, index) => {
      ;(elem.firstElementChild as HTMLDivElement).style.width = 'inherit'
      ;(elem.querySelector('img') as HTMLImageElement).style.width =
        `${images[index].width}px`
      ;(elem.querySelector('img') as HTMLImageElement).style.height =
        `${images[index].height}px`
    })
  }, [router])

  if (images.length === 1) {
    return (
      <Image
        src={images[0].url}
        height={images[0].height}
        width={images[0].width}
        alt={images[0].name}
        onClick={(e) => e.stopPropagation()}
      />
    )
  }

  const PrevButton = (props: any) => {
    const { className, style, onClick } = props
    return (
      <div
        className={`${className} absolute left-4 top-1/2 z-10 flex h-8 w-8 items-center justify-center rounded-full fill-white backdrop-blur-md before:hidden hover:bg-stone-800`}
        onClick={(e) => {
          e.stopPropagation()
          onClick()
        }}
      >
        <PrevIcon />
      </div>
    )
  }

  const NextButton = (props: any) => {
    const { className, style, onClick } = props
    return (
      <div
        className={`${className} absolute right-4 top-1/2 z-10 flex h-8 w-8 items-center justify-center rounded-full fill-white backdrop-blur-md before:hidden hover:bg-stone-800`}
        onClick={(e) => {
          e.stopPropagation()
          onClick()
        }}
      >
        <NextIcon />
      </div>
    )
  }

  const settings = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    speed: 500,
    swipeToSlide: false,
    touchMove: false,
    arrows: true,
    prevArrow: <PrevButton />,
    nextArrow: <NextButton />,
    initialSlide: currentIndex,
    afterChange: (next: number) => {
      router.replace(pathname.slice(0, -1) + (next + 1).toString(), {
        scroll: false,
      })
    },
  }

  return (
    <div style={{ width: 'calc(100vw - 350px )', height: '100vh' }}>
      <Slider {...settings}>
        {images.map((image, index) => {
          return (
            <div key={index}>
              <div className={'c-center relative'}>
                <img
                  src={image.url}
                  className={'object-cover object-center'}
                  alt={image.name}
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            </div>
          )
        })}
      </Slider>
    </div>
  )
}
export default PhotoModalSlides
