// import React, { useEffect } from 'react'
// import styled from 'styled-components'

// export default function Contact() {

//   const whiteDiv2 = document.querySelectorAll('.input');

//   whiteDiv2.forEach((div) => {
//       div.addEventListener('mouseover', () => {
//           div.classList.remove('inset-shadow');
//           div.classList.add('no-shadow');
//           setTimeout(() => {
//               div.classList.add('offset-shadow');
//           }, 300);
//       });
//   });
//   whiteDiv2.forEach((div) => {
//       div.addEventListener('mouseout', () => {
//           div.classList.remove('offset-shadow');
//           setTimeout(() => {
//               div.classList.add('inset-shadow');
//               div.classList.remove('no-shadow');
//           }, 250);
//       });
//   });

//   return (
//     <Wrapper>
//       <div className='flex justify-center items-center flex-col main '>
//         <h1 className='text-5xl font-semibold pb-[50px] text-[#95979d] '>Talk to us</h1>
//         <input className='input spacing  inset-shadow' placeholder='Name' type="text" />
//         <input className='input spacing  inset-shadow' placeholder='Email' type="text" />
//         <textarea className='input spacing  inset-shadow'  placeholder='Message...' type="text" />
//       </div>
//     </Wrapper>
//   )
// }

// const Wrapper = styled.div`
// .main {
//   margin: 50px 0 50px;
//   padding: 50px;
//   border-radius: 50px;
//   background: #e0e0e0;
//   box-shadow: inset 5px 5px 10px #bebebe,
//   inset -5px -5px 10px #ffffff;
// }
// ////////////////////
// .input {
//     color: #696a6f;
//     border-radius: 40px;
//     padding: 10px 20px;
//     background: #e0e0e0;
//     outline: none;
//   }
// .inset-shadow {
//     box-shadow: inset  0 0 10px #aaa;
//     transition: box-shadow 0.3s;
// }
// .no-shadow {
//     box-shadow: none ;
//     transition: box-shadow 0.3s;
// }
// .offset-shadow {
//     box-shadow: 2px 2px 10px #aaa;
//     transition: box-shadow 0.3s;
// }
// ///////////////////////








//   .not-active  {
//     box-shadow:  2px 3px 8px #afafaf ,
//                 -2px -3px 8px #ffffff;
//   }
//   .shadow-none:hover {
//     box-shadow: 2px 3px 8px #afafaf inset 
//                 inset -2px -3px 8px #ffffff;
//   }
  

//   .spacing {
//     margin: 10px 0;
//   }
// `

import React from 'react';
import styled from 'styled-components';

export default function Contact() {

  
  return (
    <Wrapper>
      <div className='flex justify-center items-center flex-col main '>
        <h1 className='text-4xl md:text-5xl font-semibold pb-[50px] text-[#95979d] '>Talk to us</h1>

        <form action="https://formspree.io/f/xgejkoap" className='flex flex-col w-full items-center justify-center' method="POST">         
          <input className='input spacing h-[50px]  inset-shadow max-w-[350px] w-[100%]' placeholder='Name' name='name' type="text" autoComplete='off' />
          <input className='input spacing h-[50px]  inset-shadow max-w-[350px] w-[100%]' placeholder='Email' name='email' type="text" autoComplete='off' />
          <textarea className='input spacing min-h-[100px]  inset-shadow max-w-[350px] w-[100%]'  placeholder='Message...' name='message' type="text" />
          <button className='button'>Submit!</button>
        </form>
     </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .main {
    margin: 50px 0 50px;
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
