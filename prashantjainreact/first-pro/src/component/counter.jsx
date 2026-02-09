import {useState} from 'react'

function counter() {
    const [counter, setCounter] = useState(0);
    function handleIncrease(){
        setCounter(counter + 1);
    }
    function handleReset(){
        setCounter(0);
    }
    function handleDecrease(){
        setCounter(counter-1);
    }
  return (
    <div >
        <h1>{counter}</h1>
        <button  onClick = {handleIncrease}>increase</button>
        <button onClick = {handleReset}>reset</button>
        <button onClick = {handleDecrease} disabled = {counter ===0}>decrease</button>
        </div>
  )
}

export default counter