import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import HeroPage from './buyerComponents/HeroPage'
import Services from './buyerComponents/Services'
import Footer from './buyerComponents/Footer'
import FeaturedProducts from './buyerComponents/FeaturedProducts'

export default function Home() {

  const navigate = useNavigate()


  const data = {
    greeting: "Welcome to",
    title: "The Store",
    message: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus necessitatibus reprehenderit, quas eveniet recusandae soluta eligendi aliquid, sunt tempora corrupti est saepe repellendus qui vitae molestiae, reiciendis quidem asperiores similique quam ullam? Impedit, quo perspiciatis!"
  }

  useEffect(() => {
    
    let token = localStorage.getItem('token')
    if(!token){
      console.log("useeffect of home", token)
      navigate('/register')
    }
  }, [])
  

  return (
    <Wrapper>
      <HeroPage data = {data}/>
      <FeaturedProducts />
      <Services/>
    </Wrapper>
  )
}


const Wrapper = styled.div`
    padding: 2rem 0;

`   // styled-components