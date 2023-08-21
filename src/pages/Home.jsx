import React from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import HeroPage from './components/HeroPage'
import Services from './components/Services'
import Footer from './components/Footer'

export default function Home() {
  const data = {
    greeting: "Welcome to",
    title: "The Store",
    message: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus necessitatibus reprehenderit, quas eveniet recusandae soluta eligendi aliquid, sunt tempora corrupti est saepe repellendus qui vitae molestiae, reiciendis quidem asperiores similique quam ullam? Impedit, quo perspiciatis!"
  }

  return (
    <Wrapper>
      <HeroPage data = {data}/>
      <Services/>
    </Wrapper>
  )
}


const Wrapper = styled.div`
    padding: 2rem 0;

`   // styled-components