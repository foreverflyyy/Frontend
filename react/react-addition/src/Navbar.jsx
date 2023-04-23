import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './css/Navbar.css'

const Navbar = () => {

  return (
     <div>
      <div className='navbar'>
         <div>Main Page</div>
         <div><NavLink to="/login">Sign in</NavLink></div>
         <div><NavLink to="/about">About</NavLink></div>
         <div><NavLink to="/posts">Posts</NavLink></div>
      </div>
      <Outlet/>
      
    </div>
  )
}

export default Navbar