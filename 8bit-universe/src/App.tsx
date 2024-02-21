import Header from './components/Header'
import Step1 from './components/Step1'
import Step2 from './components/Step2'
import Step3 from './components/Step3'
import Step4 from './components/Step4'
import Line from './components/utils/Line'

const App = () => {
  return (
    <div className="text-red-400 w-screen flex flex-col items-center bg-backColor h-screen text-white overflow-x-hidden p-2 pb-20">
      <div className="w-[90vw] gap-4 flex flex-col items-center">
        <Header />
        <Step1 />
        <Line />
        <Step2 />
        <Step3 />
        <Step4 />
      </div>
    </div>
  )
}

export default App
