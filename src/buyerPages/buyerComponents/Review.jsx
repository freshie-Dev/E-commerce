import React, { useState, useEffect } from 'react'
import UserStarRating from './UserStarRating'

import styled  from 'styled-components'
import { HoverButton } from './Styles'
import UserContextProvider from '../../context/UserContext'

export default function ({ratings_, productId}) {
    const {submitReview, fetchReviews} = UserContextProvider();

    const [rating, setRating] = useState(0)
    const [review, setReview] = useState('');

    useEffect(() => {
        getReviews();
    }, [])
    
    const getReviews = (productId)=> {
        fetchReviews(productId)
    }
    
    
  return (
    <Wrapper>
    <div className='flex flex-col justify-center items-center'>
        {/* User Star Rating */}
        <h1 className='dark text-2xl md:text-4xl font-bold py-5 mb-3'>Rate us</h1>
        <div className='flex flex-col '>
            <div className='flex items-center min-w-[350px] '>
              <p className='mr-4'>Did you like our product?</p>
              <UserStarRating 
                rating={rating} onRating={(rate) => setRating(rate)} 
                className=' '/>
                <p className='text-gray-500'>| {rating}</p>
            </div>
            <p className='w-[50%] my-3 '>Leave a review:</p>
            <textarea onChange={(e)=> setReview(e.target.value)} value={review} name='review' type="text" className='input  sm:w-[500px] w-full' />
            <HoverButton onClick={()=> {submitReview(rating, review, productId)}} maxWidth = '100%' margin = "15px 0px" >Submit</HoverButton>
        </div>
        <h1 className='dark text-2xl md:text-4xl font-bold py-5 my-3'>Reviews</h1>
        <div className='flex flex-col'>

        </div>
    </div>
    </Wrapper>
  )
}

const Wrapper = styled.div `
    .input {
        padding: 20px 15px;
    }
`

