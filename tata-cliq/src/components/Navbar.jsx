

import React, { useContext, useEffect, useState } from 'react'
import './Navbar.css';
import { AuthContext } from './Context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const [userData, setUserData] = useState();
    const router = useNavigate();
    const { state, Logout } = useContext(AuthContext);

    useEffect(() => {
        if (state) {
            setUserData(state.user)
        }
    }, [state])

    // console.log(userData, "userData")

    
    return (
        <div id='nmain'>
            <div className='left'>
                <img src='https://www.tatacliq.com/src/general/components/img/group.svg' />
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
                        { userData?.name?
                            <p onClick={Logout}>Log</p>:
                            <p onClick={() => router('/register')}>Sign in/ Sign Up</p>
                        }
                        {userData?.role == "Seller" && <p onClick={() => router('/add-product')}>Add</p>}
                    </div>
                </div>
                <div className='right-bot'>
                    <div className='right-bot-fi'>
                        <p onClick={ () => router('/all-products')}>Categories</p>
                        <i class="fa-solid fa-angle-down"></i>
                    </div>
                    <div className='right-bot-se'>
                        <p>Brands</p>
                        <i class="fa-solid fa-angle-down"></i>
                    </div>
                    <div className='right-bot-th'>
                        <div className='right-bot-th-th'>
                            <i class="fa-solid fa-magnifying-glass"></i>
                            <input placeholder='Search for Category' />
                        </div>
                    </div>
                    <div className='right-bot-fo'>
                        <i class="fa-regular fa-heart" onClick={ () => router('/whishlist')}></i>
                        <i class="fa-solid fa-bag-shopping" onClick={() => router('/cart')}></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar