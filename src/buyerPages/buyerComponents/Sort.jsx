import React, { useEffect, useState } from 'react'
import {FaTh, FaList} from 'react-icons/fa';
import FilterContextProvider from '../../context/FilterContext';
import styled from 'styled-components';
import { faLess } from '@fortawesome/free-brands-svg-icons';

export default function Sort() {
    const {filteredProducts, gridView, setGridView, setListView, sortProducts, setFilterSlider, filterSlider} = FilterContextProvider();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  //! Effect to set new window width
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  //! Effect to automatically select gridView when width is small
  useEffect(() => {
    if (windowWidth <= 640) {
      setGridView();
    }
  }, [windowWidth]);

  return (
    <Wrapper>
        <div className='flex flex-row items-center justify-between px-10 my-5'>
            <div className='hidden sm:flex items-center'>
                <button className=' mx-3' onClick={()=> {setGridView()}}><FaTh size={25} className={` duration-500 text-gray-600 ${gridView? "active": null}`}/></button>
                <button className=' mx-3' onClick={()=> {setListView()}}><FaList size={25} className={` duration-500 text-gray-600  ${gridView? null: "active"}`}/></button>
            </div>
            <div className=' p-2'>
                <h1> {filteredProducts.length} Products found</h1>
            </div>
            <div className=' p-2'>
                <select onChange={sortProducts} name="sort" id="sort" className='w-[150px] p-3 rounded-lg bg-[#4B5563] text-white font-[10px] hover:bg-white hover:text-[#4B5563] duration-300'>
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
