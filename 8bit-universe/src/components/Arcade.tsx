import BigImage from './BigImage'
import Line from './Line/Line'

const Arcade = () => {
  return (
    <>
      <Line number={9} />
      <div className="flex flex-col gap-3 items-center">
        <span className="bit8font">Arcade</span>
        <BigImage
          src="/images/Arcade.jpg"
          className="w-[80vw] h-52"
        />
        <div className="flex flex-col gap-2">
          <br />
          <span className="bit8font-desc">
            An arcade game or coin-op game is a coin-operated entertainment machine typically installed in public businesses such as restaurants, bars and amusement arcades..
          </span>
        </div>
      </div>
    </>
  )
}

export default Arcade
