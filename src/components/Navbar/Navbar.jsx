import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';


const Navbar = ({ setShowLogin }) => {

  const [menu, setMenu] = useState('home');

  const { getTotalCartAmount } = useContext(StoreContext);

  const [showDropdown, setShowDropdown] = useState(false);

  const [showMobileDropdown, setShowMobileDropdown] = useState(false);


  return (
    <div className='navbar'>
      <Link to={'/'}><img src={assets.foodlogo} alt='' className='slogo' /></Link>
      <ul className='navbar-menu'>
        <Link to='/' onClick={() => setMenu('home')} className={menu === 'home' ? 'active' : ''}>Home</Link>
        <a href='#explore-menu' onClick={() => setMenu('menu')} className={menu === 'menu' ? 'active' : ''}>Menu</a>
        <div
          className="navbar-dropdown"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <a href="#" className={menu === 'services' ? 'active' : ''}>
           
          </a>
           <a href='#' >Services</a>
          {showDropdown && (
            <div className="dropdown-content">
              <Link to="/design" onClick={() => setShowDropdown(false)}>Making</Link>
              <Link to="/development" onClick={() => setShowDropdown(false)}>Development</Link>
              <Link to="/marketing" onClick={() => setShowDropdown(false)}>Marketing</Link>
            </div>
          )}
        </div>
        <a href='#owner' onClick={() => setMenu('menu')} className={menu === 'menu' ? 'active' : ''}>Owner</a>
        <a href='#app-download' onClick={() => setMenu('mobile-app')} className={menu === 'mobile-app' ? 'active' : ''}>Mobile App</a>
        <a href='#footer' onClick={() => setMenu('contact-us')} className={menu === 'contact-us' ? 'active' : ''}>Contact Us</a>
      </ul>
      <div className='navbar-right'>
          
          <div className='mobile-services'>
          <button
            className='mobile-services-btn'
            onClick={() => setShowMobileDropdown(!showMobileDropdown)}
          >
            Services ▼
          </button>

          {showMobileDropdown && (
            <div className='mobile-dropdown'>
              <Link to="/design" onClick={() => setShowMobileDropdown(false)}>Store</Link>
              <Link to="/development" onClick={() => setShowMobileDropdown(false)}>Development</Link>
              <Link to="/marketing" onClick={() => setShowMobileDropdown(false)}>Marketing</Link>
            </div>
          )}
        </div>



        <img src={assets.search_icon} alt='' />
        <div className='navbar-search-icon'>
          <Link to={'/cart'}><img src={assets.basket_icon} alt='' /></Link>
          <div className={getTotalCartAmount() === 0 ? '' : 'dot'}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign In</button>
      </div>

    </div>
  )
}

export default Navbar
