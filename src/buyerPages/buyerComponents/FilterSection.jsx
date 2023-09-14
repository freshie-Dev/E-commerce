import React, {useState} from 'react'
import styled from 'styled-components';
import FilterContextProvider from '../../context/FilterContext';
import {LuFilterX} from "react-icons/lu";
import {FaCheck} from 'react-icons/fa';
import { FormatPrice, capitalize } from '../../helpers/Utilities';

export default function FilterSection() {
    const {filters:{text, category, colors, price, maxPrice, minPrice}, updateFilterValue, allProducts, clearFilters,resetColors} = FilterContextProvider();

    const getUniqueCategory = (data, type) => {
        let unique = data.map ((item) => item[type])

        if (type === "brand") {
            return ["all", ...new Set(unique)];
        }
        let flatData = unique.flat(); 

        let uniqueFlatData = ["all", ...new Set(flatData)];
        if (type === "colors"){
            // console.log("the colors array is: ", uniqueFlatData)
        }
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
            <div className='pb-3 light'>
                 <h1 className='mb-2 font-semibold'>Category</h1>
                <div>
                    {uniqueCategoryValue.map((item, index) => {
                        return (
                            <button key={index}  name="category" onClick={updateFilterValue} value={item} 
                            
                                className={`duration-300 block     ${category === item ? "offset-shadow p-2 rounded-full min-w-[100px]" : null}`}>
                                
                                {capitalize(item)}
                            </button>
                        )
                    })}
                </div>
            </div>
            <div className='pb-3'>
                 <h1 className='mb-2 font-semibold'>Brand</h1>
                <div>
                    <select name="brand" id="brand" onChange={updateFilterValue} className='    p-2 rounded-full dropdownButton button'>
                        {uniqueBrandValue.map((item, index) => {
                            return (
                                <option name="brand" key={index} value={item}>{capitalize(item)}</option>
                            )
                        })
                        }

                    </select>
                </div>
            </div>
            <div className='pb-3'>
                 <h1 className='mb-2 font-semibold'>Color</h1>
                <div className='flex items-center'>
                    {uniqueColorValue.map((item, index) => {
                        console.log(item)
                        return (
                            <button 
                            type='button' 
                            key={index}  
                            name="colors" 
                            onClick={(e)=> {item === "all" ? resetColors() : updateFilterValue(e)}} 
                            value={item} 
                            style={{backgroundColor: item, opacity: colors===item ? "100" : null}} 

                            className=  {`duration-300 mx-[2px] ${item === "all" ? "w-[30px] h-[30px] opacity-100": " opacity-40"}
                                          w-[20px] h-[20px] rounded-full ${colors === item ? "offset-shadow": null}  hover:opacity-100`}
                            >

                            { item === "all" ? <h1>All</h1> : colors === item ? <FaCheck className='mx-auto text-gray-400' size={10}/> : null}
                            </button>
                        //     <button
                        //     type='button'
                        //     key={index}
                        //     name="colors"
                        //     onClick={updateFilterValue}
                        //     value={item} // Set value to "all" if it's the "All" button
                        //     style={{ backgroundColor: item, opacity: colors === item ? "100" : null }}
                        //     className={`duration-300 mx-[2px] ${
                        //       item === "all" ? "w-[30px] h-[30px] opacity-100" : "opacity-40"
                        //     } w-[20px] h-[20px] rounded-full ${
                        //       colors === item ? "offset-shadow" : null
                        //     }  hover:opacity-100`}
                        //   >
                        //     {item === "all" ? <h1>All</h1> : colors === item ? <FaCheck className='mx-auto text-gray-400' size={10} /> : null}
                        //   </button>
                        )
                    })}
                </div>
            </div>
            <div className='mb-3'>
                 <h1 className='mb-2 font-semibold'>Price</h1>
                <p className='   pb-1'><FormatPrice  price={price} /></p>
                <input type="range" name='price' min={minPrice} max={maxPrice} value={price} onChange={updateFilterValue} className='range-style' />
            </div>
            <div>
                <div onClick={clearFilters} className='flex items-center justify-between button clearFilterButton '>
                    <button>Clear Filters</button>
                    <LuFilterX size={20}/>
                </div>
                <hr  className='hr'/>
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
    min-width: 100px;
    max-width: fit-content;
    margin: 0;
}
.clearFilterButton {
    max-width: fit-content;
}

`
