import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className='footer-content-left'>
            <img src={assets.foodlogo} alt='' className='fimg'/>
            <p>A food shop is a business that prepares and serves food and drinks to customers, often for consumption on-site, but also through take-out and delivery. They vary widely in type, from fast-food chains and casual diners to high-end fine dining establishments</p>
            <div className='footer-social-icon'>
                <img src={assets.facebook_icon} alt=''/>
                <img src={assets.twitter_icon} alt=''/>
                <img src={assets.linkedin_icon} alt=''/>
            </div>
        </div>
        <div className='footer-content-center'>
            <h2>Restaurant</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className='footer-content-right'>
            <h2>Get In Touch</h2>
            <ul>
                <li>+91 9175061225</li>
                <li>abhishekkaldate35@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr/>
      <p className='footer-copyright'>Copyright 2025 @groceryShop.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
