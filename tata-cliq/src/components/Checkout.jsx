
import React from 'react';
import './Checkout.css'

const Checkout = () => {
  return (
    <div id='chmain'>
      <div className='chmain-top'>
        <h1>Checkout</h1>
      </div>
      <div className='chmain-bot'>
        <div className='bot-left'>
            <div className='bot-left-fi'>
                <h2>Add Shipping Address</h2>
                <p>Clear all</p>
            </div>
            <div className='bot-left-se'>
                <div className='input-fi'>
                    <input type='text' placeholder='First Name(Required)*'/>
                    <input type='text' placeholder='Last Name(Required)*'/>
                </div>
                <div className='input-se'>
                    <input type='text' placeholder='Enter Your PIN code(Required)*'/>
                </div>
            </div>
            <div className='bot-left-th'>
                <div className='bot-th-input-left'>
                    <input type='text' placeholder='City/district(Required)*'/>
                    <input type='text' placeholder='State(Required)*'/>
                    <input type='text' placeholder='Landmark'/>
                </div>
                <div className='bot-th-input-right'>
                    <input type='text' placeholder='Flat/House No., Floor, Building/Company/Apartment Name, Road/Street Name, Area, Colony,Sector, Village (Required)*'/>
                    <p>Character Limit : 120</p>
                    <input type='text' placeholder='Enter 10 digit mobile number' />
                </div>
            </div>
            <div className='bot-left-fo'>
                <input  type='radio'/>
                <span>Home</span>
                <input type="radio" />
                <span>Office</span>
            </div>
            <div className='bot-left-ff'>
                <h3>Cancel</h3>
                <button>Save & Continue</button>
            </div>
        </div>
        <div className='bot-right'>
            <div className='bot-right-top'>
                <div className='bot-right-top-fi'>
                    <p>Bag Total</p>
                    <p>Shipping Charge</p>
                    <p>Bag Subtotal</p>
                </div>
                <div className='bot-right-top-se'>
                    <p>₹2299.00</p>
                    <h5>FREE</h5>
                    <p>₹2299.00</p>
                </div>
            </div>
            <div className='bot-right-bot'>
                <h2>Total Payable</h2>
                <h3>₹2249.00</h3>
            </div>
            <div className='bot-right-last'>
                <img src='https://www.tatacliq.com/src/cart/components/img/lock.svg'/>
                <p>Safe and secure payments. Easy returns. 100% Authentic products.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout;
