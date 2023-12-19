import React, { useEffect, useState, useCallback } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { FaUser } from "react-icons/fa";
import styled from "styled-components";
import Home from "./HomeBuyer";
import Cart from "./Cart";
import cartContextProvider from "../../context/CartContext";
import UserContextProvider from "../../context/UserContext";

import Settings from "./Settings";

export default function Navbar() {
  const { editableInfo, clearCredentials, toggle, setToggle } = UserContextProvider();
  const { totalItems } = cartContextProvider();

  // const [toggle, setToggle] = useState(false);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const location = useLocation();

  //! Function to handle window resize and close the menu on large screens
  const handleResize = useCallback(() => {
    if (window.innerWidth > 1024) {
      setToggle(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  //! -------------------------------------------------------------------
  if(location.pathname === "/register") {
    return
  }
  return (
    <Wrapper>
      <div className="flex fixed top-[0px] left-0 w-full justify-between items-center navbar px-[30px] h-[90px] ">
        <div className="flex justify-between items-center w-full">
          <h1 className="md:text-5xl md:font-bold text-2xl font-semibold dark">
            Navbar
          </h1>

          {token ? (
            <div className="ml-[100px] lg:flex hidden items-center justify-center mr-5 ">
              <Settings />
            </div>
          ) : null}

          <ul className="hidden lg:flex ">
            <li className={`px-2 ${location.pathname === "/" ? "active" : ""}`}>
              <NavLink to="/" element={<Home />}>
                Home
              </NavLink>
            </li>
            <li className={`px-2 ${location.pathname === "/about" ? "active" : ""}`}>
              <NavLink to="/about" element={<Home />}>
                About
              </NavLink>
            </li>
            <li className={`px-2 ${location.pathname === "/products" ? "active" : ""}`}>
              <NavLink to="/products" element={<Home />}>
                Products
              </NavLink>
            </li>
            <li className={`px-2 ${location.pathname === "/contact" ? "active" : ""}`}>
              <NavLink to="/contact" element={<Home />}>
                Contact
              </NavLink>
            </li>
            <li className={`px-2 relative ${location.pathname === "/cart" ? "active" : ""}`}>
              <NavLink to="/cart" element={<Cart />}>
                <AiOutlineShoppingCart size={25} />
              </NavLink>
              <p className="absolute flex justify-center items-center top-[-15px] right-[-10px] bg-gray-600 text-gray-300 w-6 h-6 rounded-full">
                {totalItems}
              </p>
            </li>
          </ul>
        </div>

        <div
          className="block lg:hidden "
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          <GiHamburgerMenu
            size={25}
            className={`${toggle ? "hidden" : "block"}`}
          />
          <GrClose size={25} className={`${toggle ? "block" : "hidden"}`} />
        </div>

        <div
          className={` sidebar h-full w-[50%] fixed top-0 ${
            toggle ? "left-0" : "left-[-50%]"
          }  duration-300 collapse-menu`}
        >
          <div className="flex flex-col pt-[30px] pl-[10px] px-3 h-full text-gray-700">
            {token ? (
              <div className="lg:ml-[100px] ">
                <Settings />
              </div>
            ) : null}

            <div className=" my-3">
              <p className="p-2 color-light bg-[#67686D]">
                <FaUser size={35} />
              </p>

              <h1 className="p-2">
                Hey, <span className="font-semibold text-lg">{editableInfo.name}</span>
              </h1>

              <li className={`p-2 ${location.pathname === "/details" ? "active" : ""}`}>
                <NavLink to="/details" element={<Home />}>
                  Account Details
                </NavLink>
              </li>

              <li className={`p-2 ${location.pathname === "/orders" ? "active" : ""}`}>
                <NavLink to="/orders" element={<Home />}>
                  Your Orders
                </NavLink>
              </li>

              <li onClick={()=> {clearCredentials(); navigate('/register'); setToggle(false)}} className={`block p-2 `}>
                  Log out
              </li>
            </div>

            <ul className="mt-[20px] ">
              <h1 className="text-2xl font-semibold p-2 color-light bg-[#67686D]">Goto</h1>

              <li className={`py-2 mx-2 ${location.pathname === "/" ? "active" : ""}`}>
                <NavLink to="/" element={<Home />}>
                  Home
                </NavLink>
              </li>

              <li className={`py-2 mx-2 ${location.pathname === "/about" ? "active" : ""}`}>
                <NavLink to="/about" element={<Home />}>
                  About
                </NavLink>
              </li>

              <li className={`py-2 mx-2 ${location.pathname === "/products" ? "active" : ""}`}>
                <NavLink to="/products" element={<Home />}>
                  Products
                </NavLink>
              </li>

              <li className={`py-2 mx-2 ${location.pathname === "/contact" ? "active" : ""}`}>
                <NavLink to="/contact" element={<Home />}>
                  Contact
                </NavLink>
              </li>

              <li className={`px-2 relative max-w-min my-5 ${location.pathname === "/cart" ? "active" : ""}`}>
                <NavLink to="/cart" element={<Cart />}>
                  <AiOutlineShoppingCart size={25} />
                </NavLink>
                <p className="absolute flex justify-center items-center top-[-15px] right-[-10px] bg-gray-600 text-gray-300 w-6 h-6 rounded-full">
                  {totalItems}
                </p>
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
  .color-light {
    color: #E0E0E0;
  }
  .active {
        color: #65676c;
        font-weight: 600;
        letter-spacing: 1px;
      }
`;
