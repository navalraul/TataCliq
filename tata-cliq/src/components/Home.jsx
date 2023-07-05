

import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom'


const Home = () => {
  const router = useNavigate();

  function goto () {
    router('/mens')
  }
  return (
    <div id='hscreen'>
      <div className='slide-container'>
        <div className='slide'>
            <img src='https://assets.tatacliq.com/medias/sys_master/images/47596855394334.gif'/>
        </div>
      </div>
      <div className='main-img1' onClick={goto}>
        <img src='https://assets.tatacliq.com/medias/sys_master/images/47596848218142.jpg'/>
        <img src='https://assets.tatacliq.com/medias/sys_master/images/47548678373406.jpg'/>
        <img src='https://assets.tatacliq.com/medias/sys_master/images/47445466152990.jpg'/>
        <img src='https://assets.tatacliq.com/medias/sys_master/images/47445466218526.jpg'/>
        <img src='https://assets.tatacliq.com/medias/sys_master/images/47575793303582.jpg'/>
        <img src='https://assets.tatacliq.com/medias/sys_master/images/47445466349598.jpg'/>
        <img src='https://assets.tatacliq.com/medias/sys_master/images/47445466415134.jpg'/>
        <img src='https://assets.tatacliq.com/medias/sys_master/images/47445466480670.jpg'/>
        <img src='https://assets.tatacliq.com/medias/sys_master/images/47445466546206.jpg'/>
        <img src='https://assets.tatacliq.com/medias/sys_master/images/47445466611742.jpg'/>
      </div>
      <div className='main-img2'>
        <img src='https://assets.tatacliq.com/medias/sys_master/images/46762762436638.jpg'/>
        <img src='https://assets.tatacliq.com/medias/sys_master/images/47596855787550.jpg'/>
        <img src='https://assets.tatacliq.com/medias/sys_master/images/46690782937118.jpg'/>
      </div>
      <div className='main-img3'>
        <img src='https://assets.tatacliq.com/medias/sys_master/images/47532422234142.png'/>
      </div>
      <div className='main-img4'>
        <img src='https://assets.tatacliq.com/medias/sys_master/images/47596857851934.jpg'/>
        <img src='https://assets.tatacliq.com/medias/sys_master/images/47596865257502.jpg'/>
        <img src='https://assets.tatacliq.com/medias/sys_master/images/47596857983006.jpg'/>
        <img src='https://assets.tatacliq.com/medias/sys_master/images/47596866830366.jpg'/>
      </div>
      <div className='main-img3'>
        <img src='https://assets.tatacliq.com/medias/sys_master/images/47520344211486.jpg'/>
      </div>
      <div className='main-img6'>
        <img src='https://assets.tatacliq.com/medias/sys_master/images/47596853559326.jpg'/>
        <img src='https://assets.tatacliq.com/medias/sys_master/images/47596650758174.jpg'/>
        <img src='https://assets.tatacliq.com/medias/sys_master/images/47596853493790.jpg'/>
        <img src='https://assets.tatacliq.com/medias/sys_master/images/47596853690398.jpg'/>
      </div>
      <div className='main-img3'>
        <img src='https://assets.tatacliq.com/medias/sys_master/images/47520344277022.jpg'/>
      </div>
      <div className='main-img8'>
        <img src='https://assets.tatacliq.com/medias/sys_master/images/47513577619486.jpg'/>
        <img src='https://assets.tatacliq.com/medias/sys_master/images/47513577685022.jpg'/>
        <img src='https://assets.tatacliq.com/medias/sys_master/images/47513577750558.jpg'/>
        <img src='https://assets.tatacliq.com/medias/sys_master/images/47513577816094.jpg'/>
      </div>
      <div className='main-img3'>
        <img src='https://assets.tatacliq.com/medias/sys_master/images/47520344342558.jpg'/>
      </div>
      <div className='main-img6'>
        <img src='https://assets.tatacliq.com/medias/sys_master/images/47513030197278.jpg'/>
        <img src='https://assets.tatacliq.com/medias/sys_master/images/47513030328350.jpg'/>
        <img src='https://assets.tatacliq.com/medias/sys_master/images/47548680568862.jpg'/>
        <img src='https://assets.tatacliq.com/medias/sys_master/images/47548679520286.jpg'/>
      </div>
      <div className='main-img3'>
        <img src='https://assets.tatacliq.com/medias/sys_master/images/47520344408094.jpg'/>
      </div>
      <div className='main-img12'>
        <img src='https://assets.tatacliq.com/medias/sys_master/images/47596866895902.jpg'/>
        <img src='https://assets.tatacliq.com/medias/sys_master/images/47596867223582.jpg'/>
        <img src='https://assets.tatacliq.com/medias/sys_master/images/47596867944478.jpg'/>
        <img src='https://assets.tatacliq.com/medias/sys_master/images/47596866961438.jpg'/>
        <img src='https://assets.tatacliq.com/medias/sys_master/images/47596854804510.jpg'/>
        <img src='https://assets.tatacliq.com/medias/sys_master/images/47596854870046.jpg'/>
      </div>
    </div>

  )
}

export default Home;