import React from 'react'


const App = () => {
  const wheel = (elem)=>{
    console.log(elem.deltaY)
  }
  return (
    <div onWheel={wheel}>
      <div className="page1">1</div>
<div className="page2">2</div>
<div className="page3">3</div>
    </div>
  )
}

export default App
