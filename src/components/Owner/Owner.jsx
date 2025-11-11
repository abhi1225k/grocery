import React from 'react'
import './Owner.css'
import { assets } from '../../assets/assets'

const Owner = () => {
  return (
    <div className='owner'>
      <div className='owner-strength'>
        <h1>Our Strengths</h1>
        <h2>Crafted with Care, Built to Last</h2>
         <div className='trophy-row'>
            <img src={assets.trophy} alt='' height='50px' className='lo'/>
            <p>Best Quality</p>
            <img src={assets.savenature} alt='' className='lo'/>
            <p>100% Natural product </p>
            <br/>
            
            <img src={assets.quality} alt='' height='50px' className='lo'/>
            <p>Quality Food</p>
            
         </div>
      </div>
    </div>
  )
}

export default Owner
