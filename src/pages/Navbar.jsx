// import React, { useEffect, useState, useCallback } from "react";
// import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";

// import { AiOutlineShoppingCart } from "react-icons/ai";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { GrClose } from "react-icons/gr";
// import {FaUser} from "react-icons/fa"

// import styled from "styled-components";
// import Home from "./Home";
// import Cart from "./Cart";
// import cartContextProvider from "../context/CartContext";
// import UserContextProvider from "../context/UserContext";

// import Menu from "./components/Menu";
// import Settings from "./components/Settings";

// export default function Navbar() {

//   const { loggedInUser, editableInfo } = UserContextProvider();
//   const { totalItems } = cartContextProvider();

//   const [toggle, setToggle] = React.useState(false);
//   const [itemValue, setItemValue] = useState(5);
  
//   const token = localStorage.getItem("token");
//   const navigate = useNavigate();

//   //! Function to handle window resize and close the menu on large screens
//   const handleResize = useCallback(() => {
//     if (window.innerWidth > 1024) {
//       setToggle(false);
//     }
//   }, []);
//   useEffect(() => {
//     window.addEventListener("resize", handleResize);
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, [handleResize]);
//   //! -------------------------------------------------------------------
//   return (
//     <Wrapper>
//       <div className="flex fixed top-[0px] left-0 w-full justify-between items-center navbar px-[30px] h-[90px] text-[#67686d]">
//         <div className="flex justify-between items-center w-full">
//           <h1 className="md:text-5xl md:font-bold text-2xl font-semibold">
//             Navbar
//           </h1>

//           {token ? (
//             <div className="ml-[100px] lg:flex hidden items-center justify-center mr-5 ">
//               <Settings/>
//             </div>
//           ) : null}

//           <ul className="hidden lg:flex font-normal">
//             <NavLink className={`({ isActive }) => (isActive ? 'active' : 'inactive') px-2`}  >
//               <Link  to="/" element={<Home />}>
//                 Home
//               </Link>
//             </NavLink>
//             <NavLink <NavLink className={`({ isActive }) => (isActive ? 'active' : 'inactive') px-2`}  >
//               <Link to="/about" element={<Home />}>
//                 About
//               </Link>
//             </NavLink>
//             <NavLink <NavLink className={`({ isActive }) => (isActive ? 'active' : 'inactive') px-2`}  >
//               <Link to="/products" element={<Home />}>
//                 Products
//               </Link>
//             </NavLink>
//             <NavLink <NavLink className={`({ isActive }) => (isActive ? 'active' : 'inactive') px-2`}  >
//               <Link to="/contact" element={<Home />}>
//                 Contact
//               </Link>
//             </NavLink>
//             <NavLink <NavLink className={`({ isActive }) => (isActive ? 'active' : 'inactive') px-2 relative`}>
//               <Link to="/cart" element={<Cart />}>
//                 <AiOutlineShoppingCart size={25} />
//               </Link>
//               <p className="absolute flex justify-center items-center top-[-15px] right-[-10px] bg-gray-600 w-6 h-6 rounded-full">
//                 {totalItems}
//               </p>
//             </NavLink>
//           </ul>
//         </div>

//         <div
//             className="block lg:hidden "
//             onClick={() => {
//               setToggle(!toggle);
//             }}
//           >
//           <GiHamburgerMenu
//             size={25}
//             className={`${toggle ? "hidden" : "block"}`}
//           />
//           <GrClose size={25} className={`${toggle ? "block" : "hidden"}`} />
//         </div>

//         <div
//           className={` sidebar h-full w-[50%] fixed top-0 ${
//             toggle ? ("left-0") : ("left-[-50%]")
//           }  duration-300 collapse-menu`}
//         >
//           <div className="flex flex-col pt-[30px] pl-[10px] px-3 h-full text-gray-700">
            
//               {token ? (
//               <div className="lg:ml-[100px] ">
//                 <Settings/>
//               </div>
//               ) : null}

//             <div className=" my-3">
//               <p className="p-2 color-light bg-[#67686D]"><FaUser size= {35}/></p>

//               <h1 className="p-2">Hey, <span className="font-semibold text-lg">{editableInfo.name}</span></h1>
              
