import React from 'react';
import styled from 'styled-components';

// import AiFillStar, AiOutlineStar, FaStarHalfAlt from 'react-icons/fa';
import {FaStar, FaStarHalfAlt} from 'react-icons/fa';
import {AiOutlineStar} from 'react-icons/ai';

const StarRating = (props) => {
    const {rating} = props;

    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars.push(<FaStar className='star'/>);
        } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
            //further check if the rating's decimal is greater than 0.5 then add half star else add empty star
                if(rating % 1 >= 0.5) {
                    stars.push(<FaStar className='star'/>);
                } else {
                    stars.push(<FaStarHalfAlt className='star'/>);
                }
        } else {
            stars.push(<AiOutlineStar className='star'/>);
        }
    }
  
  return (
    <Wrapper>
        <div className='grid grid-cols-10 text-xl text-yellow-600'>
            {stars}
        </div>
    </Wrapper>
)};

export default StarRating;

const Wrapper = styled.div`
.star-rating {
    display: inline-block;
    font-size: 1.5rem;
  }
  
  .star {
    color: gold;
  }
  
  .half {
    position: relative;
    after {
      content: '\00BD';
      position: absolute;
      top: 0;
      left: 0.5em;
      color: gold;
    }
  }
  
  .empty {
    color: gray;
  }
  
`
