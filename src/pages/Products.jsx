import React, {useContext} from 'react'
import { ProductContext } from '../context/ProductContext';
import Product from './components/Product';
import { NavLink } from 'react-router-dom';

export default function Products() {
  const {isLoading, isError, products} = useContext(ProductContext);
  if (isLoading) {
    return <h1>Loading...</h1>
  }
  return (
    <div className='main'>
      <h1 className='text-3xl font-semibold text-center'>Featured Products</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {products.map((product, key) => {
                return (
                        <Product key ={product.id} data={product}/>
                    )
                })}
        </div>
    </div>
  )
}
