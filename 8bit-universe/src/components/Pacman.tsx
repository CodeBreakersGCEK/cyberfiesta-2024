import BigImage from './BigImage'
import Line from './Line/Line'

const Step5 = () => {
  return (
    <>
      <Line number={4} />
      <div className="flex flex-row gap-3">
        <BigImage
          src="https://preview.redd.it/super-mario-bros-castle-v0-9ezhq8wjbgwa1.png?width=640&crop=smart&auto=webp&s=f1c2cb6ca8c9ed68f8a1ec948005b9786fbef359"
          className="w-40"
        />
        <div className="flex flex-col gap-2 w-[49%]">
          <span className="bit8font">Pacman</span>
          <br />
          <span className="bit8font-desc">
            Pacman Mario is a game that is played by millions of people around
          </span>
        </div>
      </div>
    </>
  )
}

export default Step5
