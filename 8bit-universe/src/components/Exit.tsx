import BigImage from './BigImage'
import Line from './Line/Line'

const Exit = () => {
  return (
    <>
      <Line number={13} />
      <div className="flex flex-col gap-3 items-center">
        <span className="bit8font">Exit</span>
        <BigImage src="/images/Error.jpg" className="w-[80vw] h-52" />
        <div className="flex flex-col gap-2">
          <br />
          <span className="bit8font-desc">
            Thanks for visiting. We hope you had a great time. See you soon.
          </span>
          <a
            className="bit8font bg-black p-2 mt-8 w-[90vw] flex items-center justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-[rgba(160,32,240,0.5)] hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            href="https://www.instagram.com/codebreakersgcek/"
            style={{
              boxShadow: `0 0 50px 10px rgba(160,32,240,0.5)`,
              filter: 'brightness(1.3)',
            }}
          >
            Join Us
          </a>
        </div>
      </div>
    </>
  )
}

export default Exit
