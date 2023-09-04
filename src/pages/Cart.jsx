import React from 'react'
import styled from 'styled-components'
import cartContextProvider from '../context/CartContext';




import cartBG from '../assets/cartBG.jpg'
import CartItems from './components/CartItems';
import { NavLink } from 'react-router-dom';
import FormatPrice from '../helpers/FormatPrice';
import UserContextProvider from '../context/UserContext';

export default function Cart() {
  const {cart, clearCart, totalPrice, orderTotal, shippingFee} = cartContextProvider();
  const { buyItems } = UserContextProvider();

  localStorage
  if (localStorage.getItem('cart').length === 2) {
    return ( 
      <Wrapper>
        <div className='flex flex-col justify-center items-center main'>
          <h1 className=' text-2xl color-gray font-semibold'>No Items in Cart</h1>
          <NavLink to = "/products" className="button browseBtn">Browse Products</NavLink>
        </div>
      </Wrapper>
    )
  } 
  return (
    <Wrapper>
      <div className='main color-gray '>
          <h1 className='text-center color-gray text-3xl mb-[50px]'>Cart</h1>
          <div className='grid lg:grid-cols-6 grid-cols-4 mx-[13%]'>
            <p className=' text-lg font-light col-span-2'>Item</p>
            <p className=' text-lg font-light color-gray text-center'>Quantity</p>
            <p className=' text-lg font-light lg:block hidden '>Price</p>
            <p className=' text-lg font-light lg:block hidden '>Subtotal</p>
            <p className=' text-lg font-light text-center'>Remove</p>
          </div>
        <div className='w-[70vw] my-4 mx-auto h-[2px] bg-gray-500  rounded-full'></div>
          {cart.map((item, index) => {
            return (
              <CartItems key={index} {...item}/>
            )
          })}

          <div className='flex justify-evenly sm:mx-[10%]'>
            <NavLink to="/products" className='button contBtn'>Keep Shopping</NavLink>
            <button onClick={clearCart} className='button clearBtn '>Clear Cart</button>
          </div>
          <div className='flex  justify-end px-[10%] '>
            <div className='grid grid-cols-2 w-[300px] color-gray text-md md:text-lg main buyContainer relative'>
              <p className='mr-3'>Sub Total:</p>
              <p className='text-right font-semibold'><FormatPrice price={totalPrice} /></p>
              <p className='mr-3'>Shipping Fee:</p>
              <p className='text-right font-semibold'><FormatPrice price={shippingFee} /></p>
              <hr className='h-[3px] bg-gray-800 w-full my-3 ' />
              <hr className='h-[3px] bg-gray-800 w-full my-3 ' />
              <p className='mr-3'>Total:</p>
              <p className='text-right font-semibold'><FormatPrice price={orderTotal} /></p>
              <button onClick={buyItems} className='absolute button buyBtn '>BUY</button>
            </div>
          </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .contBtn, .clearBtn, .browseBtn, .buyBtn  {
    width: fit-content;
    min-width: 170px;
  }
  .main {
    padding: 25px;
    border-radius: 30px;
  }
  .buyBtn {
    width: 250px;
    bottom: -90px;
    left: 8%;
  }
  .buyContainer {
    margin-top: 20px ;
    margin-bottom: 80px ;
  }
  `;
  
  // .clearBtn {
  //   color: #fe5f77;
  // }
  // .contBtn {
  //   color: #1dfc49;
  // }