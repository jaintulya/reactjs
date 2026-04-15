import React, { useState } from 'react'

const App = () => {
  

const [num, setNum]=useState({user:'manan',age:18})
  const clickedBtn = ()=>{
    const newNum = {...num}
    newNum.user = "Aman"
    newNum.age = '21'
setNum(newNum)
  }
  const dblbtn = () => {
    setNum(num)
  }

  return (
    <div>
      <h1>{num.user} {num.age}</h1>
      <button onDoubleClick={dblbtn} onClick={clickedBtn}>Click to Change </button>

    </div>
  )
}

export default App
