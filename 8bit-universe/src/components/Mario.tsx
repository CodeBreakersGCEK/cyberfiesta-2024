import BigImage from './BigImage'
import Line from './Line/Line'

const Mario = () => {
  return (
    <>
      <Line number={7} />
      <div className="flex flex-col gap-3 items-center">
        <span className="bit8font">Mario</span>
        <BigImage
          src="/images/Mario.jpg"
          className="w-40"
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

export default Mario
