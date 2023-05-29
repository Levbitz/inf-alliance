import React from 'react'
import One from "../../../assets/Water/1.jpeg"
import Two from "../../../assets/Water/2.jpeg"
import Three from "../../../assets/Water/3.jpeg"
import Four from "../../../assets/Water/1.jpeg"


function Water() {
  return (
    <div className="engineers">
    <div className="container">
    
   
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
    <h5>WATER & SANITATION SERVICES</h5>
    <p>Increasing pressure on our water systems means the products, services and methods on which we have relied for decades now will not suffice</p>

    <p>Demand for innovation has arisen from dwindling supply and increasing demand, flooding, rising costs of infrastructure, energy and chemicals, the sustainability movement and more.</p>

   

    
    </div>
    </div>
   
    <div className="col l6 s12">
    <div>
    <h5>Our Capabilities</h5>
    <p>Our strong and a well-established relationship with growers and producers worldwide put us in the position to provide you with the best strategic solutions that are tailored to your specific needs..</p>

    <h5>A Sampling of our Well Services</h5>
    <p>Agriculture Irrigation</p>
    <p>Boreholes</p>
    <p>Commercial</p>
    <p>Environmental</p>
    <p>Municipal</p>

   
    </div>
    </div>
    </div>
 

    </div>
  )
}

export default Water
