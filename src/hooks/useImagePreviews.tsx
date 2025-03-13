import { ChangeEvent, useEffect, useState } from 'react'

export type PreviewImagesStateType = { dataURL: string; file: File }[]
const useImagePreviews = () => {
  const [previewImages, setPreviewImages] = useState<PreviewImagesStateType>([])

  const onChangeFiles = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.currentTarget.files
    if (!files) return
    if (files.length > 4) return alert('4개 이하로 선택해주세요.')
    if (previewImages.length + files.length > 4)
      return alert('4개 이하로 선택해주세요.')

    const fileArray = Array.from(files).map((file) => ({
      dataURL: URL.createObjectURL(file),
      file,
    }))
    setPreviewImages((prev) => [...prev, ...fileArray])
    previewImages.forEach((item) => {
      if (item.dataURL === 'string') URL.revokeObjectURL(item.dataURL)
    })
  }
  const ondDeleteImages = (file: File) => {
    setPreviewImages(previewImages.filter((i) => i.file !== file))
  }
  return { previewImages, onChangeFiles, ondDeleteImages, setPreviewImages }
}
export default useImagePreviews
