import { useState } from 'react'

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
      onClick={addvalue}
      >Add value</button>

      <br />

      <button
      onClick={removevalue}
      >Remove value</button>
    </>
  )
}

export default App
