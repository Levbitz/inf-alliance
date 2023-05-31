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
import { BrowserRouter  , Routes ,Route} from 'react-router-dom'
import ContactPage from './Pages/ContactPage/ContactPage'
import Offshore from './components/Offshore/Offshore'
import MarinLast from './components/MarinLast/MarinLast'

function App() {
  return (
    <div>
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<HomePage/>}/>
   <Route path="/contact" element={<ContactPage/>}/>
   </Routes>
    <Footer/>
   </BrowserRouter>
    
    </div>
  )
}

export default App


const HomePage = ()=>{
  return(
    <>
    <Showcase/>
    <MarinOne/>
    <Offshore/>
    <MaintenanceImsOne/>
    <Marin/>
   <Maintenance/>
    <MaintenanceIms/>
<Products/>
     <Global/> 

     <MarinLast/>
    <div className="container">
    
  
    <Engineers/>
    </div>
    
    <Market/>
    </>
  )
}
