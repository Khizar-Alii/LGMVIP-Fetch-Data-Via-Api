import React from 'react'
import "./Navbar.css"

function Navbar({ onGetUserData }) {
  return (
    <div className='Navbar'>
      <header>
        <a href='/'>KhiZi</a>
        <nav>
            <ul>
                <li><a href='/'>Home</a></li>
                <li><a href='/'>About</a></li>
                <li><a href='/'>Contact</a></li>
                <li><button onClick={onGetUserData} className='navBtn'>Get User</button></li>
            </ul>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
