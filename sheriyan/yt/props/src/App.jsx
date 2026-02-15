import React from 'react'
import Card from './components/card'

const App = () => {
  return (
    <div className='parent'>
     <Card user='Prashant' age={18} img="https://plus.unsplash.com/premium_photo-1770933116384-ae2d676e76c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8" ></Card>
     <Card user='Sai' age={19} img="https://plus.unsplash.com/premium_photo-1770933116384-ae2d676e76c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8" ></Card>
    
    </div>
  )
}

export default App