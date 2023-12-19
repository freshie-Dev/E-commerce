import React from 'react'
import Login from './Login'
// import SignUp from './buyerComponents/SignUp'
import styled from 'styled-components'
import UserContextProvider from '../context/UserContext';
import { HoverButton } from '../helpers/Styles';

// import icon from "../assets/icon.eps"

export default function Register() {

  const { check, setCheck } = UserContextProvider();
  return (
    //give both equal space
    <div className='bg bg-gray-dark lg:p-20 sm:p-15 py-10 '>
                <div className='full bg-blue-dark p-5 sm:rounded-2xl grid md:grid-cols-2  '>
                    <div className='md:hidden flex flex-row justify-center items-center my-[20px] '>
                        <img
                            alt="Flowbite React Logo"
                            className=""
                            // src={icon}
                        />
                        <h1 className='text-white text-2xl'>ShopEase</h1>
                    </div>
                    <div className='w-full flex flex-col justify-center items-center'>
                        <Login />
                    </div>
                    <div className='w-full flex flex-col justify-evenly items-center  '>
                        <div className='hidden md:flex flex-row items-center my-[20px] '>
                            <img
                                alt="Flowbite React Logo"
                                className="w-[80px]"
                                // src={icon}
                            />
                            <h1 className='text-[#3A4750] font-semibold  text-4xl'>ShopEase</h1>
                        </div>
                        <div className='mt-[30px]'>
                            <p className='text-center mb-2 text-[#AAAAAA]'>{check ? "Create an Account to get started!" : "Already have an Account?"}</p>
                            {/* <SwitchButton /> */}
                            <HoverButton minWidth = '250px' onClick={()=> {setCheck(!check)}}>{check ? "Sign Up" : "Login"}</HoverButton>
                        </div>
                    </div>

                </div>
            </div>

  )
}

const Container = styled.div`

`
