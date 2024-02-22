import BigImage from './BigImage'
import Line from './Line/Line'

const SelfieCar = () => {
  return (
    <>
      <Line number={12} />
      <div className="flex flex-col gap-3 items-center">
        <span className="bit8font">SelfieCar</span>
        <BigImage src="/images/Car.jpg" className="w-[80vw] h-52" />
        <div className="flex flex-col gap-2">
          <br />
          <span className="bit8font-desc">
            It is Selfie Point. Take a selfie with this car and share it with
            your friends in our Insta Handle.{' '}
            <a
              href="https://www.instagram.com/codebreakersgcek/"
              target="_blank"
              rel="noreferrer"
              className="bit8font bg-black p-2 mt-2 w-[90vw] flex items-center justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-[rgba(160,32,240,0.5)] hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Share
            </a>
          </span>
        </div>
      </div>
    </>
  )
}

export default SelfieCar
