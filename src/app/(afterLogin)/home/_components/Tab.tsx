'use client'
import { MouseEventHandler, useContext, useState } from 'react'
import { TabProvider } from '@/app/(afterLogin)/home/_components/TabContext'
import Title from '@/app/_ui/Title'

const tabList = [
  { name: '추천', value: 'recommend' },
  { name: '팔로우중', value: 'follow' },
]
const Tab = () => {
  const { tab, setTab } = useContext(TabProvider)
  const onClickTab: MouseEventHandler<HTMLButtonElement> = (e) => {
    setTab(e.currentTarget.value)
  }
  return (
    <div
      className={
        'bg-[hsla(0, 0%, 100%, .85)] h-auth fixed top-0 z-10 w-[598px] backdrop-blur-lg'
      }
    >
      <Title title={'홈'} backButton={false} />
      <div className={'flex h-[53px]'}>
        {tabList.map((t, index) => (
          <button
            className={
              'relative flex flex-1 cursor-pointer items-center justify-center text-[15px]'
            }
            value={t.value}
            onClick={onClickTab}
            key={index}
          >
            {t.name}
            {tab === t.value && (
              <span
                className={
                  'absolute bottom-0 h-[4px] w-[56px] self-center rounded-[9999px] bg-primary'
                }
              />
            )}
          </button>
        ))}
      </div>
    </div>
  )
}
export default Tab
