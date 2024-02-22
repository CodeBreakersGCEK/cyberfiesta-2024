import { useRef, useState } from 'react'

interface ImageProps {
  src: string
  className?: string
}

const BigImage: React.FC<ImageProps> = ({ className, src }) => {
  const imageRef = useRef(null)
  const [glowColor, setGlowColor] = useState('rgba(160,32,240,0.5)')

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const calculateAverageColor = (imageElement: any) => {
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')
    canvas.width = imageElement.width
    canvas.height = imageElement.height

    context?.drawImage(imageElement, 0, 0, canvas.width, canvas.height)

    const imageData = context?.getImageData(
      0,
      0,
      canvas.width,
      canvas.height,
    ).data

    let sumRed = 0
    let sumGreen = 0
    let sumBlue = 0

    if (!imageData) {
      return 'rgba(255, 255, 0, 0.5)'
    }

    for (let i = 0; i < imageData.length; i += 4) {
      sumRed += imageData[i]
      sumGreen += imageData[i + 1]
      sumBlue += imageData[i + 2]
    }

    const pixelCount = imageData.length / 4
    const avgRed = Math.round(sumRed / pixelCount)
    const avgGreen = Math.round(sumGreen / pixelCount)
    const avgBlue = Math.round(sumBlue / pixelCount)

    return `rgba(${avgRed}, ${avgGreen}, ${avgBlue}, 0.5)`
  }

  return (
    <div className={`relative ${className}`}>
      <img
        src={src}
        ref={imageRef}
        onLoad={() => {
          const color = calculateAverageColor(imageRef.current)
          setGlowColor(color)
        }}
        className={`z-20 bg-black ${className}`}
        style={{
          boxShadow: `0 0 50px 10px ${glowColor}`,
          filter: 'brightness(1.3)',
        }}
      />
    </div>
  )
}

export default BigImage
