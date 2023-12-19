import React from 'react'
import ProductContextProvider from '../../context/ProductContext';

import styled from 'styled-components'
import Product from './Product';

export default function FeaturedProducts() {

    const {isLoading,  featuredProducts} = ProductContextProvider();

    if(isLoading) {
        return("featured products is null")
        
    } else {
    console.log("thes are geartus", featuredProducts)
    return (
            <div className='main flex flex-col justify-center items-center '>
                <h1 className='text-3xl font-semibold text-center'>Featured Products</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {featuredProducts.map((product, index) => {
                        return (
                                <Product key={index} data={product}/>
                            )
                        })}
                </div>
            </div>
        )
                    
    }
            

    }

const Wrapper = styled.div`

`