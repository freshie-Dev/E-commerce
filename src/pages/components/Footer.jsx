import React from 'react'
import styled from 'styled-components'

import { Link } from 'react-router-dom';

// import icons from react icons for  facebook, insta and twitter
import { AiOutlineFacebook } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';



export default function Footer() {
  return (
    // border-solid border-r-2 border-[#CCCCCC] 
    <Wrapper>
        {/* <div className='flex flex-col xl:flex-row main md:px-[10%] py-[50px] justify-center items-center'>
            <div className='grid grid-cols-2 w-[50%] py-5'>
                <div className=' '>
                    <p className='my-3 font-bold'>Ahmad Ali</p>
                    <p>Lorem ipsatque distinctio magnam incidunt!</p>
                </div>
                <div className=' border-solid border-r-2 border-[#CCCCCC] '>
                    <p className=' text-center font-semibold'>Subscibe to our Newsletter</p>
                    <form action="" className=''>
                        <input className='input inset-shadow my-[10px]  ' type="text" name="" id="" />
                        <button className='button'>SUBSCRIBE</button>
                    </form>
                </div>
            </div>
            
            <div  className='grid grid-cols-2 w-[50%] py-5'>
            <div className=' border-solid border-r-2 border-[#CCCCCC]'> 
                <p className='font-semibold text-center'>Whatsapp</p>
                <p className='text-center'>+91 3xx xxxxxxxx</p>
            </div>
            <div className=''>
                <div className='flex justify-evenly'>
                    <Link target='_blank' to="https://www.facebook.com/profile.php?id=100004357007777"><AiOutlineFacebook size={30}/></Link>
                    <Link target='_blank' to="https://www.instagram.com/haye.hi.high/"><AiOutlineInstagram size={30}/></Link>
                    <Link target='_blank' to="https://twitter.com/a_4ahmadd"><AiOutlineTwitter size={30}/></Link>
                </div>
            </div>
            </div>
        </div> */}
        <div className='main flex sm:flex-row flex-col justify-evenly items-center'>
            <div className='flex flex-col items-center justify-center w-[40%] min-w-[250px] py-[20px]'>
                <p className=' text-center font-semibold'>Subscibe to our Newsletter</p>
                <form action="" className='flex flex-col items-center'>
                    <input className='input inset-shadow my-[10px]  ' type="text" name="" id="" />
                    <button className='button'>SUBSCRIBE</button>
                </form>
            </div>
            <div className='flex justify-evenly items-center w-[40%] min-w-[250px] py-[20px]'>
                <Link target='_blank' to="https://www.facebook.com/profile.php?id=100004357007777"><AiOutlineFacebook size={40}/></Link>
                <Link target='_blank' to="https://www.instagram.com/haye.hi.high/"><AiOutlineInstagram size={40}/></Link>
                <Link target='_blank' to="https://twitter.com/a_4ahmadd"><AiOutlineTwitter size={40}/></Link>
            </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    *{
        color: #434343;
    }
    .main{
        border-radius: 50px;
        background: #e0e0e0;
        margin: 50px 0;
        box-shadow: inset 5px 5px 10px #bebebe,
                    inset -5px -5px 10px #ffffff;
    }
    .item {
        width: 25%;
        justify-content: center;
        
        padding: 20px 20px;
    }
    .button {
        border-radius: 50px;
        background: #e0e0e0;
        width: 100px;
        max-width: 350px;
        box-shadow:  3px 3px 10px #bebebe,
                    -3px -3px 10px #ffffff;
        color: #95979d;         
        margin:  5px 0;
        padding: 5px 10px;
        font-size: 1rem;
      }
      .input {
        background: #e0e0e0;
        color: #696a6f;
        width: 100%;
        border-radius: 40px;
        padding: 10px 10px;
        outline: none;
        
      }

`
