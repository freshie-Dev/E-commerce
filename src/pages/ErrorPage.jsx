import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function ErrorPage() {
  return (
    <Wrapper>
      <div className='main flex flex-col justify-center items-center h-[40vh] color-gray'>
      <h1 className='text-[#67686D] text-5xl font-bold my-[20px]'>Error 404!</h1>
      <p className='py-1'>oops! something went wrong.</p>
      <p className='py-1'>The page you are looking might have been removed or does not exist</p>
      <button className='button custom-btn'><Link to="/">Home Page</Link></button>
    </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .custom-btn {
    width: 200px;
  }
`
