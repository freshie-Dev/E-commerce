import React from 'react'
import { NavLink } from 'react-router-dom';
import FilterContextProvider from '../../context/FilterContext';
import Product from './Product'
import styled from 'styled-components';
import StarRating from './StarsRating';

import { getWordStr, truncate, FormatPrice } from '../../helpers/Utilities';

export default function ListProductSection() {
    const {filteredProducts} = FilterContextProvider();
    console.log("ProductSection ",filteredProducts)
  return (
    <Wrapper>
    <div className='main'>
                <h1 className='text-3xl font-semibold '>Products</h1>
                <div className='grid grid-cols-1  gap-4 '>
                    {filteredProducts.map((product, index) => {
                        return (
                            <NavLink key={index} to={`/singleProduct/:${product._id}`} className='div main2 flex flex-row mx-auto '>
                                <img style={{mixBlendMode: "multiply" }} src={product.imageUrl} alt={product.title} className='w-[250px] h-[250px] object-contain pb-[0px]'/>
                            
                                <div className='py-5'>
                                    <h1 className='font-bold    py-1'>{getWordStr(product.name)}</h1>
                                    <p className='   py-1'><FormatPrice price = {product.price} /></p>
                                
                                    <p className='text-sm text-gray-500 py-1'>{truncate(product.description, 100)}</p>
                                    <span className='my-2'>
                                        <div className=' float-left py-2'><StarRating rating = {product.ratings.stars}/></div>
                                        <p className=' float-right   py-2'>{`(${product.ratings.reviews})`}</p>
                                    </span>
                                </div>
                            </NavLink>
                            )
                        })}
                </div>
            </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
.main2 {
    border-radius: 20px;
    padding: 20px;
    width: 70%;
}
`
