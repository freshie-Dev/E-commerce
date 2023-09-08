import React, {useContext} from 'react'
import ProductContextProvider from '../../context/ProductContext';

import styled from 'styled-components'
import Product from './Product';

export default function FeaturedProducts() {

    const {isLoading,  featuredProducts} = ProductContextProvider();

    if(isLoading) {
        return("featured products is null")
    }
    
    return (
            <div className='main'>
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

const Wrapper = styled.div`

`
 {/* featuredProducts is an array of objects with syntax like this
        [{category: "men's clothing"
        description: "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day."
        id: 3
        image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
        price: 55.99
        rating: Object { rate: 4.7, count: 500 }
        count: 500
        rate: 4.7
        <prototype>: Object { … }
        title: "Mens Cotton Jacket"},{...}]
        use mapping function and print title and description of each object in the array
        */}
