import BigImage from './BigImage'
import Line from './Line/Line'

const Step4 = () => {
  return (
    <>
      <Line number={8} />
      {/* <span className="bit8font">Superman vs Batman</span> */}
      <div className="flex flex-row gap-3">
        <div className="flex flex-col w-[80%] gap-2 items-center">
          <p className="bit8font">Batman</p>
          <BigImage
            src="/images/Batman.jpg"
            className="w-[100%]"
          />
          <span className="bit8font-desc">
            Batman is a superhero appearing in American comic books published by DC Comics.
          </span>
        </div>
        <p className="bit8font pt-16">vs</p>
        <div className="flex flex-col w-[80%] gap-2 items-center">
          <p className="bit8font">Joker</p>
          <BigImage
            src="/images/Joker.jpeg"
            className="w-[100%]"
          />
          <span className="bit8font-desc">
            The Joker is a supervillain created by Bill Finger, Bob Kane, and Jerry Robinson.
          </span>
        </div>
      </div>
    </>
  )
}

export default Step4
