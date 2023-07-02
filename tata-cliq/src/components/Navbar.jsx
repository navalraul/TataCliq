

import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div id='nmain'>
        <div className='left'>
            <img src='https://www.tatacliq.com/src/general/components/img/group.svg'/>
        </div>
        <div className='right'>
            <div className='right-top'>
                <div className='right-top-fi'>
                    <p>Tata CLiQ Luxury</p>
                </div>
                <div className='right-top-se'>
                    <p>Cliq Cash</p>
                    <p>Gift Card</p>
                    <p>Cliq Care</p>
                    <p>Track Orders</p>
                    <p>Sign in/ Sign Up</p>
                </div>
            </div>
            <div className='right-bot'>
                <div className='right-bot-fi'>
                    <p>Categories</p>
                    <i class="fa-solid fa-angle-down"></i>
                </div>
                <div className='right-bot-se'>
                    <p>Brands</p>
                    <i class="fa-solid fa-angle-down"></i>
                </div>
                <div className='right-bot-th'>
                    <div className='right-bot-th-th'>
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input placeholder='Search for Category'/>
                    </div>
                </div>
                <div className='right-bot-fo'>
                    <i class="fa-regular fa-heart"></i>
                    <i class="fa-solid fa-bag-shopping"></i>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar