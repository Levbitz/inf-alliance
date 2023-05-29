import React from 'react'
import One from "../../assets/MaintenanceImgs/1.jpeg"
import Two from "../../assets/MaintenanceImgs/2.jpeg"

function MaintenanceIms() {
  return (
    <div>
    <div className="row">
    <div className="col l6 s6">
    <img className='responsive-img' src={One} alt="" />
    </div>
    <div className="col l6 s6">
    <img className='responsive-img' src={Two} alt="" />
    </div>
    </div>
    </div>
  )
}

export default MaintenanceIms
