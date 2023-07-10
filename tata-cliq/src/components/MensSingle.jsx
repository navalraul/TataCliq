

import React from 'react'
import './MensSingle.css'

const MensSingle = () => {
  return (
    <div id='smain'>
      <div className='single-main'>
        <div className='sin-left'>
            <div className='img-top'>
                <img src='https://img.tatacliq.com/images/i8/437Wx649H/MP000000015191655_437Wx649H_202211060047171.jpeg'/>
                <img src='https://img.tatacliq.com/images/i8/437Wx649H/MP000000015191655_437Wx649H_202211060047122.jpeg'/>
            </div>
            <div className='img-bot'>
                <img src='https://img.tatacliq.com/images/i8/437Wx649H/MP000000015191655_437Wx649H_202211060047093.jpeg'/>
                <img src='https://img.tatacliq.com/images/i8/437Wx649H/MP000000015191655_437Wx649H_202211060047144.jpeg'/>
                <img src='https://img.tatacliq.com/images/i8/437Wx649H/MP000000015191655_437Wx649H_202211060047195.jpeg'/>
            </div>
            
        </div>
        <div className='sin-right'>
            <div className='right-to'>
              <i class="fa-regular fa-heart"></i><span>Popular: Recently wishlisted 64 times</span>
            </div>
            <div className='info'>
              <h5>U.S.Polo.Assn.</h5>
              <p>U.S.Polo.Assn.Dark Green Regular Fit Shirt</p>
              <h5>MRP: ₹2299</h5>
              <p>Inclusive of all taxes</p>
              <span>Use MENSEOSS coupon to get 10% off on cart value 1999/- and above.</span>
            </div>
            <div className='rating'>
              <div>
                <p>2.8</p><i class="fa-solid fa-star"></i>
                <span>5Rating</span>
              </div>
            </div>
            <div className='color'>
              <h5>Colour :<span>Dark Green</span></h5>
              <div className='color-shirt'>
                <img src='https://img.tatacliq.com/images/i8/97Wx144H/MP000000015191655_97Wx144H_202211060047171.jpeg'/>
                <img src='https://img.tatacliq.com/images/i8/97Wx144H/MP000000015191660_97Wx144H_202211060047151.jpeg'/>
                <img src='https://img.tatacliq.com/images/i8/97Wx144H/MP000000015191658_97Wx144H_202211060047201.jpeg'/>
              </div>
            </div>
            <div className='size'>
              <div className='size-text'>
                <h5>Select Size</h5>
                <p>Size Guide</p>
              </div>
              <div className='size-select'>
                <button>S</button>
                <button>M</button>
                <button>L</button>
                <button>XL</button>
                <button>XXL</button>
              </div>
              <p>Model is 6'0"/185 cms and is wearing an M size
                  100% Cotton, Machine wash</p>
            </div>
            <div className='card'>
              <h5>Available Offers</h5>
              <div className='card-all'>
                <div className='card-img'>
                  <img src='https://assets.tatacliq.com/medias/sys_master/images/27678831411230.png'/>
                </div>
                <div className='card-info'>
                  <h6>10% Instant Discount on Kotak Bank Credit Cards only.</h6>
                  <p>Min Purchase: ₹2500 | Max Discount: ₹1000 <span>more</span></p>
                </div>
              </div>
              <p>See 5 More Offers</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default MensSingle;
