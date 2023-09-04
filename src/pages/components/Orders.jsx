import React, {useEffect} from 'react'
import styled from "styled-components"
import UserContextProvider from '../../context/UserContext'
import { FormatDate } from '../../helpers/Utilities';

export default function Orders() {

 
  const {fetchOrders, userOrders} = UserContextProvider();

  useEffect(() => {
    fetchOrders();
  }, [])
  

  if(!userOrders) {
    console.log("from orders", userOrders)
    return (
      <div>
                <h1 style={{textAlign: `center`, marginTop:`50px`}}>Please Login to view your orders</h1>

      </div>
    )
  }



  return (
    <div className='main'>
      <h1 className="text-center">Orders</h1><br/>
      {
        userOrders.map((order, index) => {
          return (
            <div key={index} className=' border-red-300 border-8 m-2'>
              <FormatDate date = {order.orderDate} />
              {order.items.map((item, index) => {
                return (
                  <div key={index}>
                    <p>{item.name}</p>
                    <img src={item.imageUrl} width={100} height={150}></img>
                    <p>{item.price}</p>
                    <p>{item.quantity}</p>
                    <p>{item.color}</p>
                    <p>{item.brand}</p>
                  </div>
                )
              })}
          </div>
          )
          
        })
      }
    </div>
  )
}

const Wrapper = styled.div`

`