import BigImage from './BigImage'
import Line from './Line/Line'

const ThorVsJoker = () => {
  return (
    <>
      <Line number={6} />
      {/* <span className="bit8font">Superman vs Batman</span> */}
      <div className="flex flex-row gap-3">
        <div className="flex flex-col w-[80%] gap-2 items-center">
          <p className="bit8font">Ironman</p>
          <BigImage
            src="https://preview.redd.it/super-mario-bros-castle-v0-9ezhq8wjbgwa1.png?width=640&crop=smart&auto=webp&s=f1c2cb6ca8c9ed68f8a1ec948005b9786fbef359"
            className="w-[100%]"
          />
          <span className="bit8font-desc">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </span>
        </div>
        <p className="bit8font pt-16">vs</p>
        <div className="flex flex-col w-[80%] gap-2 items-center">
          <p className="bit8font">Thanos</p>
          <BigImage
            src="https://preview.redd.it/super-mario-bros-castle-v0-9ezhq8wjbgwa1.png?width=640&crop=smart&auto=webp&s=f1c2cb6ca8c9ed68f8a1ec948005b9786fbef359"
            className="w-[100%]"
          />
          <span className="bit8font-desc">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </span>
        </div>
      </div>
    </>
  )
}

export default ThorVsJoker
