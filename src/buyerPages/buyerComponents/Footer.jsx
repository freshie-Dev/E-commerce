import React from 'react'
import styled from 'styled-components'

import { Link } from 'react-router-dom';

// import icons from react icons for  facebook, insta and twitter
import { AiOutlineFacebook } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { HoverButton } from './Styles';



export default function Footer() {
  return (
    <Wrapper>
        
        <div className='main flex sm:flex-row flex-col justify-evenly items-center'>
            <div className='flex flex-col items-center justify-center w-[40%] min-w-[250px] py-[20px]'>
                <p className=' text-center font-semibold'>Subscibe to our Newsletter</p>
                <form action="" className='flex flex-col items-center'>
                    <input className='input inset-shadow my-[10px]  ' type="text" name="" id="" />
                    <HoverButton width='max-content' fontSize='1rem' padding='3px 10px' >SUBSCRIBE!</HoverButton>
                </form>
            </div>
            <div className='flex justify-evenly items-center w-[40%] min-w-[250px] py-[20px]'>
                <Link className='light' target='_blank' to="https://www.facebook.com/profile.php?id=100004357007777"><AiOutlineFacebook size={40}/></Link>
                <Link className='light' target='_blank' to="https://www.instagram.com/haye.hi.high/"><AiOutlineInstagram size={40}/></Link>
                <Link className='light' target='_blank' to="https://twitter.com/a_4ahmadd"><AiOutlineTwitter size={40}/></Link>
            </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    *{
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
        width: 100px;
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
