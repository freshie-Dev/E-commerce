import React, { useContext, useEffect, useState } from 'react';
import UserContextProvider from '../../context/UserContext';
import styled from "styled-components";
import { maskPassword } from '../../helpers/Utilities';
import { NavLink } from 'react-router-dom';
import { Pulsar } from '@uiball/loaders';
import axios from 'axios';

export default function Details() {
  const url = "https://web-production-8eab.up.railway.app"
  const {editableInfo, setEditableInfo} = UserContextProvider();
  const [details, setDetails] = useState()

  //!------------------ changing info --------------------
  const [isNameEditing, setIsNameEditing] = useState(false);
  const [isPasswordEditting, setIsPasswordEditting] = useState(false);
  
  function handleInfoChange (event){
    const {name, value} = event.target;
    setEditableInfo(prevValues => {
      return{...prevValues,[name]:value}
    })
  }
  async function handleSave (){
    const getData = async()=> {
      const config = {
        headers: {
            "auth-token": localStorage.getItem('token')
        }
      }
      let newData = {
        name: editableInfo.name,
        password: editableInfo.password
      }
      const response = await axios.put(`${url}/register/userinfo`, newData,config)
      const data = await response.data;
      console.log(data);
      const updatedResponse = await axios.get(`${url}/register/userinfo`, config);
    const updatedData = await updatedResponse.data;

    // Update the component's state with the new data
    setDetails({
      name: updatedData.name,
      email: updatedData.email,
      password: updatedData.password,
      type: updatedData.type,
      data: updatedData.createdAt
    });

    setEditableInfo({
      name: updatedData.name,
      password: updatedData.password,
    });
  }
  console.log("running handlesave")
  getData();
}
  //!------------------------------------------------------


useEffect (()=> {
  const getData = async()=> {
    const config = {
      headers: {
          "auth-token": localStorage.getItem('token')
      }
    }
    const response = await axios.get(`${url}/register/userinfo`, config)
    const data = await response.data;

    const userDetails = {
      name: data.name,
      email: data.email,
      password: data.password,
      type: data.type,
      data: data.createdAt
    }
    localStorage.setItem('userDetails', JSON.stringify(userDetails))    
    let localDetails = JSON.parse(localStorage.getItem('userDetails'))
    setDetails(localDetails)
    setEditableInfo({
      name: localDetails.name,
      password: localDetails.password,
    })
  }
  getData();


},[])



if (!details ) {
  return <div className='main flex justify-center items-center h-[50vh] mt-[100px]'>
    <Pulsar/>
    <h1 className='mx-3 md:text-2xl font-semibold'>Loading your Details</h1>
  </div>
}
  return (
    <Wrapper>
      <div className='mt-[100px]'>
        <h1 className='text-center text-2xl font-semibold mt-10'>User Details</h1>
        <div>
          <div className='main flex justify-center items-center'>
            <table className=' '>
              {/* name */}
              <tr>
                <td><p>Name:</p></td>

                {isNameEditing? 
                  <td><input className='w-[60%] over' name='name' onChange={handleInfoChange} value={editableInfo.name}/></td>:
                  <td><p className='info'>{details.name}</p></td>
                }

                <td><button onClick={()=> {
                  !isNameEditing ? setIsNameEditing(!isNameEditing) :( handleSave() && setIsNameEditing(!isNameEditing));
                }}>{!isNameEditing?"Edit":"Save"}</button></td>

             </tr>

             {/* email */}
              <tr>
                <td><p>Email:</p></td>
                <td className='info'><p>{details.email}</p></td>
              </tr>

              {/* password */}
              <tr>
                <td><p>Password:</p></td>
                
                {isPasswordEditting? 
                  <td><input className='w-[60%] over' name='password' onChange={handleInfoChange} value={editableInfo.password}/></td>:
                  <td><p className='info'>{maskPassword(details.password)}</p></td>
                }

                <td><button onClick={()=> {
                  !isPasswordEditting ? setIsPasswordEditting(!isPasswordEditting) :( handleSave() && setIsPasswordEditting(!isPasswordEditting));
                }}>{!isPasswordEditting?"Edit":"Save"}</button></td>

              </tr>

              {/* type */}
              <tr>
                <td><p>Account Type:</p></td>
                <td className='info'><p>{details.type}</p></td>
              </tr>

              {/* orders */}
              <tr>
                <td><p>Your Orders:</p></td>
                <td className='info'><NavLink to='/orders'><button className='button btn'>See Orders</button></NavLink></td>
              </tr>
            </table> 
          </div>
          

        </div>
      </div>
  </Wrapper>
  )
}

const Wrapper = styled.div`
 td {
  padding: 10px 20px;
 }
 .info {
  font-weight: bold;
 }
 .btn {
  margin:0px;
 }
`