import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { HoverButton } from '../../../helpers/Styles';
import styled from 'styled-components';

import "../../../helpers/checkbox.css"


function AddProduct() {
  const [imageSrc, setImageSrc] = useState('')
  const [originalImageSrc, setOriginalImageSrc] = useState('')

  const [focusedInput, setFocusedInput] = useState({
    name: false,
    description: false,
    price: false,
    category: false,
    colors: false,
    brand: false,
    stock: false,
  });

  const [colorsInput, setColorsInput] = useState('');

  const handleFocus = (inputName) => {
    setFocusedInput(prevValue => {
      return { ...prevValue, [inputName]: true }
    });
  };

  const handleBlur = (inputName) => {
    const form = document.querySelector('form');
    const formData = new FormData(form);
    const inputValue = formData.get(inputName);

    console.log("input value", inputValue)

    if (!inputValue) {
      setFocusedInput((prevValue) => {
        return { ...prevValue, [inputName]: false };
      });
    }
    console.log("Object prototype", Object.prototype.hasOwnProperty.call(focusedInput, inputName))
  };

  const submitForm = async (e) => {
    e.preventDefault();
    const form = document.querySelector('form');
    const formData = new FormData(form);
    const originalImageFile = formData.get('productImage');
    // Create URL for the original image
    const originalImageUrl = URL.createObjectURL(originalImageFile);
    setOriginalImageSrc(originalImageUrl);
    formData.delete('colors');

    // Convert the colors input string into an array
    const colorsArray = colorsInput.split(' ').map(color => color.trim()).filter(color => color !== "");

    colorsArray.forEach((color, index) => {
      formData.append(`colors[${index}]`, color);
    });

    // Get user id from local storage
    const userId = JSON.parse(localStorage.getItem('userInfo'))._id;
    formData.append('userId', userId);

    console.log(formData);

    // Access the image file from the FormData object
    const picture = formData.get('productImage');

    // Create a new FormData object to append only the image data
    const imageFormData = new FormData();
    imageFormData.append('productImage', picture);

    // posting form data to the server.
    // try {
    //   // const response = await axios.post('http://localhost:3000/products', formData);
    //   // console.log(response.data);

    //   // Make a request to the Flask server here
    //   const config = {
    //     headers: {
    //       'content-type': 'multipart/form-data',
    //     }
    //   };
    //   const flaskResponse = await axios.post('http://127.0.0.1:5000/remove_background', imageFormData, {
    //     // Set content type to multipart form data
    //     headers: {
    //       'Content-Type': 'multipart/form-data',
    //     },
    //   });

    //   console.log(flaskResponse.data);
    // } catch (error) {
    //   console.error('Error while submitting form:', error);
    // }
    try {
      const response = await axios.post('http://127.0.0.1:5000/process_image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      });
      const resultingMaskUrl = response.data.resulting_mask_url;
      setImageSrc(resultingMaskUrl);

    } catch (error) {
      console.error('Error while submitting form:', error);
    }
  };


  return (
    <Wrapper>
      <div className='main'>
        <form className='m-0 flex justify-center items-center' onSubmit={submitForm}>
          <div className='flex flex-col justify-center items-center  w-[700px]'>
            <h1 className='md:text-4xl md:font-bold text-2xl font-semibold dark'>Add a Product</h1>
            <div className='m-2 flex w-full my-7'>
              <div className='input w-[50%] relative'>
                <label htmlFor='name' className={`${focusedInput.name ? "active-input" : "top-[25%] left-[20px]"} absolute duration-300 `} >Name</label>
                <input className='inputs ' type="text" name='name' onFocus={() => { handleFocus("name") }} onBlur={() => { handleBlur('name') }} />
              </div>
              <div className='input w-[50%] relative'>
                <label htmlFor='price' className={`${focusedInput.price ? "active-input" : "top-[25%] left-[20px]"} absolute duration-300`} onFocus={() => { handleFocus("price") }} onBlur={handleBlur}>Price</label>
                <input className='inputs' type="text" name='price' onFocus={() => { handleFocus("price") }} onBlur={() => { handleBlur("price") }} />
              </div>
            </div>

            <div className='input w-[100%] relative'>
              <label htmlFor='description' className={`${focusedInput.description ? "active-input" : "top-[25%] left-[20px]"} absolute duration-300`} onFocus={() => { handleFocus("name") }} onBlur={handleBlur}>Description</label>
              <input className='inputs' type='text' name='description' onFocus={() => { handleFocus("description") }} onBlur={() => { handleBlur("description") }} />
            </div>

            <div className='m-2 flex w-full my-7'>
              <div className='input w-[50%] relative'>
                <label htmlFor='category' className={`${focusedInput.category ? "active-input" : "top-[25%] left-[20px]"} absolute duration-300`} onFocus={() => { handleFocus("name") }} onBlur={handleBlur}>Category</label>
                <input className='inputs' type="text" name='category' onFocus={() => { handleFocus("category") }} onBlur={() => { handleBlur("category") }} />
              </div>
              <div className='input w-[50%] relative'>
                <label htmlFor='brand' className={`${focusedInput.brand ? "active-input" : "top-[25%] left-[20px]"} absolute duration-300`} onFocus={() => { handleFocus("name") }} onBlur={handleBlur}>Brand</label>
                <input className='inputs' type="text" name='brand' onFocus={() => { handleFocus("brand") }} onBlur={() => { handleBlur("brand") }} />
              </div>
            </div>

            <div className='mx-2 flex w-full my-7'>
              <div className='input w-[33%] relative'>
                <label htmlFor='colors' className={`${focusedInput.colors ? "active-input" : "top-[25%] left-[20px]"} absolute duration-300`} onFocus={() => { handleFocus("name") }} onBlur={handleBlur}>Colors</label>
                <input className='inputs' type="text" name='colors' onFocus={() => { handleFocus("colors") }} onBlur={() => { handleBlur("colors") }} />
              </div>
              <div className='input w-[33%] relative'>
                <label htmlFor='stock' className={`${focusedInput.stock ? " active-input" : "top-[25%] left-[20px]"} absolute duration-300`} onFocus={() => { handleFocus("name") }} onBlur={handleBlur}>Stock</label>
                <input className='inputs' type="text" name='stock' onFocus={() => { handleFocus("stock") }} onBlur={() => { handleBlur("stock") }} />
              </div>
              <div className='input w-[33%]'>
                <input className='inputs' type="file" name='productImage' />
              </div>
            </div>

            <div className='w-full mx-2 my-7 flex justify-center items-center'>
              <p className='mr-3 text-[17px]'>Remove Image Background?</p>
              <label class="container">
                <input type="checkbox"  />
                <div class="checkmark">
                  <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512">
                    <title>Checkmark</title>
                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M416 128L192 384l-96-96"></path>
                  </svg>
                </div>
              </label>
            </div>

            <HoverButton className='my-3' maxWidth="100%" type='submit'>Add Product</HoverButton>
            <div className='w-full flex justify-center items-center mt-5'>
              <div className='w-[50%] flex justify-center items-center'>
                <h1 className='text-[17px]'>Original Image</h1>
              </div>
              <div className='w-[50%] flex justify-center items-center'>
                <h1 className='text-[17px]'>Processed Image</h1>
              </div>
            </div>
            <div className='flex  my-2 justify-center items-center w-full offset-shadow rounded-3xl '>
              <div className='w-[50%] min-h-[200px]  mr-1  flex flex-col justify-center items-center pattern8 rounded-3xl'>
                <img className='rounded-3xl ' src={originalImageSrc} />
              </div>
              <div className='w-[50%] min-h-[200px] ml-1  flex flex-col justify-center items-center pattern8 rounded-3xl'>
                <img className='rounded-3xl' src={imageSrc} />
              </div>
            </div>
          </div>
          {/* <button type='submit' onClick={submitForm}>asdasdasdasd</button> */}
        </form>
      </div>
    </Wrapper>


  );
}

export default AddProduct;

const Wrapper = styled.div`
  .active-input {
    top: -25px;
    left: 80%;
    font-weight: bold;
    padding: 0.25rem 0.5rem;
    border-radius: 0.75rem/* 12px */;
    color: white;
    background-color: #606b7a;
  }
  .input {
    margin: 0 5px;
    height: 50px;
    padding: 0;
  }
  .inputs {
    background: transparent;
    height: 100%;
    width: 100%;
    border-radius: 40px;
    padding: 20px;
  }
  inputs:hover, inputs:focus, input:valid {
    outline: none;
  }
  .pattern8 {
    background-image: repeating-linear-gradient(-319deg, rgba(0, 0, 0, 0.123), rgba(32, 27, 27, 0.123) 1px, transparent 3px, transparent 15px);
    background-size: 4px;
    border: #888a9071 2px solid;
}
  

`
