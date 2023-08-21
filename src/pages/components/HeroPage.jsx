import React from 'react'
import styled from 'styled-components'

export default function HeroPage(props) {
    const {data} = props;
  return (
    <Wrapper>
        <div className=' main flex justify-center items-center p-[50px]'>
            <div className='flex md:flex-row flex-col items-center'>
                <div className='md:w-[50%] w-full'>
                    <p>{data.greeting}</p>
                    <h1 className='text-3xl font-bold mb-3'>{data.title}</h1>
                    <p>{data.message}</p>
                </div>
                <figure className='md:w-[50%] w-full flex justify-center items-center p-5'> 
                    <img src="" alt="" className='w-[300px] h-[250px] bg-black'/>
                </figure>

            </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    padding: 2rem 0;
    .main{
        border-radius: 50px;
        background: #e0e0e0;
        box-shadow: inset 5px 5px 10px #bebebe,
                    inset -5px -5px 10px #ffffff;
    }
`