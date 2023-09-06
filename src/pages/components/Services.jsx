import React from 'react'

import {AiOutlineSafetyCertificate} from 'react-icons/ai'
import {FaShippingFast} from 'react-icons/fa'
import {GiReceiveMoney} from 'react-icons/gi'
import {RiSecurePaymentLine} from 'react-icons/ri'

import styled from 'styled-components'


export default function Services() {
  return (
    <Wrapper>
        <div className='flex w-full justify-center items-center main'>
            <div className='flex md:flex-row flex-col'>
                <div className='item mx-5   '>
                    <span className='logo'><AiOutlineSafetyCertificate size={40}/></span>
                    <p className=' text-center mt-3 font-thin'>Super Fast and Free Delivery</p>
                </div>
                <div className='flex flex-col mx-5'>
                    <div className='item md:mb-[30px]   '>
                        <span className='logo'><FaShippingFast size={40}/></span>
                        <p  className=' text-center mt-3 font-thin'>Non-contact Shipping</p>
                    </div>
                    <div className='item   '>
                        <span className='logo'><GiReceiveMoney size={40}/></span>
                        <p  className=' text-center mt-3 font-thin'>Money-back Guarantee</p>
                    </div>
                </div>
                <div className='item mx-5 md:br-round bb-round  '>
                    <span className='logo'><RiSecurePaymentLine size={40}/></span>
                    <p  className=' text-center mt-3 font-thin'>Super Secure Payment System</p>
                </div>
            </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    .item {
        padding: 30px 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .main {
        padding: 50px;
        border-radius: 50px;
        background: #e0e0e0;
        box-shadow: inset 5px 5px 10px #bebebe,
        inset -5px -5px 10px #ffffff;
    }
    .logo {
        color: #434343;
        padding: 10px;
        border-radius: 5px;
        background: linear-gradient(145deg, #f0f0f0, #cacaca);
        box-shadow:  3px 3px 5px #bebebe,
                    -3px -3px 5px #fffffa;
    }

    `