import Image from 'next/image'

type ProfileImage = {
  src: string
  alt: string
  width?: number
}
const ProfileImage = ({ src, alt, width = 40 }: ProfileImage) => {
  return (
    <div
      style={{ width: `${width}px`, height: `${width}px` }}
      className={`relative overflow-hidden rounded-full`}
    >
      <Image
        sizes={`${width}px`}
        fill
        priority
        className={'object-cover'}
        src={src}
        alt={alt}
      />
    </div>
  )
}
export default ProfileImage
