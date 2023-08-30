import React from 'react'
import {FaTh, FaList} from 'react-icons/fa';
import FilterContextProvider from '../../context/FilterContext';
import styled from 'styled-components';

export default function Sort() {
    const {filteredProducts, gridView, setGridView, setListView, sortProducts} = FilterContextProvider();

   
  return (
    <Wrapper>
        <div className='flex justify-between px-10'>
            <div className=''>
                <button className=' mx-3' onClick={()=> {setGridView(); console.log(gridView)}}><FaTh size={25} className={` duration-500 text-gray-600 ${gridView? "active": null}`}/></button>
                <button className=' mx-3' onClick={()=> {setListView(); console.log(gridView)}}><FaList size={25} className={` duration-500 text-gray-600  ${gridView? null: "active"}`}/></button>
            </div>
            <div>
                <h1> {filteredProducts.length} Products found</h1>
            </div>
            <div>
                <select onChange={sortProducts} name="sort" id="sort" className='p-3 rounded-lg bg-[#4B5563] text-white font-[10px] hover:bg-white hover:text-[#4B5563] duration-300'>
                    <option value="all">All</option>
                    <option className='duration-300' value="lowest">Price : low to high</option>
                    <option className='duration-300' value="highest">Price : high to low</option>
                    <option className='duration-300' value="ascending">Asc : a to z</option>
                    <option className='duration-300' value="descending">Desc : z to a</option>
                </select>
            </div>
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
.active {
  color: white;
  background-color: #4B5563;
  padding: 5px;
  scale: 1.5;
}
`
