import React, { useState} from 'react'
import { useNavigate } from 'react-router';
import axios from 'axios';
import styled from 'styled-components';
import UserContextProvider from '../../context/UserContext';

export default function Login() {
    const {loggedInUser,setLoggedInUser} = UserContextProvider();
    let navigate = useNavigate();
    const [User, setUser] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setUser({
            ...User,
            [e.target.name]: e.target.value
        })
    };
    const login = async (e) => {
        e.preventDefault();
        const response = await axios.post('http://localhost:3000/register/login', User)
        const data = await (response.data)
        console.log(data)
        localStorage.setItem('token', data.token)
        setLoggedInUser({
            name: data.foundUser.name,
            email: data.foundUser.email,
            password: data.foundUser.password,
            type: data.foundUser.type,
            orders: data.foundUser.orders,
          })
        
        console.log("from login",loggedInUser)
        // console.log(data.token)

        navigate('/');


    };


  return (
    <>
        <form onSubmit={login} className='rounded-[15px] flex flex-col justify-center items-center border-4 border-[#FFDBAA]'>
        <h1 className='text-5xl p-3 font-semibold bg-[#FF9E9D] w-full rounded-t-xl  text-center text-[#5AB5AD]'>Login</h1>
            <input className="bg-[#95ded7] w-[290px] sm:w-[320px] p-3  border border-b-blue-200 focus:outline-none"onChange={handleChange} placeholder='Email'type="email" name="email" value={User.email} required />
            <input className="bg-[#fcd2d2] w-[290px] sm:w-[320px] p-3 border-b-blue-200 focus:outline-none"onChange={handleChange} placeholder='Password' type="password" name="password" value={User.password} required/>
            <button type="submit" className='w-[290px] sm:w-[320px] text-xl font-semibold p-3 rounded-b-xl   bg-[#5AB5AD] text-center text-[#FF9E9D]  '>Login</button>
        </form>
    </>
  )
};

const Container = styled.div`
    
`