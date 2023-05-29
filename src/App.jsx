import React from 'react'
import Footer from './components/Footer/Footer'
import Market from './components/Market/Market'
import Engineers from './components/Engineers/Engineers'
import Global from './components/Globals/Global'
import Products from './components/Products/Products'
import MaintenanceIms from './components/MaintenanceImgs/MaintenanceIms'
import Maintenance from './components/Maintenance/Maintenance'
import Marin from './components/Marine/Marin'
import MaintenanceImsOne from './components/MaintenanceImsOne/MaintenanceImsOne'
import MarinOne from './components/MarineOne/MarinOne'
import Showcase from './components/Showcase/Showcase'

function App() {
  return (
    <div>
    <Showcase/>
    <MarinOne/>
    <MaintenanceImsOne/>
    <Marin/>
   <Maintenance/>
    <MaintenanceIms/>
<Products/>
     <Global/> 
    <div className="container">
    
  
    <Engineers/>
    </div>
    
    <Market/>
     <Footer/>
    </div>
  )
}

export default App
