import React from 'react'
import One  from  '../../assets/Products/1.jpeg'
import Two  from  '../../assets/Products/2.jpeg'
import Three  from  '../../assets/Products/3.jpeg'

function Products() {
  return (
    <div>
    <div className="container">
    <div className="row">
    <h5>
    Most products used in the marine industry will be accompanied by complete
certification and traceability such as Lloyd’s, ABS, or DNV certification.
    </h5>

    
    </div>

    <div className="row">
    <div className="col l4 s6">
    <div>
    <img className='responsive-img' src={One} alt="" />
    </div>
    </div>
    <div className="col l4 s6">
    <div>
    <img className='responsive-img' src={Two} alt="" />
    </div>
    </div>
    <div className="col l4 s6">
    <div>
    <img className='responsive-img' src={Three} alt="" />
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Products
