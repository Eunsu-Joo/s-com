'use client'
import React from 'react'
import BackButton from '@/app/_ui/BackButton'
import { user } from '@/data'

type TitleType = {
  title: string
  backButton?: boolean
}
const Title = ({ backButton = true, title }: TitleType) => {
  return (
    <div className={'flex h-[53px] items-center px-3'}>
      {backButton && <BackButton />}
      <h3 className={'c-title'}>{title}</h3>
    </div>
  )
}
export default Title
