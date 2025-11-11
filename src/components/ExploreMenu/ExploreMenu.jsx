import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {


  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore Our shop</h1>
      <p className='explore-menu-text'>to search, analyze, and visualize data. It may include features like filter results, data panels that open automatically for selected items, and options to view metrics, events</p>
      <div className='explore-menu-list'>
        {menu_list.map((item,index)=>{
            return (
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?'All':item.menu_name)} key={index} className='explore-menu-list-item'>
                    <img className={category===item.menu_name?"active":""} src={item.menu_image}/>
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
      </div>
      <hr/>
    </div>
  )
}

export default ExploreMenu

