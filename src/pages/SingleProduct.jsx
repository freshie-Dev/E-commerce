import React, { useContext, useEffect } from 'react'
import {useParams, NavLink} from 'react-router-dom'
import ProductContextProvider from '../context/ProductContext';
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
  const {isSingleProductLoading, getSingleProduct, singleProduct, quantity, addQuantity, subtractQuantity} = ProductContextProvider();

  
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
    _id: productId,
    name,
    price,
    description,
    category,
    imageUrl,
    ratings,
  } = singleProduct;
  
  

  return (
    <Wrapper>
    <div className=''>
      <PageNavigation category={category}/>
      <div className='main flex md:flex-row flex-col ]'>
        <div className='md:w-[50%] my-3 flex flex-col justify-evenly items-center'>
          <Images image={imageUrl} price={price}/>
        </div>
        <div className='md:w-[50%] p-3  text:lg md:text-xl'>
          <h1 className='font-semibold my-1 md:my-[20px]'>{name}</h1>
          <p className='md:hidden block font-semibold color-gray  my-3'>{<FormatPrice price = {price} />}</p>

          {/* <p className=' my-1 md:my-[20px]'>{rating.rate}<br/>{rating.count} Reviews</p> */}
          <div className='flex flex-row items-center'>
            <p className=' my-1 md:my-[10px] w-[50%]'><StarRating rating = {ratings.stars}/></p>
            <p className='w-[50%]'>{ratings.reviews} Reviews</p>
          </div>

          <p className='color-gray font-light text-left my-1 md:my-[20px]'>{description}</p>
          <p className='md:block hidden font-semibold color-gray  my-3'>{<FormatPrice price = {price} />}</p>
          {/* import {FaTruck, FaExchangeAlt, FaShieldAlt, FaRegCreditCard} from 'react-icons/fa'; */}
          <div className='grid gap-3 grid-cols-2 md:grid-cols-4 mt-[20px] md:mt-[40px] color-gray'>
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
          <hr className="my-4 border-t-2 border-[#C6C6C6]" />

          <div className='flex flex-col'>
            <div className='flex flex-row'>
              <button className='addButton button' onClick={()=> subtractQuantity(quantity)}>-</button>
                {quantity} 
              <button className='addButton button' onClick={()=> addQuantity(quantity)}>+</button>
            </div>
            <NavLink to="/cart" className='button cartButton text-center'>Add to cart</NavLink>
          </div>
        </div>
      </div>
    </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
.addButton {
  background: #e0e0e0;
  box-shadow:  3px 3px 10px #bebebe,
              -3px -3px 10px #ffffff;
  color: #95979d;
  padding: 5px 10px;
  border-radius: 50px;
  width: 50px;
  margin: 0 10px;
}
.cartButton {
  max-width: 200px;
  min-width: fit-content;
}
`


