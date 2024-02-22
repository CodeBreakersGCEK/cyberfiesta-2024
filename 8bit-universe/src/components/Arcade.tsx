import BigImage from './BigImage'
import Line from './Line/Line'

const Arcade = () => {
  return (
    <>
      <Line number={9} />
      <div className="flex flex-col gap-3 items-center">
        <span className="bit8font">Arcade</span>
        <BigImage
          src="/images/Arcade.jpg"
          className="w-[80vw] h-52"
        />
        <div className="flex flex-col gap-2">
          <br />
          <span className="bit8font-desc">
            We are going to have a blast today. Let's start by getting to know
            each other.
          </span>
        </div>
      </div>
    </>
  )
}

export default Arcade
