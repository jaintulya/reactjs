import React from 'react'
import './src/App.css'
import Link from './Link'
const Nav = () => {
  return (
  <div className="navbar">
       <Logo/>

       <Link/>
        <div className="menubar">
          <span className="bar1"></span>
          <span className="bar1"></span>
          <span className="bar1"></span>
        </div>
      </div>
  )
}

export default Nav
