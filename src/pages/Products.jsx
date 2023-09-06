import React from 'react'
import ProductSection from './components/ProductSection';
import FilterContextProvider from '../context/FilterContext';
import ListProductSection from './components/ListProductSection';

import styled from 'styled-components';

import Sort from './components/Sort';
import FilterSection from './components/FilterSection';

export default function Products() {
  const {gridView} = FilterContextProvider();

  return (
    <Wrapper>
    <div className='inset-shadow rounded-[50px] p-3 my-[80px] grid md:grid-cols-[0.2fr,1fr] grid-cols-1 mt-[100px]'>
        <FilterSection />
      <div>
        <Sort />
        <div className=''>
          { gridView ? <ProductSection /> : <ListProductSection />}
        </div>
      </div>
    </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`

`
