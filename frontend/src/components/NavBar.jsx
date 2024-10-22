import React from 'react'
import '../css/NavBar.css'

const NavBar = () => {
  return (
       <nav className="navbar">
            <div className="navbar-container">
                <button className="menu-icon">☰</button>
                <div className="auth-buttons">
                    <a href="#" className="login">Log in</a> | <a href="#" className="signup">Sign up</a>
                </div>
                <div className="logo">FLiCKD</div>
            </div>
        </nav>
  )
}

export default NavBar
