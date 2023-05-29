import React from 'react'
import One from "../../../assets/Food/1.jpeg"
import Two from "../../../assets/Food/2.jpeg"
import Three from "../../../assets/Food/3.jpeg"
import Four from "../../../assets/Food/4.jpeg"


function Food() {
  return (
    <div className="engineers">
    <div className="container">
    
    <h5>FOOD & BEVERAGE DISTRIBUTIONS.</h5>
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
    
    <p>Since 2004 we have been a trusted supplier of quality perishables and non-perishables foods all over the world.</p>

   
<h5>Our Capabilities</h5>
<p>Our strong and a well-established relationship with growers and producers worldwide put us in the position to provide you with the best strategic solutions that are tailored to your specific needs.</p>
    
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

export default Food
