import React from 'react'
import ProductSection from './components/ProductSection';
import FilterContextProvider from '../context/FilterContext';
import ListProductSection from './components/ListProductSection';

import styled from 'styled-components';

// import gridview and listview icons from react icons
import {FaTh, FaList} from 'react-icons/fa';
import Sort from './components/Sort';

export default function Products() {
  const {gridView, setGridView, setListView} = FilterContextProvider();

  return (
    <Wrapper>
    <div className='main grid md:grid-cols-[0.2fr,1fr] grid-cols-1'>
      <div>
        filter
      </div>
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
