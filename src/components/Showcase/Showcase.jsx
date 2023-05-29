import React from 'react'
import One from "../../assets/1.mp4"
import Logo from "../../assets/logo.jpeg"

function Showcase() {
  return (
    <div style={{
        position:"relative"
    }} >
    <div style={{
        position:"absolute",
        top:10,
        left:10
    }}>
   <img width={100} src={Logo} alt="" /> 
    </div>
    <video
    autoPlay={true}
    muted={true}
    loop={true}
    width={"100%"}
    height={"100%"}
    src={One}
  ></video>
    
    </div>
  )
}

export default Showcase
