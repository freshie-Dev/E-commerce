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
    <div className='main grid md:grid-cols-[0.2fr,1fr] grid-cols-1'>
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