//                <NavLink className={`({ isActive }) => (isActive ? 'active' : 'inactive')`}  className='block p-2' to='/details'>Account Details</NavLink>

//                <NavLink className={`({ isActive }) => (isActive ? 'active' : 'inactive')`}  className='block p-2' to="/orders">Your Orders</NavLink>
              
//                <NavLink className={`({ isActive }) => (isActive ? 'active' : 'inactive')`}  className="block p-2" onClick={() => {
//                   localStorage.removeItem("token");
//                   navigate("/register");
//                 }}>
//                 Log out
//               </NavLink>
//             </div>

//             <ul className="mt-[20px] ">
//               <h1 className="text-2xl font-semibold p-2 color-light bg-[#67686D]">Goto</h1>
//                <NavLink className={`({ isActive }) => (isActive ? 'active' : 'inactive')`}  className="py-2 mx-2">
//                 <Link to="/" element={<Home />}>
//                   Home
//                 </Link>
//               </NavLink>
//                <NavLink className={`({ isActive }) => (isActive ? 'active' : 'inactive')`}  className="py-2 mx-2">
//                 <Link to="/about" element={<Home />}>
//                   About
//                 </Link>
//               </NavLink>
//               <NavLink className={`({ isActive }) => (isActive ? 'active' : 'inactive')`}  className="py-2 mx-2">
//                 <Link to="/products" element={<Home />}>
//                   Products
//                 </Link>
//               </NavLink>
//               <NavLink  className={`({ isActive }) => (isActive ? 'active' : 'inactive')`}  className="py-2 mx-2">
//                 <Link to="/contact" element={<Home />}>
//                   Contact
//                 </Link>
//               </NavLink>
//               <NavLink  className={`({ isActive }) => (isActive ? 'active' : 'inactive')`}  className="px-2 relative max-w-min my-5">
//               <Link to="/cart" element={<Cart />}>
//                 <AiOutlineShoppingCart size={25} />
//               </Link>
//               <p className="absolute flex justify-center items-center top-[-15px] right-[-10px] bg-gray-600 text-gray-300 w-6 h-6 rounded-full">
//                 {totalItems}
//               </p>
//             </NavLink>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </Wrapper>
//   );
// }

// const Wrapper = styled.div`
//   .navbar {
//     border-radius: 20px;
//     background: #e0e0e0;
//     box-shadow: 7px 7px 12px #bebebe, -7px -7px 12px #ffffff;
//   }
//   .collapse-menu {
//     cursor: pointer;
//     border-top-right-radius: 20px;
//     border-bottom-right-radius: 20px;
//     background: #e0e0e0;
//     box-shadow: 16px 16px 20px #c1c1c1, -16px -16px 20px #ffffff;
//   }
//   .rotate {
//     transform: rotate(180deg);
//     transition: transform 1s ease-in-out;
//   }
//   .color-light {
//     color: #E0E0E0;
//   }
// `;
import React, { useEffect, useState, useCallback } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { FaUser } from "react-icons/fa";
import styled from "styled-components";
import Home from "./Home";
import Cart from "./Cart";
import cartContextProvider from "../context/CartContext";
import UserContextProvider from "../context/UserContext";

import Menu from "./components/Menu";
import Settings from "./components/Settings";

export default function Navbar() {
  const { loggedInUser, editableInfo } = UserContextProvider();
  const { totalItems } = cartContextProvider();

  const [toggle, setToggle] = useState(false);
  const [itemValue, setItemValue] = useState(5);
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
  return (
    <Wrapper>
      <div className="flex fixed top-[0px] left-0 w-full justify-between items-center navbar px-[30px] h-[90px] text-[#67686d]">
        <div className="flex justify-between items-center w-full">
          <h1 className="md:text-5xl md:font-bold text-2xl font-semibold">
            Navbar
          </h1>

          {token ? (
            <div className="ml-[100px] lg:flex hidden items-center justify-center mr-5 ">
              <Settings />
            </div>
          ) : null}

          <ul className="hidden lg:flex font-normal">
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
              <p className="absolute flex justify-center items-center top-[-15px] right-[-10px] bg-gray-600 w-6 h-6 rounded-full">
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

              <li className={`block p-2 ${location.pathname === "/register" ? "active" : ""}`}>
                <Link to="/register">
                  Log out
                </Link>
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
`;
