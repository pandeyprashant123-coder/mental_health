import React from 'react'
import { Link } from 'react-router-dom'

import './Navbar.css'

const Navbar = () => {
  return (
    <div>
        <div className="mainhead">
        <header className="header">
            <div className="logo">
                <a href=""><img src="logo.jfif" alt="Talk Space"/></a>
            </div>
        </header>
        <nav className="navbar">
            <div id="menu">
                <ul className="menu-items">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">Blog</Link></li>
                    <li><Link to="/">About</Link></li>
                    <li><Link to="/" className="login">Login</Link></li>
                </ul>
            </div>
        </nav>
{/*         
        <div className="burger">
            <div className="menu-btn">
                <div className="menu-btn__burger"></div>
              </div>
        </div> */}
    </div>
    </div>
  )
}

export default Navbar