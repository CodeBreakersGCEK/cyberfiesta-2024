import BigImage from './BigImage'
import Line from './Line/Line'

const IronmanVsThanos = () => {
  return (
    <>
      <Line number={6} />
      {/* <span className="bit8font">Superman vs Batman</span> */}
      <div className="flex flex-row gap-3">
        <div className="flex flex-col w-[80%] gap-2 items-center">
          <p className="bit8font">Ironman</p>
          <BigImage src="/images/IronMan.jpg" className="w-[100%]" />
          <span className="bit8font-desc">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </span>
        </div>
        <p className="bit8font pt-16">vs</p>
        <div className="flex flex-col w-[80%] gap-2 items-center">
          <p className="bit8font">Thanos</p>
          <BigImage src="/images/Thanos.jpg" className="w-[100%]" />
          <span className="bit8font-desc">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </span>
        </div>
      </div>
    </>
  )
}

export default IronmanVsThanos
