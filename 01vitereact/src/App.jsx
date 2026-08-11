import { useState } from 'react'
import Chatchitcard from './components/Chatchitcard.jsx'
import Profilecard from './components/Proflecard.jsx'

function App() {

  const [counter, setCounter] = useState(0);

  const addvalue = () => {
        setCounter(counter + 1);
      }
      
  const removevalue = () => {
        setCounter(counter - 1);
      }

  return (
    <>
      <h1>Vite + React</h1>
      <h2>counter value: {counter}</h2>

      <button
      className="flex items-center bg-blue-500 px-4 py-3 text-white hover:bg-blue-400"
      onClick={addvalue}
      >Add value</button>

      <br />

      <button
      className="flex items-center bg-red-500 px-4 py-3 text-white hover:bg-red-400"
      onClick={removevalue}
      >Remove value</button>

      <br />

      <Chatchitcard />

      <br />

      <Profilecard username="Erin Lindford" role="Product Owner" />

      <br />

      <Profilecard username="Iren Lindford" role="Product Engineer" />
    </>
  )
}

export default App
