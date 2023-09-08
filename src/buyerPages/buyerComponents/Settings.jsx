import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { LuSettings } from "react-icons/lu";
import styled from "styled-components";
import UserContextProvider from "../../context/UserContext";
export default function Settings() {
  
  const {editableInfo} = UserContextProvider();
    const navigate = useNavigate();
  let [trigger, setTrigger] = useState(true);

  const addClass = (e) => {
    setTrigger((prevValue) => !prevValue);
    e.currentTarget.classList.toggle("rotateBack");
    e.currentTarget.classList.toggle("rotate");
  };

  return (
    <Wrapper>
      <div
        className={`hidden lg:flex items-center justify-between relative ${
          trigger ? "overflow-hidden" : " overflow-visible"
        } duration-300 min-w-[170px]`}
      >
        <p className="mx-2 min-w-max">Hello, Ahmad Ali</p>
        <LuSettings size={35} className=" rotateBack icon-setting dark" onClick={addClass} />
        <div className="absolute md:bottom-[-350%] bottom-[-350%] right-0 bg-[#8194aa] text-[#cecccc] py-2 px-3 w-full rounded-xl ">
          <ul>
            <li><NavLink to='/details'>Account Details</NavLink></li>

            <li><NavLink to="/orders">Your Orders</NavLink></li>
            
            <li className="" onClick={() => {
                localStorage.clear();
                navigate("/register");
              }}>
              Log out
            </li>

          </ul>
        </div>
      </div>

    </Wrapper>
  );
}

const Wrapper = styled.div`
  .rotate {
    transform: rotate(90deg);
    transition: transform 0.3s ;
  }
  .rotateBack {
    transform: rotate(-90deg);
    transition: transform 0.3s ;
  }
  li, .icon-setting {
    cursor: pointer;
    padding-top: 3px;
    padding-bottom: 3px;
  }
`;
