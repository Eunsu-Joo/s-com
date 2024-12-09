'use client'
import { createContext, ReactNode, useState } from 'react'

export const TabProvider = createContext({
  tab: 'recommend',
  setTab: (value: string) => {},
})
const TabContext = ({ children }: { children: ReactNode }) => {
  const [tab, setTab] = useState('recommend')
  return (
    <TabProvider.Provider value={{ tab, setTab }}>
      {children}
    </TabProvider.Provider>
  )
}
export default TabContext
