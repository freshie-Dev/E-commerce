import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { HoverButton } from '../../helpers/Styles';

export default function HomeSeller() {
  const navigate = useNavigate();
  return (
    <Wrapper>
        <div className=' mt-[100px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]'>
          <HoverButton onClick={()=> navigate('/addproduct')} height="250px" width = "100%" maxWidth="100%" fontSize = "25px">Add Product</HoverButton>
          <HoverButton height="250px" width = "100%" maxWidth="100%" fontSize = "25px">haha</HoverButton>
          <HoverButton height="250px" width = "100%" maxWidth="100%" fontSize = "25px">haha</HoverButton>
          <HoverButton height="250px" width = "100%" maxWidth="100%" fontSize = "25px">haha</HoverButton>
          <HoverButton height="250px" width = "100%" maxWidth="100%" fontSize = "25px">haha</HoverButton>
          <HoverButton height="250px" width = "100%" maxWidth="100%" fontSize = "25px">haha</HoverButton>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
.container {
  margin-top: 100px;
  gap: 20px;
}
.box{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
}

.option:hover {
  font-size: 25px;
  font-weight: 400;
}
@media (min-width: 640px) {
    .container {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}
@media (min-width: 768px) {
    .container {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
}
`
