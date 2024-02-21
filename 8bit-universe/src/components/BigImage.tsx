interface ImageProps {
  src: string
  className?: string
}

const BigImage: React.FC<ImageProps> = ({ className, src }) => {
  return (
    <div className={`relative ${className}`}>
      <img src={src} className={`z-20 bg-black ${className}`} />
      <span
        className={`absolute top-[50%] left-[50%] -translate-x-[50%] bg-black z-10 -translate-y-[50%]`}
        style={{
          // boxShadow: `0 0 90px 70px rgba(160,32,240,0.5)`,
          filter: 'brightness(1.5)',
        }}
      ></span>
    </div>
  )
}

export default BigImage
