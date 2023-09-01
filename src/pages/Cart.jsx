import React from 'react'
import styled from 'styled-components'
import cartContextProvider from '../context/CartContext';

//import remove icon from react icons
import {FaTrash} from 'react-icons/fa';

import cartBG from '../assets/cartBG.jpg'

export default function Cart() {
  const {cart} = cartContextProvider();
  console.log(cart);
  return (
    <Wrapper>
      <div className='body'>
          <h1 className='text-center'>Cart</h1>
        <div className='grid grid-cols-5 mx-[10%]'>
          <p>Item</p>
          <p className=''>Quantity</p>
          <p>Price</p>
          <p>Subtotal</p>
          <p className=''>Remove</p>
        </div>
          {cart.map((item, index) => {
            return (
              
              <div className='grid grid-cols-5 mx-[10%] py-1'>
                <div className='flex'>
                    <img className='w-[50px]' src={item.image} alt={item.name} />
                    <div className='my-auto'>
                      <p>{item.name}</p>
                      <p>{item.color}</p>
                    </div>
                </div>
                <div className='flex items-center '>
                  <button>-</button>
                  <p>{item.quantity}</p>
                  <button>+</button>
                </div>
                <div className='my-auto'>
                  <p>{item.price}</p>
                </div>
                <div className='my-auto'>
                  <p>{item.price * item.quantity}</p>
                </div>
                <div className='my-auto'>
                  <button><FaTrash/></button>
                </div>
            </div>
            )
          })}
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .body {
    background-image: url(${cartBG});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 100vh;
  }
`;
