import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContextProvider.js';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Breadcrum/Breadcrum.js';
import ProductDisplay from '../ProductDisplay/ProductDisplay.js';
import DescriptionBox from '../DescriptionBox/DescriptionBox.js';
import RelatedProducts from '../RealtedProduct/RelatedProducts.js';



const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} =useParams();
  const product = all_product.find((e)=>e.id === Number(productId));

  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts />
    </div>
  )
}

export default Product