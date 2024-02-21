import { useEffect, useRef } from 'react'

const App = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    const audioElement = audioRef.current

    if (audioElement) {
      // Start playing the video
      audioElement.play()
    }
  }, [])

  return (
    <div className="w-full h-full object-cover">
      <video className="w-full h-full object-cover" autoPlay loop muted>
        <source
          src="/roll.mp4"
          type="video/mp4"
          className="w-full h-full object-cover"
        />
      </video>
      <audio autoPlay loop ref={audioRef}>
        <source src="/roll.mp3" type="audio/mpeg" />
      </audio>
    </div>
  )
}

export default App
