import React, {useEffect, useState} from 'react'
import styled from "styled-components"
import UserContextProvider from '../../context/UserContext'
import axios from 'axios';
import { FormatDate } from '../../helpers/Utilities';
import { Pulsar } from '@uiball/loaders';

export default function Orders() {

 
  // const {fetchInfo, userOrders} = UserContextProvider();
  // const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState();

  

  useEffect(() => {
    const getData = async()=> {
      const config = {
        headers: {
            "auth-token": localStorage.getItem('token')
        }
      }
      const response = await axios.get("http://localhost:3000/register/userinfo", config);
      const data = await response.data;

      localStorage.setItem('orders', JSON.stringify(data.orders))
      const localOrders = JSON.parse(localStorage.getItem('orders'))
      setOrders(localOrders);
      console.log(orders)
    }
    getData();

  }, []);

  if (!orders ) {
    return <div className='main flex justify-center items-center h-[50vh]'>
      <Pulsar/>
      <h1 className='mx-3 md:text-2xl font-semibold'>Loading your Orders</h1>
    </div>
  }

  return (
    <Wrapper>
      <div className='mt-[100px]'>
        <h1 className="text-center text-2xl font-semibold mt-10">{orders.length} Orders found</h1><br/>
        <div className={` flex flex-col-reverse `}>
          {
            orders.map((order, index) => {
              return (
                <div key={index} className=' -2 inset-shadow md:p-[50px] p-[10px] rounded-[50px] my-3 '>
                  <p className='text-center'>Order # {index}</p>
                  <p className='text-center font-bold py-3'><FormatDate date = {order.orderDate} /></p>
                  <div className='grid xl:grid-cols-2 gap-10 offset-shadow py-5 px-8 rounded-[50px]'>
                    {order.items.map((item, index) => {
                      return (
                        <div key={index} >
                          <p className='font-semibold text-lg'>Item: {index+1}</p>
                          <div className='flex my-3  '>
                          <img className=' min-w-[100px] max-h-[150px]' src={item.imageUrl} width={100} height={150}></img>
                          <div>
                            <table>
                            <tr>
                              <th className=''>Name:</th>
                              <td><p className='font-semibold'>{item.name}</p></td>
                            </tr>
                            <tr>
                              <th>Quantity:</th>
                              <td> <p>{item.quantity}</p></td>
                            </tr>
                            <tr>
                              <th>Color:</th>
                              <td> <p>{item.color}</p></td>
                            </tr>
                            <tr>
                              <th>Brand:</th>
                              <td> <p>{item.brand}</p></td>
                            </tr>
                            <tr>
                              <th>Price:</th>
                              <td> <p>{item.price}</p></td>
                            </tr>
                            </table>
                          </div>
                        </div>
                        <hr className='hr'/>
                        </div>
                      )
                    })}
                  </div>
              </div>
              )
              
            })
          } 
        </div>
    </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  th,td {
    padding: 5px;
    text-align: left;
  }
  main {

  }
`