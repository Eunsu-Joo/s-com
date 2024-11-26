'use client'
import { MouseEventHandler, useState } from 'react'
import { TabType } from '@/utils/tabList'

const Tab = ({ tabList }: { tabList: TabType }) => {
  const [currentValue, setCurrentValue] = useState(tabList[0].value)
  const onClickTab: MouseEventHandler<HTMLButtonElement> = (e) => {
    setCurrentValue(e.currentTarget.value)
  }

  return (
    <div className={'flex h-[53px]'}>
      {tabList.map((tab, index) => (
        <button
          className={
            'relative flex flex-1 cursor-pointer items-center justify-center text-[15px]'
          }
          value={tab.value}
          onClick={onClickTab}
          key={index}
        >
          {tab.name}
          {currentValue === tab.value && (
            <span
              className={
                'absolute bottom-0 h-[4px] w-[56px] self-center rounded-[9999px] bg-primary'
              }
            />
          )}
        </button>
      ))}
    </div>
  )
}
export default Tab
