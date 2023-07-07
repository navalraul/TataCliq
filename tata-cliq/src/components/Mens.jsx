
import React from 'react';
import './Mens.css'
import { useNavigate } from 'react-router-dom';

const Mens = () => {

  const router = useNavigate();

  function goto () {
    router('/mens-multi')
  }
  return (
    <div id='mscreen'>
      <div className='slide-container'>
        <div className='slide'>
            <img src='https://assets.tatacliq.com/medias/sys_master/images/47513566183454.jpg'/>
        </div>
      </div>
      <div className='second' onClick={goto}>
        <img src='https://assets.tatacliq.com/medias/sys_master/images/47396042702878.jpg'/>
        <img src='https://assets.tatacliq.com/medias/sys_master/images/47396042768414.jpg'/>
        <img src='https://assets.tatacliq.com/medias/sys_master/images/47396042833950.jpg'/>
        <img src='https://assets.tatacliq.com/medias/sys_master/images/47396042899486.jpg'/>
        <img src='https://assets.tatacliq.com/medias/sys_master/images/47396042965022.jpg'/>
        <img src='https://assets.tatacliq.com/medias/sys_master/images/47396043030558.jpg'/>
        <img src='https://assets.tatacliq.com/medias/sys_master/images/47396043096094.jpg'/>
        <img src='https://assets.tatacliq.com/medias/sys_master/images/47396043161630.jpg'/>
      </div>
      <div className='third'>
        <img src='https://assets.tatacliq.com/medias/sys_master/images/46762762436638.jpg'/>
        <img src='https://assets.tatacliq.com/medias/sys_master/images/47596855787550.jpg'/>
      </div>
      <div className='main-img3'>
        <img src='https://assets.tatacliq.com/medias/sys_master/images/47396043882526.jpg'/>
      </div>
      <div className='five'>
        <img src='https://assets.tatacliq.com/medias/sys_master/images/47396043948062.jpg'/>
        <img src='https://assets.tatacliq.com/medias/sys_master/images/47396044013598.jpg'/>
        <img src='https://assets.tatacliq.com/medias/sys_master/images/47396044079134.jpg'/>
        <img src='https://assets.tatacliq.com/medias/sys_master/images/47396044144670.jpg'/>
      </div>
      <div className='main-img3'>
        <img src='https://assets.tatacliq.com/medias/sys_master/images/47396044210206.jpg'/>
      </div>
      <div className='main-img6'>
        <img src='https://assets.tatacliq.com/medias/sys_master/images/47396044275742.jpg'/>
        <img src='https://assets.tatacliq.com/medias/sys_master/images/47396044341278.jpg'/>
        <img src='https://assets.tatacliq.com/medias/sys_master/images/47396044406814.jpg'/>
        <img src='https://assets.tatacliq.com/medias/sys_master/images/47396044472350.jpg'/>
      </div>
      <div className='main-img3'>
        <img src='https://assets.tatacliq.com/medias/sys_master/images/47396044865566.jpg'/>
      </div>
      <div className='main-img6'>
        <img src='https://assets.tatacliq.com/medias/sys_master/images/47396044931102.jpg'/>
        <img src='https://assets.tatacliq.com/medias/sys_master/images/47396044996638.jpg'/>
        <img src='https://assets.tatacliq.com/medias/sys_master/images/47396045062174.jpg'/>
        <img src='https://assets.tatacliq.com/medias/sys_master/images/47396045127710.jpg'/>
      </div>
      <div className='main-img3'>
        <img src='https://assets.tatacliq.com/medias/sys_master/images/47396045193246.jpg'/>
      </div>
      <div className='main-img6'>
        <img src='https://assets.tatacliq.com/medias/sys_master/images/47396047781918.jpg'/>
        <img src='https://assets.tatacliq.com/medias/sys_master/images/47396047847454.jpg'/>
        <img src='https://assets.tatacliq.com/medias/sys_master/images/47396047912990.jpg'/>
        <img src='https://assets.tatacliq.com/medias/sys_master/images/47396047978526.jpg'/>
      </div>
    </div>
  )
}

export default Mens;
