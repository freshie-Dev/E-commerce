import React from 'react'
import { NavLink } from 'react-router-dom';
import FormatPrice from '../../helpers/FormatPrice';

export default function Product(props) {
    const {data} = props;
    function truncate(str, n){
      return (str.length > n) ? str.slice(0, n-1) + '&hellip;' : str;
    };
    function getWordStr(str) {
      return str.split(/\s+/).slice(0, 5).join(" ");
  }
  return (
    
    <NavLink to={`/singleProduct/:${data.id}`} className='div main flex flex-col items-center justify-center p-4'>
        <img style={{mixBlendMode: "multiply" }} src={data.image} alt={data.title} className='w-[200px] h-[200px] object-contain pb-[20px]'/>
        <h1 className='text-xl font-semibold text-center color-gray'>{getWordStr(data.title)}</h1>
        {/* add price */}
        <p className=' font-semibold color-gray py-3'><FormatPrice price = {data.price} /></p>
        <p className='text-sm text-gray-500'>{truncate(data.description, 50)}</p>
    </NavLink>
  )
}
