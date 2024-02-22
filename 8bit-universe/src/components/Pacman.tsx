import BigImage from './BigImage'
import Line from './Line/Line'

const Step5 = () => {
  return (
    <>
      <Line number={4} />
      <div className="flex flex-row gap-3">
        <BigImage
          src="/images/Pacman.jpg"
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
