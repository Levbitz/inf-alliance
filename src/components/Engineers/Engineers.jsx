import React from 'react'
import One from "../../assets/engineers/1.jpeg"
import Two from "../../assets/engineers/2.jpeg"
import Three from "../../assets/engineers/3.jpeg"
import Four from "../../assets/engineers/4.jpeg"
import Five from "../../assets/engineers/5.jpeg"
import Six from "../../assets/engineers/6.jpeg"
import Seven from "../../assets/engineers/7.jpeg"
import Eight from "../../assets/engineers/8.jpeg"
import "./Engineers.css"



function Engineers() {
  return (
    <div className="engineers">
    <div className="container">
    
    <h5>Our engineers and technicians apply years of experience to deliver optimal solutions based on material selection, service application and functioning criteria.</h5>
    </div>
    <div className="row">
    <div className="col l3 s6">
    <div>
    <img className='responsive-img' src={One} alt="" />
    </div>
    </div>
    <div className="col l3 s6">
    <div>
    <img className='responsive-img' src={Two} alt="" />
    </div>
    </div>
    <div className="col l3 s6">
    <div>
    <img className='responsive-img' src={Three} alt="" />
    </div>
    </div>
    <div className="col l3 s6">
    <div>
    <img className='responsive-img' src={Four} alt="" />
    </div>
    </div>
    
   
    
    </div>
    <div className="row">
    
    
    
    
    <div className="col l3 s6">
    <div>
    <img className='responsive-img' src={Five} alt="" />
    </div>
    </div>
    <div className="col l3 s6">
    <div>
    <img className='responsive-img' src={Six} alt="" />
    </div>
    </div>
    <div className="col l3 s6">
    <div>
    <img className='responsive-img' src={Seven} alt="" />
    </div>
    </div>
    <div className="col l3 s6">
    <div>
    <img className='responsive-img' src={Eight} alt="" />
    </div>
    </div>
    </div>

    <div className="row">
  
    <div className="col l4 s12">
    <div>
    <h5>Electrical Technicians</h5>
    <p>Our Electrical Technicians have both Offshore and Onshore experience and are fully competent.</p>

    <h5>Mechanical Technicians</h5>
    <p>Our Mechanical Technicians have worked in a diverse range of environments and are fully time served to meet the needs of the clients.</p>

    <h5>Crane Operators</h5>
    <p>Our Crane Operators are fully qualified with relevant off/onshore experience and manhours.</p>
    </div>
    </div>
    <div className="col l4 s12">
    <div>
    <h5>Electrical Technicians</h5>
    <p>Our Electrical Technicians have both Offshore and Onshore experience and are fully competent.</p>

    <h5>Mechanical Technicians</h5>
    <p>Our Mechanical Technicians have worked in a diverse range of environments and are fully time served to meet the needs of the clients.</p>

    <h5>Crane Operators</h5>
    <p>Our Crane Operators are fully qualified with relevant off/onshore experience and manhours.</p>
    </div>
    </div>
    <div className="col l4 s12">
    <div>
    <h5>Electrical Technicians</h5>
    <p>Our Electrical Technicians have both Offshore and Onshore experience and are fully competent.</p>

    <h5>Mechanical Technicians</h5>
    <p>Our Mechanical Technicians have worked in a diverse range of environments and are fully time served to meet the needs of the clients.</p>

    <h5>Crane Operators</h5>
    <p>Our Crane Operators are fully qualified with relevant off/onshore experience and manhours.</p>
    </div>
    </div>
    </div>
 

    </div>
  )
}

export default Engineers
