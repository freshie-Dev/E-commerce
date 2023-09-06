import React from 'react';
import styled from 'styled-components';

import { HoverButton } from './components/Styles';

export default function Contact() {

  
  return (
    <Wrapper>
      <div className='flex justify-center items-center flex-col main '>
        <h1 className='text-4xl md:text-5xl font-semibold pb-[50px] text-[#95979d] '>Talk to us</h1>

        <form action="https://formspree.io/f/xgejkoap" className='flex flex-col w-full items-center justify-center' method="POST">         
          <input className='input spacing h-[50px]  inset-shadow max-w-[350px] w-[100%]' placeholder='Name' name='name' type="text" autoComplete='off' />
          <input className='input spacing h-[50px]  inset-shadow max-w-[350px] w-[100%]' placeholder='Email' name='email' type="text" autoComplete='off' />
          <textarea className='input spacing min-h-[100px]  inset-shadow max-w-[350px] w-[100%]'  placeholder='Message...' name='message' type="text" />
          <HoverButton padding ='10px 20px'>Submit!</HoverButton>
        </form>
     </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .main {
    margin: 100px 0 50px;
    padding: 50px;
    border-radius: 50px;
    background: #e0e0e0;
    box-shadow: inset 5px 5px 10px #bebebe,
                inset -5px -5px 10px #ffffff;
  }
  .spacing {
    margin: 10px 0;
  }
`;
