'use client'
import { useEffect } from 'react'

const MSWComponent = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (
        process.env.NEXT_PUBLIC_API_MOCKING === 'enable' ||
        process.env.NEXT_PUBLIC_MSW_ENABLED === 'false'
      ) {
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        require('@/mocks/browser')
      }
    }
  }, [])
  return null
}
export default MSWComponent
