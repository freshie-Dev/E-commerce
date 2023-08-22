import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default function PageNavigation(props) {
    const {category} = props;
  return (
    <Wrapper>
        <div className='main-offset'>
            <NavLink to="/products" className="font-semibold text-xl md:text-3xl color-gray" >Products/ </NavLink><span className='md:text-xl text-lg color-gray'>{category}</span>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    .main-offset {
        padding: 20px;
    }
`
