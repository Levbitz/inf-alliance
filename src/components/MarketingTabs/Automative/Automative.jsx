import React from 'react'
import One from  '../../../assets/automative/1.jpeg'
import Two from  '../../../assets/automative/2.jpg'
import Three from  '../../../assets/automative/3.jpeg'
import Four from  '../../../assets/automative/4.jpg'

function Automative() {
  return (
    <div>
    <div className="row">
    <div className="col l3 s6">
    <img className='responsive-img' src={One} alt="" />
    </div>
    <div className="col l3 s6">
    <img className='responsive-img' src={Two} alt="" />
    </div>
    <div className="col l3 s6">
    <img className='responsive-img' src={Three} alt="" />
    </div>
    <div className="col l3 s6">
    <img className='responsive-img' src={Four} alt="" />
    </div>
    </div>
    <div className="row">
    <div className="col l6 s12">
    <div>
    <h5>AUTOMOTIVE AFTERMARKET SUPPLIES</h5>
    <p>At Kayex SA, we strive to provide our customers with the best quality parts available at the lowest price possible. We outsource auto body parts directly from the manufacturer to get the lowest price, therefore passing the savings on to you. We have a huge variety of exterior body parts for many foreign and domestic vehicles.</p>

    <p>Since breakdowns occur unexpectedly, we can deploy spare parts, people and equipment to any part of the World.</p>
    <p>WE CAN HELP YOU
   .</p>
    <p>
    Increase revenues.
    </p>
    <p>
    Decrease expenses.</p>
    </div>
    </div>

    <div className="col l6 s12">
    <div>
    <h5>We carry a wide selection of parts ranging from</h5>
    <p>Hoods, fenders, front bumpers, rear bumpers, headlights, tail lamps, grilles, and mirrors. Besides carrying the traditional auto body parts we also have reinforcements, absorbers, hood hinges, hood latches, inner fenders, door handles, tailgate handles, rear dually fenders, and drop-in bed liners.</p>

    <p>We also carry a line of aftermarket custom parts consisting of euro clear lights, led custom lights, custom chrome grilles, custom chrome door handles and mirrors. In addition to that we offer cooling products such as radiators, condensers, and fan assemblies for every make and model.</p>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Automative
