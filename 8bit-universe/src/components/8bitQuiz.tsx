import BigImage from './BigImage'
import Line from './Line/Line'

const Step3 = () => {
  return (
    <>
      <Line number={2} />
      <div className="flex flex-row-reverse gap-3">
        <BigImage
          src="/images/Quiz.jpg"
          className="w-40"
        />
        <div className="flex flex-col gap-2 w-[49%]">
          <span className="bit8font">8bit Quiz</span>
          <br />
          <span className="bit8font-desc">
            Anyone can be a hero. You just need to believe in yourself.
          </span>
        </div>
      </div>
    </>
  )
}

export default Step3
