import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Design from './pages/Design/Design'
import Development from './pages/Development/Development'
import Marketing from './pages/Marketing/Marketing'
import ShopFlow from './components/ShopFlow/ShopFlow'
import Orders from './pages/Orders/Orders'





const App = () => {

  const [showLogin, setShowLogin] = useState(false)

  const location = useLocation();

  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path="/design" element={<Design />} />
          <Route path="/development" element={<Development />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/nearby" element={<ShopFlow/>} />
          <Route path="/order" element={<Orders/>} />
        </Routes>
      </div>

      {location.pathname!=="/nearby"&&<Footer />}
    </>
  )
}

export default App
