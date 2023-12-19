import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router';
import axios from 'axios';
import styled from 'styled-components';
import UserContextProvider from '../context/UserContext';
import ValidationContextProvider from '../context/InputValidator';
import { HoverButton } from '../helpers/Styles';

import { IoIosInformationCircleOutline } from "react-icons/io"
import { FcApproval } from "react-icons/fc"

export default function Login() {
    // const url = "https://web-production-8eab.up.railway.app"
    const url = "http://localhost:3000"
    const { loggedInUser, errorInfo, loginUser, signupUser, isUserLoggedIn, setUserType, userType, check, setCheck, user, setUser } = UserContextProvider();
    const { verifyInput, verification, printSomething, wrongInput } = ValidationContextProvider();

    const [test, setTest] = useState({});
    const [show, setShow] = useState({
        username: false,
        password: false,
        confirmPassword: false,
        phoneNumber: false,
    })
    let navigate = useNavigate();

    //! 1: handling input fields.
    const handleChange = (event) => {
        const { name, value } = event.target;

        setTest({ name, value })
        setUser((prevValue) => {
            return { ...prevValue, [name]: value };
        });

    };

    //! 2: Handling different types of button clicks.
    const handleSubmit = async (event) => {
        event.preventDefault();
        const action = event.nativeEvent.submitter.name

        if (action === "signup") {
            if (user.password === user.confirmPassword) {
                signupUser(user, user.country)
            } else {
                alert("Passwords do not match")
            }
        } else if (action === "forget") {
            console.log("i am forget")
        }
        else {
            loginUser(user);
        }
    }

    //! 3: Checking for verification of inputs.
    useEffect(() => {
        const { name, value } = test;
        verifyInput(name, value);
    }, [test])

    //! 4: Login, Logout
    useEffect(() => {
        console.log("logged in: ", isUserLoggedIn)
        isUserLoggedIn ? navigate('/') : navigate('/register')
    }, [isUserLoggedIn])


    return (
        <Wrapper>
            <form onSubmit={event => handleSubmit(event)}>
                <div className='inputs-container flex flex-col justify-center items-center relative'>
                    {/* //! USERNAME input */}
                    <div className='w-full flex justify-between relative'>
                        <input className={`light input spacing h-[50px]  inset-shadow max-w-[350px] w-[100%]`} autoComplete="off" placeholder="Username" type="text" name='username' value={user.username} onChange={handleChange} required />
                        <div className='flex justify-center items-center'>
                            <div className={`${!errorInfo.username ? "hidden" : " "} ml-2 duration-300`}>{wrongInput.username ? <IoIosInformationCircleOutline color='#3A4750' size={20} onMouseOver={() => setShow(prev => { return { ...prev, username: true } })} onMouseLeave={() => setShow(prev => { return { ...prev, username: false } })} /> : <FcApproval size = {20} />}</div>
                            <div className={`w-[200px] absolute text-xs left-[100%]  duration-300 bg-[#171717] border-white border-[1px] p-3 ml-3 rounded-xl ${!show.username || !wrongInput.username ? "hidden" : "block"}`}><p>
                                {verification.username && verification.username.errors && verification.username.errors.map((error, index) => (
                                    <p className='my-2' key={index}>{index}. {error}</p>
                                ))}
                            </p>
                            </div>
                        </div>
                    </div>


                    <div className='w-full flex justify-between relative'>
                        {/* //! PASSWORD input */}
                        <input minLength={6} placeholder="Password" className="light input spacing h-[50px]  inset-shadow max-w-[350px] w-[100%]" type="text" name='password' value={user.password} onChange={handleChange} required />
                        <div className='flex justify-center items-center'>
                            <div className={`${!errorInfo.password ? "hidden" : " "} ml-2 duration-300`}>{wrongInput.password ? <IoIosInformationCircleOutline color='#3A4750' size={20} onMouseOver={() => setShow(prev => { return { ...prev, password: true } })} onMouseLeave={() => setShow(prev => { return { ...prev, password: false } })} /> : <FcApproval size = {20} />}</div>
                            <div className={`w-[200px] absolute text-xs left-[100%]  duration-300 bg-[#171717] border-white border-[1px] p-3 ml-3 rounded-xl ${!show.password || !wrongInput.password ? "hidden" : "block"}`}><p>
                                {verification.password && verification.password.errors && verification.password.errors.map((error, index) => (
                                    <p className='my-2' key={index}>{index}. {error}</p>
                                ))}
                            </p>
                            </div>
                        </div>
                    </div>

                    {!check && <>
                        <div className='w-full flex justify-between relative'>
                            {/* //! CONFIRM PASSWORD input */}
                            <input minLength={6} placeholder="Confirm Password" className="light input spacing h-[50px]  inset-shadow max-w-[350px] w-[100%]" name='confirmPassword' value={user.confirmPassword} type="text" onChange={handleChange} required />
                            <div className='flex justify-center items-center'>
                                <div className={`${!errorInfo.confirmPassword ? "hidden" : " "} ml-2 duration-300`}>{wrongInput.confirmPassword ? <IoIosInformationCircleOutline color='#3A4750' size={20} onMouseOver={() => setShow(prev => { return { ...prev, confirmPassword: true } })} onMouseLeave={() => setShow(prev => { return { ...prev, confirmPassword: false } })} /> : <FcApproval size = {20} />}</div>
                                <div className={`w-[200px] absolute text-xs left-[100%]  duration-300 bg-[#171717] border-white border-[1px] p-3 ml-3 rounded-xl ${!show.confirmPassword || !wrongInput.confirmPassword ? "hidden" : "block"}`}><p>
                                    {verification.confirmPassword && verification.confirmPassword.errors && verification.confirmPassword.errors.map((error, index) => (
                                        <p className='my-2' key={index}>{index}. {error}</p>
                                    ))}
                                </p>
                                </div>
                            </div>
                        </div>
                        
                        <div className='w-full flex justify-between relative'>
                            {/* //! USERTYPE input */}
                            <select name="type" value={user.type} onChange={handleChange} className='rounded-3xl w-full text-[#6B7280]' required>
                                <option value='' className='font-semibold'>Select</option>
                                <option value="seller">Seller</option>
                                <option value="buyer">Buyer</option>
                            </select>
                            <div className='flex justify-center items-center'>
                                <div className={`${!errorInfo.type ? "hidden" : " "} ml-2 duration-300`}>{wrongInput.type ? <IoIosInformationCircleOutline color='#3A4750' size={20} onMouseOver={() => setShow(prev => { return { ...prev, type: true } })} onMouseLeave={() => setShow(prev => { return { ...prev, type: false } })} /> : <FcApproval size = {20} />}</div>
                                <div className={`w-[200px] absolute text-xs left-[100%]  duration-300 bg-[#171717] border-white border-[1px] p-3 ml-3 rounded-xl ${!show.type || !wrongInput.type ? "hidden" : "block"}`}><p>
                                    {verification.type && verification.type.errors && verification.type.errors.map((error, index) => (
                                        <p className='my-2' key={index}>{index}. {error}</p>
                                    ))}
                                </p>
                                </div>
                            </div>
                        </div>

                        <div className='flex'>
                            <div className='w-full flex justify-between relative'>
                                {/* //! COUNTRY CODE input */}
                                <select className='text-gray-600 input-select offset-shadow bg-[#E0E0E0] mr-2' name="country" value={user.country} onChange={handleChange}>
                                    <option value="+92">🇵🇰 (+92)</option>
                                    <option value="+1">🇺🇸 (+1)</option>
                                    <option value="+44">🇬🇧 (+44)</option>
                                    <option value="+81">🇯🇵 (+81)</option>
                                    {/* Add more countries as needed */}
                                </select>
                                {/* //! PHONE input */}
                                <input placeholder="Phone Number" className="light input spacing h-[50px]  inset-shadow max-w-[350px] w-[100%]" name="phone" value={user.phone} type="text" onChange={handleChange} required />

                                <div className='flex justify-center items-center'>
                                <div className={`${!errorInfo.phone ? "hidden" : " "} ml-2 duration-300`}>{wrongInput.phone ? <IoIosInformationCircleOutline color='#3A4750' size={20} onMouseOver={() => setShow(prev => { return { ...prev, phone: true } })} onMouseLeave={() => setShow(prev => { return { ...prev, phone: false } })} /> : <FcApproval size = {20} />}</div>
                                <div className={`w-[200px] absolute text-xs left-[100%]  duration-300 bg-[#171717] border-white border-[1px] p-3 ml-3 rounded-xl ${!show.phone || !wrongInput.phone ? "hidden" : "block"}`}><p>
                                    {verification.phone && verification.phone.errors && verification.phone.errors.map((error, index) => (
                                        <p className='my-2' key={index}>{index}. {error}</p>
                                    ))}
                                </p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </>}


                    {check &&
                        //! Login button 
                        <HoverButton minWidth='320px' name="login" type='submit' className="">Login</HoverButton>
                    }
                    {check &&
                        //! Forget button 
                        <HoverButton minWidth='320px' name="forget" onClick={handleSubmit} className="">Forgot Password</HoverButton>
                    }
                    {!check &&
                        //! SignUp button 
                        <HoverButton minWidth='100%' name="signup" type='submit' className="">Sign Up</HoverButton>
                    }
                </div>

            </form>

        </Wrapper>
    )
};

const Wrapper = styled.div`
.inputs-container > *:not(:last-child) {
    margin-bottom: 10px; /* Adjust the value as needed */
}
`