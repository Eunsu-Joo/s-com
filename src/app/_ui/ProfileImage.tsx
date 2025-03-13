import Image from 'next/image'

type ProfileImage = {
  src: string | null
  alt?: string
  width?: number
}
const ProfileImage = ({ src, alt, width = 40 }: ProfileImage) => {
  return (
    <div
      style={{ width: `${width}px`, height: `${width}px` }}
      className={`relative overflow-hidden rounded-full shadow`}
    >
      {src ? (
        <img className={'object-cover'} src={src} alt={alt ?? ''} />
      ) : (
        <div className={'h-full w-full bg-gray_glow'} />
      )}
    </div>
  )
}
export default ProfileImage
