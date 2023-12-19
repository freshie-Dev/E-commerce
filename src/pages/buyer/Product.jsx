import React from 'react'
import { NavLink } from 'react-router-dom';
import FormatPrice from '../../helpers/FormatPrice';
import styled from 'styled-components';
import StarRating from './StarsRating';

export default function Product(props) {
    const {data} = props;
    function truncate(str, n){
      return (str.length > n) ? str.slice(0, n-1) + '...' : str;
    };
    function getWordStr(str) {
      return str.split(/\s+/).slice(0, 5).join(" ");
  }
  return (
    <Wrapper>
      <NavLink to={`/singleProduct/:${data._id}`} className='div main flex flex-col'>
          <img style={{}} src={data.imageUrl} alt={data.title} className='w-[280px] h-[350px] object-contain pb-[20px] mx-auto rounded-xl'/>
         
            <h1 className='font-bold   '>{getWordStr(data.name)}</h1>
            <p className='   py-1'><FormatPrice price = {data.price} /></p>
         
          <p className='text-sm text-gray-500'>{truncate(data.description, 100)}</p>
          <span className='py-1'>
          <div className=' float-left'><StarRating rating = {data.ratings.stars}/></div>
          <p className=' float-right  '>{`(${data.ratings.reviews})`}</p>
          </span>
      </NavLink>
    </Wrapper>
  )
}

const Wrapper = styled.div`
.main {
    border-radius: 20px;
    padding: 20px;
    width: fit-content;
}
`