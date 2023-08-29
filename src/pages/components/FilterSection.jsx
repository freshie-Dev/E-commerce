import React from 'react'
import styled from 'styled-components';
import FilterContextProvider from '../../context/FilterContext';

export default function FilterSection() {
    const {filters, updateFilterValue, allProducts} = FilterContextProvider();
    const {text} = filters;

    const getUniqueData = (data, type) => {
        let unique = data.map ((item) => item[type])

        let flatData = unique.flat(); 

        let uniqueFlatData = ["All", ...new Set(flatData)];
        console.log("uniqueFlatData", uniqueFlatData)
    }

    const categoryOnlyData = getUniqueData(allProducts, "category");
  return (
    <div>
        <form action="">
            <input value={text} onChange={updateFilterValue} type="text" name="text" id="search" placeholder='Search' className='button' />
        </form>
    </div>
  )
}

const Wrapper = styled.div`

`