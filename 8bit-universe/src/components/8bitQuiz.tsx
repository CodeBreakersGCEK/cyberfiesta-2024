import BigImage from './BigImage'
import Line from './Line/Line'

const Step3 = () => {
  return (
    <>
      <Line number={2} />
      <div className="flex flex-row-reverse gap-3">
        <BigImage
          src="https://preview.redd.it/super-mario-bros-castle-v0-9ezhq8wjbgwa1.png?width=640&crop=smart&auto=webp&s=f1c2cb6ca8c9ed68f8a1ec948005b9786fbef359"
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
