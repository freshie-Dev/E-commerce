import React, { useContext, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import { ProductContext } from '../context/ProductContext'
import PageNavigation from './components/PageNavigation';
import FormatPrice from '../helpers/FormatPrice';

// import free delievery, item replacement, warranty and secure payment icons react icons
import {FaTruck, FaExchangeAlt, FaShieldAlt, FaRegCreditCard} from 'react-icons/fa';

import styled from 'styled-components';
import Images from './components/Images';
import StarRating from './components/StarsRating';

export default function SingleProduct() {
  const {id} = useParams();
  const numericId = id.replace(':', "")
  const {isSingleProductLoading, isError, getSingleProduct, singleProduct} = useContext(ProductContext);
  
  useEffect(() => {
    getSingleProduct(numericId)
  }, [])
  
  if (isSingleProductLoading) {
    return <h1>Loading...</h1>
  }

  if (!Object.keys(singleProduct).length) {
    return <h1>No product data available</h1>;
  }
  const {
    id: productId,
    title,
    price,
    description,
    category,
    image,
    rating,
  } = singleProduct;
  
  

  return (
    <div className=''>
      <PageNavigation category={category}/>
      <div className='main flex md:flex-row flex-col ]'>
        <div className='md:w-[50%] my-3 flex flex-col justify-evenly items-center'>
          <Images image={image} price={price}/>
        </div>
        <div className='md:w-[50%] p-3  text:lg md:text-xl'>
          <h1 className='font-semibold my-1 md:my-[20px]'>{title}</h1>
          {/* <p className=' my-1 md:my-[20px]'>{rating.rate}<br/>{rating.count} Reviews</p> */}
          <p className=' my-1 md:my-[20px]'><StarRating rating = {rating.rate}/>  <br/>{rating.count} Reviews</p>

          <p className='color-gray font-light text-left my-1 md:my-[20px]'>{description}</p>
          <p className='font-semibold color-gray  my-3'>{<FormatPrice price = {price} />}</p>
          {/* import {FaTruck, FaExchangeAlt, FaShieldAlt, FaRegCreditCard} from 'react-icons/fa'; */}
          <div className='grid gap-3 grid-cols-2 md:grid-cols-4 mt-[20px] md:my-[50px] color-gray'>
            <div className='text-center'>
              <FaTruck className='text-3xl mx-auto'/>
              <p className='text-sm'>Free Delievery</p>
            </div>
            <div className='text-center'>
              <FaRegCreditCard className='text-3xl mx-auto'/>
              <p className='text-sm'>Secure Payment</p>
            </div>
            <div className='text-center '>
              <FaExchangeAlt className='text-3xl mx-auto'/>
              <p className='text-sm'>30 Days delivery</p>
            </div>
            <div className='text-center '>
              <FaShieldAlt className='text-3xl mx-auto'/>
              <p className='text-sm'>1 year Warranty</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}


const Wrapper = styled.div`

`