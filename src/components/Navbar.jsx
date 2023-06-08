import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar-container'>
          <nav>
        <NavLink className="first navlink" to="/">
          Inbox 
        </NavLink>
        <NavLink className="navlink" to="/spam">
          Spam
        </NavLink>
        <NavLink className="navlink" to="/trash">
          Trash
        </NavLink>
      </nav>
    </div>
  )
}

export default Navbar