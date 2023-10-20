import Image from 'next/image'

interface CustomImageProps {
  src: string
  alt: string
  width: number
  height: number
  styles?: any
}

const CustomImage: React.FC<CustomImageProps> = ({
  src,
  alt,
  width,
  height,
  styles
}: CustomImageProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      height={height}
      width={width}
      style={styles}
      priority
    />
  )
}

export default CustomImage
