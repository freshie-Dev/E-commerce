import React from 'react'
import { NavLink } from 'react-router-dom';
// import SingleProduct from '../SingleProduct';

export default function Product(props) {
    const {data} = props;

  return (
    <NavLink to={`/singleProduct/:${data.id}`} className='flex flex-col items-center justify-center p-4'>
        <img src={data.image} alt={data.title} className='w-[200px] h-[200px] object-contain'/>
        <h1 className='text-xl font-semibold'>{data.title}</h1>
        <p className='text-sm text-gray-500'>{data.description}</p>
    </NavLink>
  )
}
