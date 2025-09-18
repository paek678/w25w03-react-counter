import './App.css'
import { useState } from 'react'



function App() {
  const [count, setCount] = useState(0) //상태  
  
  return (
    /* 리턴 묶음 용 (한번에 반환)*/
    <> 
      <h1>{count}</h1>
      <button 
        onClick={() => {
          setCount((prev) => prev +1 )
        }}
      >
        증가
      </button>
    </>
  )
}

export default App
