import BigImage from './BigImage'
import Line from './Line/Line'

const Step7 = () => {
  return (
    <>
      <Line number={5} />
      <div className="flex flex-row-reverse gap-3">
        <BigImage
          src="/images/Snake.jpg"
          className="w-40"
        />
        <div className="flex flex-col gap-2 w-[49%]">
          <span className="bit8font">Snake</span>
          <br />
          <span className="bit8font-desc">
            Snake is a game that is played by millions of people around the
            world.
          </span>
        </div>
      </div>
    </>
  )
}

export default Step7
