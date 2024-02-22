import BigImage from './BigImage'
import Line from './Line/Line'

const Step2 = () => {
  return (
    <>
      <Line number={1} />
      <div className="flex gap-3">
        <BigImage
          src="/images/Sword.jpg"
          className="w-40"
        />
        <div className="flex flex-col gap-2 w-[49%]">
          <span className="bit8font">Sword</span>
          <br />
          <span className="bit8font-desc">
            It is used to attack mobs and players. It is the most effective weapon, as it can deal a lot of damage.
          </span>
        </div>
      </div>
    </>
  )
}

export default Step2
