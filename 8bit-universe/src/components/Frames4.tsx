import BigImage from './BigImage'
import Line from './Line/Line'

const Frames4 = () => {
  return (
    <>
      <Line number={10} />
      <div className="flex flex-col gap-3 items-center">
        <div className="flex gap-4 justify-between">
          <div className="flex flex-col items-center gap-2">
            <BigImage
              src="https://preview.redd.it/super-mario-bros-castle-v0-9ezhq8wjbgwa1.png?width=640&crop=smart&auto=webp&s=f1c2cb6ca8c9ed68f8a1ec948005b9786fbef359"
              className="w-[40vw] h-[40vw]"
            />
            <span className="bit8font text-[0.6rem]">Spiderman</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <BigImage
              src="https://preview.redd.it/super-mario-bros-castle-v0-9ezhq8wjbgwa1.png?width=640&crop=smart&auto=webp&s=f1c2cb6ca8c9ed68f8a1ec948005b9786fbef359"
              className="w-[40vw] h-[40vw]"
            />
            <span className="bit8font text-[0.6rem]">Batman</span>
          </div>
        </div>
        <div className="flex gap-4 justify-between">
          <div className="flex flex-col items-center gap-2">
            <BigImage
              src="https://preview.redd.it/super-mario-bros-castle-v0-9ezhq8wjbgwa1.png?width=640&crop=smart&auto=webp&s=f1c2cb6ca8c9ed68f8a1ec948005b9786fbef359"
              className="w-[40vw] h-[40vw]"
            />
            <span className="bit8font text-[0.6rem]">Captain America</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <BigImage
              src="https://preview.redd.it/super-mario-bros-castle-v0-9ezhq8wjbgwa1.png?width=640&crop=smart&auto=webp&s=f1c2cb6ca8c9ed68f8a1ec948005b9786fbef359"
              className="w-[40vw] h-[40vw]"
            />
            <span className="bit8font text-[0.6rem]">Thor</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Frames4
