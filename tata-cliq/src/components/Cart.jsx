

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
                    <div className='product-info-img'>
                        <img src='https://img.tatacliq.com/images/i8/437Wx649H/MP000000015191655_437Wx649H_202211060047171.jpeg'/>
                    </div>
                    <div className='product-info-det'>
                        <div className='product-info-det-fi'>
                            <div className='product-info-det-fi-top'>
                                <div className='product-info-det-fi-top-left'>
                                    <p>U.S. Polo Assn. Dark Green Regular Fit Shirt</p>
                                </div>
                                <div className='product-info-det-fi-top-right'>
                                    <img src='https://www.tatacliq.com/src/general/components/img/deliveryIcon.svg'/>
                                    <p>Delivery by 16th Jul | <span>FREE </span></p>
                                </div>
                            </div>
                            <div className='product-info-det-fi-me'>
                                <p>₹2299.00</p>
                            </div>
                            <div className='product-info-det-fi-bot'>
                                <div className='product-info-det-fi-bot-left'>
                                    <p>Color: Dark Green</p>
                                </div>
                                <div className='product-info-det-fi-bot-right'>
                                    <p>Size: XL</p>
                                </div>
                            </div>
                        </div>
                        <div className='product-info-det-se'>
                            <div className='product-info-det-se-left'>
                                <p>Quantity: 1</p>
                                <img src='https://www.tatacliq.com/src/general/components/img/down-arrow.svg'/>
                            </div>
                            <div className='product-info-det-se-right'>
                                <img src='https://www.tatacliq.com/src/general/components/img/WL1.svg'/>
                                <p>Save to wishlist</p>
                                <p>Remove</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='product-info-sec'>
                    <button>Continue Shopping</button>
                </div>
            </div>
            <div className='product-total'>
                <div className='product-total-top'>
                    <div className='product-total-top-left'>
                        <p>Bag Total</p>
                        <p>Shipping Charge</p>
                        <p>Bag Subtotal</p>
                    </div>
                    <div className='product-total-top-right'>
                        <p>₹2299.00</p>
                        <span>FREE</span>
                        <p>₹2299.00</p>
                    </div>
                </div>
                <div className='product-total-bot'>
                    <div className='product-total-bot-left'>
                        <h2>Total</h2>
                        <h3>₹2299</h3>
                    </div>
                    <div className='product-total-bot-right'>
                        <button>Checkout</button>
                    </div>
                </div>
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default Cart;
