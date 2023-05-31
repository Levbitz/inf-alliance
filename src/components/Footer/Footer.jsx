import React from 'react'
import Logo from "../../assets/logo.png"

function Footer() {
  return (
    <footer  class="page-footer black">
    <div class="container">
      <div class="row">
        <div class="col l9 s12">
          <h5 class="white-text">Who We Are</h5>
          <p class="orange-text lighten-2-text"> Infinitz Alliance is a diversified and integrated services company focusing on energy and industrial supply with three core businesses consisting of offshore & marine procurement, consulting & engineering technical services, and the provision of global workforce solutions.</p>

          <p className='orange-text lighten-2-text'>
          Headquartered in South Africa and, with operations spread across all continents, we provide innovative services with an emphasis on operations and specialized solutions to make your business faster, simpler and more efficient.
          </p>
        </div>

        <div className="col l3 s12">
        <div>
        <img className='responsive-img' src={Logo} alt="" />
        </div>
        </div>

        
        
      </div>
    </div>
    <div id='showmore' className="container">
    <div className="row">

    <h5>GENERAL INQUIRIES:

    </h5>
    <p>

    +27218796723 (direct line)</p>
        <div style={{
            height:2,
            width: '100%',
        }} className='orange lighten-2'></div>
        </div>
    </div>

    <div className="container">
    <div className="row">
    <div className="col l3 s12">
    <div style={{
        borderRight:'1px #ffb74d solid',
        paddingRight:30,

    }}>
    <h5>SOUTH AFRICA</h5>
    <p>

    Address: Ground Floor, Burg House, Belmont Road, Rondebosch, Cape Town, 7979, South Africa</p>
   
    </div>
    </div>
    <div className="col l3 s12">
    <div style={{
        borderRight:'1px #ffb74d solid',
        paddingRight:30,

    }}>
    <h5>USA</h5>
    
    <p>Head office 
</p>
    <p>

    229 W 43rd St
    8th Fl
    New York, NY 10036, USA</p>
    </div>
    </div>
    <div className="col l3 s12">
    <div style={{
        borderRight:'1px #ffb74d solid',
        paddingRight:30,

    }}>
    <h5>Canada</h5>
    
   
    <p>

    Tel: +1 289 232 6212 
    3381 Steeles Avenue East, Suite 310
    Toronto, ON M2H 3S7, Canada</p>
    </div>
    </div>
    <div className="col l3 s12">
    <div style={{
        borderRight:'1px #ffb74d solid',
        paddingRight:30,

    }}>
    <h5>Europe Branch</h5>
    
 
    <p>
    
    Tel: +32 460 248 179 
     Rue de la Loi/Wetstraat 175. B-1048 Bruxelles/Brussel.
    Belgique/België</p>
    </div>
    </div>
    </div>
    </div>
    <div class="footer-copyright">
      <div class="container">
      DISCLAIMER | Copyright © 2023 Infinitz Alliance SA (PTY) LTD , All rights reserved.
      
      </div>
    </div>
  </footer>
  )
}

export default Footer
