import { ChangeEvent, useEffect, useState } from 'react'

const useImagePreviews = () => {
  const [previewImages, setPreviewImages] = useState<string[]>([])

  const onChangeFiles = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.currentTarget.files
    if (!files) return
    if (files.length > 4) return alert('4개 이하로 선택해주세요.')
    if (previewImages.length + files.length > 4)
      return alert('4개 이하로 선택해주세요.')

    const fileArray = Array.from(files).map((file) => URL.createObjectURL(file))
    setPreviewImages((prev) => previewImages.concat(fileArray))
    Array.from(files).map((file) =>
      typeof file === 'string' ? URL.revokeObjectURL(file) : false
    )
  }
  const ondDeleteImages = (image: string) => {
    setPreviewImages(previewImages.filter((i) => i !== image))
  }
  return { previewImages, onChangeFiles, ondDeleteImages }
}
export default useImagePreviews
