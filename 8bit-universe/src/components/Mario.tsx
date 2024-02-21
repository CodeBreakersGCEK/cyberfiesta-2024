import BigImage from './BigImage'
import Line from './Line/Line'

const Mario = () => {
  return (
    <>
      <Line number={7} />
      <div className="flex flex-col gap-3 items-center">
        <span className="bit8font">Mario</span>
        <BigImage
          src="https://preview.redd.it/super-mario-bros-castle-v0-9ezhq8wjbgwa1.png?width=640&crop=smart&auto=webp&s=f1c2cb6ca8c9ed68f8a1ec948005b9786fbef359"
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
