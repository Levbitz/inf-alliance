import React from 'react'
import One from "../../../assets/medical/1.jpeg"
import Two from "../../../assets/medical/2.jpeg"
import Three from "../../../assets/medical/3.jpeg"
import Four from "../../../assets/medical/4.jpeg"


function Mdeical() {
  return (
    <div className="engineers">
    <div className="container">
    
    <h5>MEDICAL SUPPLIES.</h5>
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
  
    <div className="col l6 s12">
    <div>
    <h5>We specialize in supplying & sourcing medical consumables.</h5>
    <p>We’ll help find the product you need.

    We are dedicated to sourcing and supplying high quality single-use consumables across most medical specialties.</p>

   

    
    </div>
    </div>
   
    <div className="col l6 s12">
    <div>
    <h5>Products categories:</h5>
    <p>Surgical instruments.</p>
    <p>Medical consumables</p>
    <p>Rehabilitation and healthcare products</p>
    <p>Diagnostic devices</p>
    <p>Hospital furniture</p>

   
    </div>
    </div>
    </div>
 

    </div>
  )
}

export default Mdeical
