import React, { useState } from 'react'
import './App.css'


const App = () => {
  const [count, setCount] = useState(0);

  function increment(){
    setCount(count + 1)
  }

  function decrement(){
    setCount(count - 1)
  }

  function reset(){
    setCount(0)
  }
  
  return (
    <>
      <h1>Counter App</h1>
      <p>Current Count : {count}</p>
      
      <Button text="Increment" fnc={increment}/>
      <Button text="decrement" fnc={decrement}/>
      <Button text="Reset" fnc={reset}/>


    </>
    
  )
}

function Button({text, fnc}){
  return(
    <button onClick={fnc}>{text}</button>
  )
}

export default App