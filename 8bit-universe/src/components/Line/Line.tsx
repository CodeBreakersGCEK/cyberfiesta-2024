import Lines from './Lines'

interface LinesProps {
  number: number
}

const Line: React.FC<LinesProps> = ({ number }) => {
  return (
    <div className="w-screen flex flex-col items-center relative">
      <span className="w-2 h-2 bg-[rgba(160,32,240,0.7)] rounded-full"></span>
      <span
        className="w-[0.1rem] h-60 bg-[rgba(160,32,240,1)]"
        style={{
          boxShadow: `0 0 10px 4px rgba(160,32,240,0.5)`,
          filter: 'brightness(1.5)',
        }}
      ></span>
      <span className="w-2 h-2 bg-[rgba(160,32,240,0.7)] rounded-full"></span>
      <Lines number={number} />
    </div>
  )
}

export default Line
