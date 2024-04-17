import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

const addValue = () => {
  count++
  setCount(count)
}

const removeValue = () => {
  if(count > 0){
    count--;
    setCount(count)
  }
}

  return (
    <>
      <h1>Counter</h1>
      <h1>{count}</h1>
      <button onClick={addValue}>Increment</button>
      <br />
      <br />
      <button onClick={removeValue}>Decrement</button>
    </>
  )
}

export default App
