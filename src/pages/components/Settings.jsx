import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { LuSettings } from "react-icons/lu";
import styled from "styled-components";
export default function Settings() {
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
        className={`flex items-center justify-between relative ${
          trigger ? "overflow-hidden" : " overflow-visible"
        } duration-300 min-w-[170px]`}
      >
        <p className="mx-2">Hello, Ahmad Ali</p>
        <LuSettings size={35} className="rotateBack icon-setting" onClick={addClass} />
        <div className="absolute bottom-[-350%] right-0 bg-[#67686D] text-[#E0E0E0] py-2 px-3 w-full rounded-xl ">
          <ul>
            <li><NavLink to='/account/details'>Account Details</NavLink></li>

            <li><NavLink to="/account/orders">Your Orders</NavLink></li>
            
            <li className="" onClick={() => {
                localStorage.removeItem("token");
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
