import { useState } from 'react'
import Header from './Components/Header/Header'
import Card from './Components/Card/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Card/>
    </>
  )
}

export default App
