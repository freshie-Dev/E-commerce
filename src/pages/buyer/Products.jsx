import React from 'react'
import ProductSection from './ProductSection';
import FilterContextProvider from '../../context/FilterContext';
import ListProductSection from './ListProductSection';

import {RiFilter2Line} from 'react-icons/ri'

import styled from 'styled-components';

import Sort from './Sort';
import FilterSection from './FilterSection';

export default function Products() {
  const {gridView, filterSlider, setFilterSlider} = FilterContextProvider();

  return (
    <Wrapper>
    <div className='inset-shadow rounded-[50px] p-3 my-[80px] grid lg:grid-cols-[0.2fr,1fr] grid-cols-1 mt-[100px]'>
      <div className='relative lg:block min-w-[200px]'>
        {/* <div className='absolute lg:block px-5 left-[-400px]'> */}
        <div className="lg:block hidden">
          <FilterSection />
        </div>
        <div className={` max-w-min lg:hidden absolute bg-[#D5D5D5] p-5 pl-[70px] rounded-xl border duration-300 ${filterSlider? "left-0": "left-[-290px]"}`}>
          <button className='absolute right-[-50px] top-[25px] bg-gray-500 rounded-r-full py-2 pr-1 pl-[20px]'onClick={()=> {setFilterSlider(!filterSlider)}}><RiFilter2Line size={25}/></button>
          <FilterSection />
        </div>
      </div>
      <div>
        <Sort />
        <div className=' overflow-auto'>
          { gridView ? <ProductSection /> : <ListProductSection />}
        </div>
      </div>
    </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`

`
