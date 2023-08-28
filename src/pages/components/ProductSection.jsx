import React from 'react'
import FilterContextProvider from '../../context/FilterContext';
import Product from './Product'

export default function ProductSection() {
    const {filteredProducts, setSortedProducts} = FilterContextProvider();
  return (
    <div className='main '>
                <h1 className='text-3xl font-semibold text-center'>Products</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>
                    {filteredProducts.map((product, index) => {
                        return (
                                <Product key={index} data={product}/>
                            )
                        })}
                </div>
            </div>
  )
}
