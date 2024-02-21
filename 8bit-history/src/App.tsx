// App.js
import React from 'react';

const App = () => {
  const facts = [
    'The first video game was created in 1958.',
    'The first video game was created by William Higinbotham.',
    "The first video game was called 'Tennis for Two'.",
    'The first video game was created on an oscilloscope.',
    'The first video game was created in a lab.',
    'The first video game was created in New York.',
    'The first video game was created at Brookhaven National Laboratory.',
    'The first video game was created by a physicist.',
    'The first video game was created as a form of entertainment.',
    'The first video game was created to show the capabilities of an oscilloscope to the public.',
  ];

  return (
    <div className="text-red-400 w-screen flex flex-col items-center bg-backColor h-screen text-white overflow-x-hidden p-2">
      <h4 className="text-lg font-bold bit8font pt-8">8-Bit History</h4>
      <h6 className="text-base bit8font pt-5 self-start">Facts:</h6>
      <ul className="self-start pl-4 pt-2">
        {facts.map((fact, index) => (
          <li
            key={index}
            className="text-xs md:text-xs lg:text-sm xl:text-xs pt-2 list-disc bit8font"
          >
            {fact}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
