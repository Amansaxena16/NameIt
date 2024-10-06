import Logo from './components/logo/Logo'
import Input from './components/input/Input'
import ResultCard from './components/resultCard/Result'
import { useState } from 'react'

function App() {
  const [inputValue, setInputValue] = useState('')
  
  function handleWidth(value){
    setInputValue(value)
  }
  return (
    <>
      <Logo width={inputValue.trim() === '' ? '28rem': '10rem'}/>
      <Input onInputChange={handleWidth}/>
      <ResultCard keyword={inputValue}/>
    </>
  )
}

export default App
