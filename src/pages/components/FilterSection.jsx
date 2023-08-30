import React from 'react'
import styled from 'styled-components';
import FilterContextProvider from '../../context/FilterContext';
import {FaCheck} from 'react-icons/fa';
import { capitalize } from '../../helpers/Utilities';

export default function FilterSection() {
    const {filters:{text, category, colors}, updateFilterValue, allProducts} = FilterContextProvider();

    const getUniqueCategory = (data, type) => {
        let unique = data.map ((item) => item[type])

        if (type === "brand") {
            return ["all", ...new Set(unique)];
        }
        let flatData = unique.flat(); 

        let uniqueFlatData = ["all", ...new Set(flatData)];
        console.log("uniqueFlatData", uniqueFlatData);
        return uniqueFlatData;
    }
    const uniqueCategoryValue = getUniqueCategory(allProducts, "category");
    const uniqueColorValue = getUniqueCategory(allProducts, "colors");
    const uniqueBrandValue = getUniqueCategory(allProducts, "brand");

    return (
        <Wrapper>
            <div className='pb-3'>
                <form action="" onSubmit={(e)=> e.preventDefault()} >
                    <input type="text" name="text" id="text" value={text} onChange={updateFilterValue} placeholder="Search" className='button' />
                </form>
            </div>
            <div className='pb-3'>
                <h3 className='mb-2 font-semibold'>Category</h3>
                <div>
                    {uniqueCategoryValue.map((item, index) => {
                        return (
                            <button key={index}  name="category" onClick={updateFilterValue} value={item} 
                            
                                className={`duration-300 block color-gray font-light ${category === item ? "offset-shadow p-2 rounded-full min-w-[100px]" : null}`}>
                                
                                {capitalize(item)}
                            </button>
                        )
                    })}
                </div>
            </div>
            <div className='pb-3'>
                <h3 className='mb-2 font-semibold'>Brand</h3>
                <div>
                    <select name="brand" id="brand" onClick={updateFilterValue} className='color-gray font-light p-2 rounded-full dropdownButton button'>
                        {uniqueBrandValue.map((item, index) => {
                            return (
                                <option name="brand" key={index} value={item}>{item}</option>
                            )
                        })
                        }

                    </select>
                </div>
            </div>
            <div>
                <h3 className='mb-2 font-semibold'>Color</h3>
                <div className='flex items-center'>
                    {uniqueColorValue.map((item, index) => {
                        return (
                            <button type='button btnColor' key={index}  name="colors" style={{backgroundColor: item, opacity: colors===item ? "100" : null}} onClick={updateFilterValue} value={item} 

                                className={`duration-300 mx-[2px] color-gray ${item === "all" ? "w-[30px] h-[30px] opacity-100": " opacity-40"}
                                font-light w-[20px] h-[20px] rounded-full ${colors === item ? "offset-shadow": null}  hover:opacity-100`}>

                            {/* colors is not defined */}
                            { item === "all" ? "All" : colors === item ? <FaCheck className='mx-auto text-gray-400' size={10}/> : null}
                            </button>
                        )
                    })}
                </div>
            </div>
        </Wrapper>
  )
}

const Wrapper = styled.div`
.btnColor:focus-within {
    opacity: 100;
}
.hidden {
    opacity: 0;
}
.dropdownButton {
    width: 100px;
    margin: 0;
}

`
