import React from 'react';
import './Breadcrum.css';
import arrow_icon from '../Assets/Frontend_Assets/arrow.png';

const Breadcrum = ({ product }) => {
  if (!product) return null; // Product undefined ho to kuch render na karo

  return (
    <div className='breadcrum'>
      HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product.category?.toUpperCase()}
    </div>
  );
};

export default Breadcrum;
