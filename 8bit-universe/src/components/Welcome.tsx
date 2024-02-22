import BigImage from './BigImage'

const Step1 = () => {
  return (
    <div className="pt-5 flex flex-col items-center gap-3">
      <BigImage
        src="/images/"
        className="max-w-[80vw] w-full h-auto"
      />
      <p className="bit8font-desc">
        Welcome to the Cyber Fiesta! We are so excited to have you here. We are
        going to have a blast today. Let's start by getting to know each other.
      </p>
    </div>
  )
}

export default Step1
