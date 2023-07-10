

import React from 'react'
import './Cart.css'

const Cart = () => {
  return (
    <div id='cmain'>
      <div className='header'>
        <div className='header-main'>
            <div className='bag'>
                <h1>My Bag</h1>
            </div>
            <div className='pin'>
                <h5>Mumbai, 400030  <span> Change PIN code </span></h5>
            </div>
        </div>
      </div>
      <div className='details'>
        <div className='details-text'>
            <p>Apply a relevant <span>coupon code</span> here to avail any additional discount. Applicable <span>cashback</span>  if any will be credited to your account as per T&C.</p>
        </div>
        <div className='details-coupon'>
            <div className='details-coupon-text'>
                <img src='https://www.tatacliq.com/src/cart/components/img/Delivery.svg'/>
                <p>Congratulations NeuPass User!! Your order is eligible for <span> FREE Shipping! </span></p>
            </div>
            <div className='details-coupon-cou'>
                <div>
                <img src='https://www.tatacliq.com/src/general/components/img/coupon.png'/>
                <h5>Check for Coupons</h5>
                </div>
                <div>
                <img src='https://www.tatacliq.com/src/general/components/img/forwordArrow.png'/>
                </div>
            </div>
        </div>
        <div className='details-info'>
            <div className='product-info'>
                <div className="product-info-main">
                    <div className='product-info-img'></div>
                    <div className='product-info-det'></div>
                </div>
                <div className='product-info-sec'>
                    <button>Continue Shopping</button>
                </div>
            </div>
            <div className='product-total'>
                <div className='product-total-top'>1</div>
                <div className='product-total-bot'>2</div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Cart;
