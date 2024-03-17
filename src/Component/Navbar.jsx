import React from 'react'
import { NavLink, Link } from 'react-router-dom'


export const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <div className=" ashih" id="navbarSupportedContent">
    <ul className="nav">
  <li className="nav-item">
    <NavLink to="/" className="nav-link pe-1 px-sm-3 mx-sm-2" aria-current="page" href="#">Home</NavLink>
  </li>
  <li className="nav-item active">
    <NavLink to="/project" className="nav-link pe-1 px-sm-4" href="#">Project</NavLink>
  </li>
  <li className="nav-item">
    <NavLink to="/about" className="nav-link pe-1 px-sm-4" href="#">About</NavLink>
  </li>
  <li className="nav-item">
    <NavLink to="/contact" className="nav-link pe-1 px-sm-4" href='#'>Contact</NavLink>
  </li>
</ul>
    </div>
  </div>
</nav>
    </>
  )
}
