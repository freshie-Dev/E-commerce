import React from 'react'
import styled from 'styled-components';

//import remove icon from react icons
import {FaTrash} from 'react-icons/fa';

import cartContextProvider from '../../context/CartContext';
import FormatPrice from '../../helpers/FormatPrice';
import { getWordStr } from '../../helpers/Utilities';

export default function CartItems({id, image, name, color, quantity, price}) {
    const {removeCartItem, increaseQuantity, decreaseQuantity} = cartContextProvider();

  return (
    <Wrapper>
        <div className='offset-shadow mainDiv  grid lg:grid-cols-6 grid-cols-4 md:mx-[10%] py-1'>
            <div className='flex col-span-2 justify-start'>
                <img className='rounded-lg mr-3 md:w-[100px] md:max-h-[150px] w-[60px] max-h-[90px]  ' src={image} alt={name} />
                <div className='my-auto'>
                <div>
                    
                    <p>{getWordStr (name)}</p>
                </div>
                <div className='flex items-center justify-center'>
                    <p>color: </p>
                    <p style={{backgroundColor: color}} className='w-[20px] h-[20px] rounded-full mx-2'></p>
                </div>
                </div>
            </div>
            <div className='flex items-center justify-center '>
            <button name='subtract-button' onClick={()=> decreaseQuantity(id)}>-</button>
            <p>{quantity}</p>
            <button name='add-button' onClick={()=> increaseQuantity(id)}>+</button>
            </div>
            <div className='my-auto  lg:block hidden'>
            <p><FormatPrice price={price}/></p>
            </div>
            <div className='my-auto  lg:block hidden'>
            <p><FormatPrice price = {price * quantity}/></p>
            </div>
            <div className='my-auto text-center'>
            <button onClick={()=> removeCartItem(id)}><FaTrash/></button>
            </div>
        </div>

    </Wrapper>
  )
}
const Wrapper = styled.div`
.mainDiv {
    padding: 10px 30px;
    border-radius: 50px;
    margin-bottom: 20px;
    margin-top: 20px;
}
`;
