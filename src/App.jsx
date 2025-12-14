import { useState } from 'react'
import './App.css'
import NumPud from './Components/NumPud/NumPud'
import Input from './Components/Input/Input'

function App() {
  const [inputValue, setInputValue] = useState('')

  return (
    <>
      <Input value={inputValue} />
      <NumPud value={inputValue} touch={setInputValue} />
    </>
  )
}

export default App
