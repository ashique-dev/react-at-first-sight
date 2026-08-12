import { useState } from 'react'
import './index.css'
import BGChangeButton from './component/buttons/BGChangeButton.jsx'

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white/20 backdrop-blur-md rounded-lg p-4">
          <BGChangeButton color="red" onClick={() => setColor("red")} />
          <BGChangeButton color="blue" onClick={() => setColor("blue")} />
          <BGChangeButton color="green" onClick={() => setColor("green")} />
          <BGChangeButton color="yellow" onClick={() => setColor("yellow")} />
          <BGChangeButton color="purple" onClick={() => setColor("purple")} />
          <BGChangeButton color="pink" onClick={() => setColor("pink")} />
          <BGChangeButton color="orange" onClick={() => setColor("orange")} />
          <BGChangeButton color="gray" onClick={() => setColor("gray")} />
          <BGChangeButton color="teal" onClick={() => setColor("teal")} />
          <BGChangeButton color="indigo" onClick={() => setColor("indigo")} />
        </div>
      </div>
    </div>
  )
}

export default App
