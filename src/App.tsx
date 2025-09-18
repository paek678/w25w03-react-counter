import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
     /* 리턴 묶음 용 */
    <> 
      <h1>카운터</h1>
      <button>증가</button>
    </>
  )
}

export default App
