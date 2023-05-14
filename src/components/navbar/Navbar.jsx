import React from 'react'
import './Navbar.scss'

function Navbar() {
  return (
    <div className='navbar'>
        <div className="container">
            <div className="logo">
                <span>EasyService</span>
            </div>
            <div className="links">
                <span>EasyService Business</span>
                <span>Explore</span>
                <span>Sign in</span>
                <span>Start Selling</span>
                <button>Register</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar