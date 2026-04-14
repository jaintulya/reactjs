import React, { useState } from 'react'

const App = () => {

const [a, setA] = useState(0)
function inc(){
  setA(a+1)
}
function dec (){
setA(a-1)
}
function reset (){
  setA(0)
}
  return (
    <div>
      <h1>Value of num is {a}</h1>
      <button onClick={inc}>Increment</button>
      <button onClick={reset}>Reset</button>
      <button onClick={dec}>Decrement</button> 
      
    </div>
  )
}   
  
export default App
