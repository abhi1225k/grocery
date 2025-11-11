import React from 'react'
import './Man.css'
import { assets } from '../../assets/assets'

const Man = () => {
  return (
    <div className='man' id='owner'>
      <div className='man1'>
      <h1>Owner of <br/>Grocery Shop</h1>
        <img src={assets.foodlogo} alt='' height='200px' width='200px'></img>
        <p>success hinges on a combination of business planning, financial management, marketing, and leadership skills. <br/>
        Key activities include creating a strong business plan, securing funding, finding a prime location, managing daily<br/>
         operations like staff and inventory, and marketing the business through various channels, including social media.<br/>
          You'll also need to stay on top of finances, delegate responsibilities, and develop both hard and soft skills to effectively manage the team and operations</p>
          <p>Market your restaurant: Implement a strong marketing strategy, including social media engagement with high-quality photos and interactive content.
Invest in technology: Utilize tools like online ordering systems and restaurant management software.
Seek growth opportunities: Look for chances to expand or remodel, and partner with platforms like Zomato to reach more customers</p>
      </div>
    </div>
  )
}

export default Man
