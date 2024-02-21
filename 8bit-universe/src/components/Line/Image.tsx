import { useEffect, useRef, useState } from 'react'

interface ImageProps {
  src: string
  className?: string
}

const Image: React.FC<ImageProps> = ({ className, src }) => {
  const imageRef = useRef(null)
  const [glowColor, setGlowColor] = useState('rgba(255, 255, 0, 0.5)')

  useEffect(() => {
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

    const imageElement = imageRef.current
    if (imageElement) {
      const color = calculateAverageColor(imageElement)
      setGlowColor(color)
    }
  }, [src])

  return (
    <>
      <img
        ref={imageRef}
        src={src}
        className={`w-10 h-10 absolute ${className} z-80`}
      />
      <span
        className={`absolute ${className} bg-black z-70`}
        style={{
          boxShadow: `0 0 30px 15px ${glowColor}`,
          filter: 'brightness(1.5)',
          width: '2.5rem',
          height: '2.5rem',
          borderRadius: '50%',
        }}
      ></span>
    </>
  )
}

export default Image
