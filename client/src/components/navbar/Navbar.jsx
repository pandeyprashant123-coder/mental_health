import React from 'react'

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
                    <li><a href="#">Home</a></li>
                    <li><a href="blog.html">Blog</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="login.html" className="login">Login</a></li>
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