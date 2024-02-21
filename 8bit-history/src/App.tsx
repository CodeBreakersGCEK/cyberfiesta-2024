const App = () => {
  const facts = [
    'The first video game was created in 1958.',
    'The first video game was created by William Higinbotham.',
    "The first video game was called 'Tennis for Two'.",
    'The first video game was created on a oscilloscope.',
    'The first video game was created in a lab.',
    'The first video game was created in New York.',
    'The first video game was created in Brookhaven National Laboratory.',
    'The first video game was created by a physicist.',
    'The first video game was created as a form of entertainment.',
    'The first video game was created to show the capabilities of a oscilloscope to the public.',
  ]
  return (
    <div className="text-red-400 w-screen flex flex-col items-center bg-backColor h-screen text-white overflow-x-hidden p-2">
      <h4 className="text-2xl font-bold bit8font pt-8">8bit History</h4>
      <h6 className="text-lg bit8font pt-5 self-start">Facts:-</h6>
      <ul className="self-start pl-4">
        {facts.map((fact, index) => (
          <li key={index} className="text-xs text-[0.7rem] pt-4 list-disc bit8font">
            {fact}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
