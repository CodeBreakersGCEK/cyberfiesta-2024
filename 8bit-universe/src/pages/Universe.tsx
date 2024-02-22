import Header from '../components/Header'
import Welcome from '../components/Welcome'
import Sword from '../components/Sword'
import BitQuiz from '../components/8bitQuiz'
import BatmanVsJoker from '../components/BatmanVsJoker'
import Pacman from '../components/Pacman'
import GameCaset from '../components/GameCaset'
import Snake from '../components/Snake'
import IronmanVsThanos from '../components/IronmanVsThanos'
import Mario from '../components/Mario'
import Arcade from '../components/Arcade'
import Frames4 from '../components/Frames4'
// import RonaldoVsMessi from '../components/RonaldoVsMessi'
import SelfieCar from '../components/SelfieCar'
import Exit from '../components/Exit'

const Universe = () => {
  return (
    <div className="text-red-400 w-screen flex flex-col items-center bg-backColor h-screen text-white overflow-x-hidden p-2 pb-20">
      <div className="w-[90vw] gap-4 flex flex-col items-center">
        <Header />
        <Welcome />
        <Pacman />
        <Snake />
        <BitQuiz />
        <Sword />
        <IronmanVsThanos />
        <GameCaset />
        <Mario />
        <Frames4 />
        <BatmanVsJoker />
        <Arcade />
        {/* <RonaldoVsMessi /> */}
        <SelfieCar />
        <Exit />
      </div>
    </div>
  )
}

export default Universe
