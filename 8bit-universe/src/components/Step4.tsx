import Line from './utils/Line'

const Step4 = () => {
  return (
    <>
      <Line />
      {/* <span className="bit8font">Superman vs Batman</span> */}
      <div className="flex flex-row gap-3">
        <div className="flex flex-col w-[80%] gap-2 items-center">
          <p className="bit8font">Superman</p>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCTuSpR_FwEIFFf0C8vSnQ4kMVW7KO4iNdYgjdUok3Ew&s" />
          <span className="bit8font-desc">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </span>
        </div>
        <p className="bit8font pt-16">vs</p>
        <div className="flex flex-col w-[80%] gap-2 items-center">
          <p className="bit8font">Batman</p>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCTuSpR_FwEIFFf0C8vSnQ4kMVW7KO4iNdYgjdUok3Ew&s" />
          <span className="bit8font-desc">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </span>
        </div>
      </div>
    </>
  )
}

export default Step4
