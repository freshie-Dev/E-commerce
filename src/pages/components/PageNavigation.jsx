import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default function PageNavigation(props) {
    const {category} = props;
  return (
    <Wrapper>
        <div className='main-offset flex items-center'>
            <NavLink to="/products" className="font-semibold text-xl md:text-3xl  " >Products/ </NavLink><span className='md:text-xl text-lg  '>{category}</span>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    .main-offset {
        padding: 20px;
    }
`
