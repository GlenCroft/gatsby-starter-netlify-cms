import React from 'react'
import Link from 'gatsby-link'

import logo from '../img/logo.png'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img src={logo} alt="Dun-Roamin" style={{ width: '88px' }} />
          </figure>
        </Link>
        <Link to="/admin/" className="navbar-item">
          Admin
        </Link>
      </div>
      {/* <div className="navbar-start">
        <Link className="navbar-item" to="/about">
          About
        </Link>
        <Link className="navbar-item" to="/products">
          Products
        </Link>
      </div> */}
    </div>
  </nav>
)

export default Navbar
