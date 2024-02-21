import BigImage from './BigImage'
import Line from './Line/Line'

const Arcade = () => {
  return (
    <>
      <Line number={9} />
      <div className="flex flex-col gap-3 items-center">
        <span className="bit8font">Arcade</span>
        <BigImage
          src="https://preview.redd.it/super-mario-bros-castle-v0-9ezhq8wjbgwa1.png?width=640&crop=smart&auto=webp&s=f1c2cb6ca8c9ed68f8a1ec948005b9786fbef359"
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
