import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";



import { AiOutlineShoppingCart } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrClose } from "react-icons/gr";


import styled from "styled-components";
import Home from "./Home";
import Cart from "./Cart";
import cartContextProvider from "../context/CartContext";
import UserContextProvider from "../context/UserContext";

import Menu from "./components/Menu";
import Settings from "./components/Settings";

export default function Navbar() {
  const { loggedInUser } = UserContextProvider();
  console.log("navbar", loggedInUser);
  const navigate = useNavigate();
  const [toggle, setToggle] = React.useState(false);
  const [itemValue, setItemValue] = useState(5);
  const { totalItems } = cartContextProvider();

  const token = localStorage.getItem("token");

  return (
    <Wrapper>
      <div className="flex justify-between items-center navbar px-[30px] h-[90px] text-[#67686d]">
        <div className="flex justify-between items-center w-full">
          <h1 className="md:text-5xl md:font-bold text-2xl font-semibold">
            Navbar
          </h1>

          {token ? (
            <div className="ml-[100px] flex items-center justify-center">
              {/* <button className="border-b-2 border-gray-500">hello</button> */}
              {/*  */}
              <Settings/>
              {/*  */}
              {/* <button
                onClick={() => {
                  localStorage.removeItem("token");
                  navigate("/register");
                }}
                className="px-2"
              >
                Logout
              </button> */}
            </div>
          ) : null}

          <ul className="hidden md:flex font-normal">
            <li className="px-2">
              <Link to="/" element={<Home />}>
                Home
              </Link>
            </li>
            <li className="px-2">
              <Link to="/about" element={<Home />}>
                About
              </Link>
            </li>
            <li className="px-2">
              <Link to="/products" element={<Home />}>
                Products
              </Link>
            </li>
            <li className="px-2">
              <Link to="/contact" element={<Home />}>
                Contact
              </Link>
            </li>
            <li className="px-2 relative">
              <Link to="/cart" element={<Cart />}>
                <AiOutlineShoppingCart size={25} />
              </Link>
              <p className="absolute flex justify-center items-center top-[-15px] right-[-10px] bg-gray-600 text-gray-300 w-6 h-6 rounded-full">
                {totalItems}
              </p>
            </li>
          </ul>
        </div>

        <div
          className="block md:hidden collapse-menu "
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          <RxHamburgerMenu
            size={25}
            className={`${toggle ? "hidden" : "block"}`}
          />
          <GrClose size={25} className={`${toggle ? "block" : "hidden"}`} />
        </div>

        <div
          className={`sidebar h-full w-[50%] fixed top-0 ${
            toggle ? "left-0" : "left-[-50%]"
          }  duration-300 collapse-menu`}
        >
          <div className="flex flex-col pt-[30px] pl-[10px] px-3 h-full  text-gray-700">
            <h1 className="text-2xl font-semibold">Navbar</h1>
            <ul className="mt-[50px] pl-2 ">
              <li className="py-2">
                <Link to="/" element={<Home />}>
                  Home
                </Link>
              </li>
              <li className="py-2">
                <Link to="/about" element={<Home />}>
                  About
                </Link>
              </li>
              <li className="py-2">
                <Link to="/products" element={<Home />}>
                  Products
                </Link>
              </li>
              <li className="py-2">
                <Link to="/contact" element={<Home />}>
                  Contact
                </Link>
              </li>
              <li className="py-2">
                <Link to="/cart" element={<Cart />}>
                  <AiOutlineShoppingCart size={25} />
                </Link>
                {totalItems}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .navbar {
    border-radius: 20px;
    background: #e0e0e0;
    box-shadow: 7px 7px 12px #bebebe, -7px -7px 12px #ffffff;
  }
  .collapse-menu {
    cursor: pointer;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    background: #e0e0e0;
    box-shadow: 16px 16px 20px #c1c1c1, -16px -16px 20px #ffffff;
  }
  .rotate {
    transform: rotate(180deg);
    transition: transform 1s ease-in-out;
  }
`;
