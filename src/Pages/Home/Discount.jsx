import React from 'react'

function Discount() {
  return (
    <>
        <section className='Discount'>
            <div className="DiscountContent">
                <h2>SUBSCRIBE & GET <span>10%</span> DISCOUNT</h2>
                <p class="first">Be the first to get the latest news and much more.</p>
                <div className="DiscountInput">
                    <input type="text" placeholder='Enter your email address'/>
                    <button>Subscribe</button>
                </div>
                <p className='second'>By subscribing, you accepted our <span>Policy</span></p>
            </div>
        </section>
    </>
  )
}

export default Discount
