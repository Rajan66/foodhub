import React from 'react'
import './header.css'
import { Button } from '@mui/material/';

const Header = () => {
  return (
    <div className='max-width header'>

      <h1 className='header-left'>FoodHub</h1>
      <div className='header-right'>
        <div className='header-search-container'>
          <div className='header-searchBar'>
            <i className="fi fi-rr-search absolute-center search-icon"></i>
            <input placeholder='Search for restaurant,cuisine or a dish' className='search-input' />
          </div>
        </div>
        <div className='search-button'>
          <Button variant="contained" size="medium">Find Restaurant</Button>
        </div>
        <div className='cart'>
          <i className="fi fi-ss-picnic"></i>
        </div>
        <div className='profile-wrapper'>
          <img src='food-delivery.png'
            alt='Profile'
            className="header-profile-image" />
          <span className='header-username'>Rajan</span>
          <i class="fi fi-rr-angle-small-down absolute-center profile-options-icon"></i>
        </div>
      </div>

    </div>
  )
}

export default Header