import { useState } from 'react'
import Card from './components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-slate-600 rounded-full p-2 '>Tailwind</h1>
      <br />
      <Card title="Collaboration" />
      <br />
      <Card />
    </>
  )
}

export default App
