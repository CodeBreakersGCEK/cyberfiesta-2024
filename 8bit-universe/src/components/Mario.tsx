import BigImage from './BigImage'
import Line from './Line/Line'

const Mario = () => {
  return (
    <>
      <Line number={7} />
      <div className="flex flex-col gap-3 items-center">
        <span className="bit8font">Mario</span>
        <BigImage
          src="/images/Mario.jpg"
          className="w-[90%]"
        />
        <div className="flex flex-col gap-2">
          <br />
          <span className="bit8font-desc">
            Mario is a fictional character in the Mario video game franchise, owned by Nintendo and created by Japanese video game designer Shigeru Miyamoto. He first appeared in the 1981 arcade game Donkey Kong.
          </span>
        </div>
      </div>
    </>
  )
}

export default Mario
