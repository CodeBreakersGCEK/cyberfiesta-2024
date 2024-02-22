import BigImage from './BigImage'
import Line from './Line/Line'

const Exit = () => {
  return (
    <>
      <Line number={13} />
      <div className="flex flex-col gap-3 items-center">
        <span className="bit8font">Exit</span>
        <BigImage
          src="/images/Error.jpg"
          className="w-[80vw] h-52"
        />
        <div className="flex flex-col gap-2">
          <br />
          <span className="bit8font-desc">
            Thanks for visiting. We hope you had a great time. See you soon.
          </span>
        </div>
      </div>
    </>
  )
}

export default Exit
