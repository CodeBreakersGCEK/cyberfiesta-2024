import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'

const App = () => {
  const Navigate = useNavigate()
  return (
    <div className="text-red-400 w-screen flex flex-col items-center bg-backColor h-screen text-white overflow-x-hidden p-2 pb-20">
      <div className="w-[90vw] gap-4 flex flex-col items-center">
        <Header />
        <div className="flex flex-col items-center gap-6">
          <h1 className="text-xs font-bold bit8font">
            Welcome to 8bit Universe
          </h1>
          <div className="flex flex-col items-center gap-10 mt-10">
            <button
              className="bg-red-400 text-white bg-[rgba(63,32,240,0.5)] p-2 rounded-md w-[90vw] max-w-[30rem] text-center font-bold bit8font"
              style={{
                boxShadow: `0 0 10px 4px rgba(63,32,240,0.5)`,
                filter: 'brightness(1.5)',
              }}
              onClick={() => {
                Navigate('/8bit-universe')
              }}
            >
              Enter the World
            </button>
            <p className="bit8font">OR</p>
            <button
              className="bg-red-400 text-white bg-[rgba(63,32,240,0.5)] p-2 rounded-md w-[90vw] max-w-[30rem] text-center font-bold bit8font"
              style={{
                boxShadow: `0 0 10px 4px rgba(63,32,240,0.5)`,
                filter: 'brightness(1.5)',
              }}
              onClick={() => {
                window.open(
                  'https://events.cyberfiesta-2024.codebreakersgcek.engineer',
                  '_blank',
                )
              }}
            >
              Events
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
