import BigImage from './BigImage'
import Line from './Line/Line'

const Step6 = () => {
  return (
    <>
      <Line number={3} />
      {/* <span className="bit8font">Superman vs Batman</span> */}
      <div className="flex flex-row gap-3">
        <div className="flex flex-col w-[80%] gap-2 items-center">
          <p className="bit8font">Caset</p>
          <BigImage src="/images/Cased.jpg" className="w-40" />
        </div>
        <div className="flex flex-col w-[80%] gap-2 items-center">
          <p className="bit8font">Game Over</p>
          <BigImage src="/images/GameOver.jpg" className="w-40" />
        </div>
      </div>
    </>
  )
}

export default Step6
