import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from "../../assets/logo.png"
import {BiMenu} from 'react-icons/bi'
import {BsFacebook} from 'react-icons/bs'
import {AiOutlineMail,AiFillInstagram} from 'react-icons/ai'

function NavbarTwo() {
  const [showdrop , setShowDrop] = useState(false)
  return (
    <nav className='black z-depth-0'>
    <div class="nav-wrapper container hide-on-med-and-down ">

   
      <Link to='/' class="brand-logo left ">
      <div style={{
        marginTop:10
      }}>
      <img width={100} src={Logo} alt="" /> 
      </div>
      
      </Link>
      <ul id="nav-mobile" class="right ">
      
        <li><Link to="/contact">Contact</Link></li>
        <li><a style={{
        fontWeight:'bold',
        
         }}
        
         
         href="#showmore"> WHO ARE WE</a></li>
        <li ><BsFacebook size={25} style={{
          paddingTop:10,
          marginRight:10
        }}   color='#fff'/></li>
        <li ><AiOutlineMail size={24} style={{
          paddingTop:10,
          marginRight:10
        }}   /></li>
        <li><AiFillInstagram size={24} style={{
          paddingTop:10,
          marginRight:10
        }}   /></li>
      </ul>
    </div>
    <div class="nav-wrapper container hide-on-med-and-up ">

   <BiMenu onClick={()=>setShowDrop(!showdrop)} size={22}/>
   <ul id="nav-mobile" class="right ">
      
   <li><Link to="/contact">Contact</Link></li>
  
 </ul>


  {showdrop ?( <div className='center black' style={{
    position:'relative',
    paddingTop:10
    
   }}>
   <div>
      <p><Link onClick={()=>setShowDrop(false)} to='/'><img width={100} src={Logo} alt="" /></Link> </p>
   <p > <a style={{
    border:'1px coral solid',
padding:"1px 10px",
fontWeight:"bold"
   }}
   onClick={()=>setShowDrop(false)}
 
   href="#showmore"> WHO ARE WE</a></p>
   <p><BsFacebook size={24} onClick={()=>setShowDrop(false)}   color='#fff'/></p>
   <p><AiOutlineMail size={24} onClick={()=>setShowDrop(false)}   /></p>
   <p><AiFillInstagram size={24} onClick={()=>setShowDrop(false)}   /></p>
   </div>
   </div>): null}

  
     
    </div>
  </nav>
  )
}

export default NavbarTwo
