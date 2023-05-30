import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../../assets/logo.jpeg"

function NavbarTwo() {
  return (
    <nav className='black z-depth-0'>
    <div class="nav-wrapper container">
      <Link to='/' class="brand-logo">
      <div style={{
        marginTop:10
      }}>
      <img width={100} src={Logo} alt="" /> 
      </div>
      
      </Link>
      <ul id="nav-mobile" class="right ">
      
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  </nav>
  )
}

export default NavbarTwo
