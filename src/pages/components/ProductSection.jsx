import React from 'react'
import FilterContextProvider from '../../context/FilterContext';
import Product from './Product'

export default function ProductSection() {
    const {filteredProducts} = FilterContextProvider();
  return (
    <div className='inset-shadow p-2 rounded-[50px] m-2 flex justify-center items-center flex-col '>
                <h1 className='text-3xl font-semibold text-center pt-5'>Products</h1>
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
