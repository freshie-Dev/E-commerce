import React, { useContext, useEffect, useState } from 'react'
import {useParams, NavLink} from 'react-router-dom'
import ProductContextProvider from '../context/ProductContext';
import cartContextProvider from '../context/CartContext';
import PageNavigation from './components/PageNavigation';
import FormatPrice from '../helpers/FormatPrice';
import {FaCheck} from 'react-icons/fa';

// import free delievery, item replacement, warranty and secure payment icons react icons
import {FaTruck, FaExchangeAlt, FaShieldAlt, FaRegCreditCard} from 'react-icons/fa';

import styled from 'styled-components';
import Images from './components/Images';
import StarRating from './components/StarsRating';

export default function SingleProduct() {
  const {id} = useParams();
  const numericId = id.replace(':', "")
  const {isSingleProductLoading, getSingleProduct, singleProduct } = ProductContextProvider();
  const {addToCart, quantity, addQuantity, subtractQuantity} = cartContextProvider();
  const [selectedColor, setSelectedColor] = useState('');

  
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
    colors,
    stock,
    imageUrl,
    ratings,
  } = singleProduct;
  const selectColor = (color) => {
    setSelectedColor(color)
  }

  

  return (
    <Wrapper>
    <div className=''>
      <PageNavigation category={category}/>
      <div className='main flex md:flex-row flex-col ]'>
        <div className='md:w-[50%] my-3 flex flex-col justify-evenly items-center'>
          <Images image={imageUrl} price={price}/>
        </div>
        <div className='md:w-[50%] p-3  text:lg md:text-xl'>
          <h1 className='font-semibold text-2xl md:text-3xl my-1 md:my-[20px] color-gray'>{name}</h1>
          <p className='md:hidden block font-semibold color-gray  my-3'>{<FormatPrice price = {price} />}</p>

          <p className='color-gray font-light text-left my-1 md:my-[20px]'>{description}</p>

          {/* <p className=' my-1 md:my-[20px]'>{rating.rate}<br/>{rating.count} Reviews</p> */}
          <div className='flex flex-row items-center'>
            <p className=' my-1 md:my-[10px] w-[50%]'><StarRating rating = {ratings.stars}/></p>
            <p className='w-[50%]'>{ratings.reviews} Reviews</p>
          </div>

          <div className='flex my-3 items-center '>
            <p className='font-semibold color-gray'>Select a Color: </p>
            {colors.map((color, index) => (
              <span
                key={index}
                onClick={() => selectColor(color)}
                className={`ml-2 w-[20px] h-[20px] rounded-full border-[1px] border-[#484848] hover:opacity-100 ${selectedColor === color ? 'opacity-100' : 'opacity-40'}`}
                style={{ backgroundColor: color }}
              >
                {selectedColor === color && (
                    <FaCheck size={13} className='text-gray-500 mx-auto mt-[2px]'/>
                )}
              </span>
            ))}
          </div>

          <p className='md:block hidden font-semibold color-gray  my-4'>{<FormatPrice price = {price} />}</p>
          
          <hr className="my-4 border-t-2 border-[#C6C6C6] mt-[30px]" />


          <div className='flex flex-col mt-[20px]'>
            <div className='flex flex-row'>
              <button name='add-button' className='addButton button' onClick={()=> {if(quantity > 1) {  subtractQuantity(quantity)} else { alert("Aleast select 1 item")}}}>-</button>
                {quantity} 
              <button name='subtract-button' className='addButton button' onClick={()=> {if(quantity < stock) { addQuantity(quantity)} else { alert ("No more stock sorry")}}}>+</button>
            </div>
            <NavLink name= "reset-button" to="/cart" onClick={()=> {addToCart ( productId, selectedColor, quantity, singleProduct);}} className='button cartButton text-center'>Add to cart</NavLink>
          </div>

          <hr className="mb-4 border-t-2 border-[#C6C6C6]" />

          <div className='grid gap-3 grid-cols-2 md:grid-cols-4 my-[20px] md:my-[30px] color-gray'>
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


