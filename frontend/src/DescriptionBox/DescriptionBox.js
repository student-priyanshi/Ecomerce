import React from 'react'
import './DescriptionBox.css';

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Review (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>At SHOPPING, we believe shopping should be easy, fun, and inspiring.
Our mission is to bring you hand-picked products from trusted brands at prices you’ll love. From everyday essentials to unique finds, we’ve got something for everyone.
Join thousands of happy customers and experience shopping the way it should be.</p>
            <p>We’re committed to quality, value, and customer satisfaction. Our team works tirelessly to curate the best products and ensure a seamless shopping experience. Whether you’re looking for the latest trends or timeless classics, we’ve got you covered.
           Thank you for choosing SHOPPING. We can’t wait to serve you!</p>
        </div>
    </div>
  )
}

export default DescriptionBox