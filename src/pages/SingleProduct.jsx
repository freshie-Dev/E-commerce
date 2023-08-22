import React, { useContext, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import { ProductContext } from '../context/ProductContext'

export default function SingleProduct() {
  const {id} = useParams();
  const numericId = id.replace(':', "")
  const {isLoading, isError, getSingleProduct, singleProduct} = useContext(ProductContext);
  const {
    id: productId,
    title,
    price,
    description,
    category,
    image,
    rating: { rate, count }
  } = singleProduct;
  

  useEffect(() => {
    getSingleProduct(numericId)
  }, [])
  
  if (isLoading) {
    return <h1>Loading...</h1>
  }
  // i have to call singlProduct.id and pass the id which is in the url how to to that

  return (
    <div>
      <h1 className=' '> {category}</h1>
    </div>
  )
}
