import { ChangeEvent, MutableRefObject, useState } from 'react'

const useTextarea = (
  textareaRef: React.MutableRefObject<HTMLTextAreaElement | null>
) => {
  const [contents, setContents] = useState('')
  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { scrollHeight, clientHeight, value } = e.target
    if (!textareaRef) return
    setContents(e.target.value)
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height =
        textareaRef.current?.scrollHeight + 'px'
    }
  }
  return { contents, onChange, setContents }
}
export default useTextarea
