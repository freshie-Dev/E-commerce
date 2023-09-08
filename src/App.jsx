// import React from 'react'
// import { Routes, Route, BrowserRouter as Router} from 'react-router-dom'
// import './App.css'
// // import Home from './buyerPages/Home'
// import About from './buyerPages/About'
// import Products from './buyerPages/Products'
// import Contact from './buyerPages/Contact'
// import SingleProduct from './buyerPages/SingleProduct'
// import Cart from './buyerPages/Cart'
// import ErrorPage from './buyerPages/ErrorPage'
// import GlobalStyle from './GlobalStyle'
// import { ThemeProvider } from 'styled-components'
// import Navbar from './buyerPages/Navbar'
// import Footer from './buyerPages/buyerComponents/Footer'

// import './App.scss'
// import Register from './buyerPages/Register'
// import Menu from './buyerPages/buyerComponents/Menu'
// import Account from './buyerPages/Account'
// import Details from './buyerPages/buyerComponents/Details'
// import Orders from './buyerPages/buyerComponents/Orders'
// import UserContextProvider from './context/UserContext'



// function App() {
//   const {loggedInUser} = UserContextProvider();
 
//   const theme = {
//     colors: {
//       bgc: "#E0E0E0",
//       dark: "#263238",
//       light: "#546e7a",
//       lighter: "#b0bec5",
//       text: "#fafafa",
//       link: "#444444",
//     },
//   }

//   if (loggedInUser === "buyer") {
//     import('./buyerPages/Home')
//     .then((Home) => {
//        console.log('Home imported from buyer');
//     });
//   } else {
//     import('./sellerPages/Home')
//     .then((Home) => {
//       console.log("Home imported from seller");
//     })
//   }

//   return (
          
//     <ThemeProvider theme={theme}>
//        <Router basename='/E-commerce/'>
//       {/* <Router> */}
//         <GlobalStyle/>
//             <Navbar/>
//             <Routes>
//               <Route path="/menu" element={<Menu/>}/>
//               <Route path="/" element={<Home/>}/>
//               <Route path="/register" element={<Register />} />
//               <Route path="/about" element={<About/>}/>
//               <Route path = "/products" element= {<Products/>}/>
//               <Route path = "/contact" element= {<Contact/>}/>
//               <Route path = "/singleproduct/:id" element= {<SingleProduct/>}/>
//               <Route path = "/cart" element= {<Cart/>}/>
//               {/* 404 */}
//               <Route path = "*" element= {<ErrorPage/>}/>
//               <Route path="/details" element={<Details />} />
//               <Route path='/orders' element={<Orders />}/>

//             </Routes>
//             <Footer />
//       </Router>
//       </ThemeProvider>
//   )
// }

// export default App

import React, { Suspense, lazy } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import './App.scss';
import Home from './buyerPages/Home';
import HomeSeller from './sellerPages/HomeSeller';
import About from './buyerPages/About';
import Products from './buyerPages/Products';
import Contact from './buyerPages/Contact';
import SingleProduct from './buyerPages/SingleProduct';
import Cart from './buyerPages/Cart';
import ErrorPage from './buyerPages/ErrorPage';
import GlobalStyle from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import Navbar from './buyerPages/Navbar';
import Footer from './buyerPages/buyerComponents/Footer';
import Register from './buyerPages/Register';
import Details from './buyerPages/buyerComponents/Details';
import Orders from './buyerPages/buyerComponents/Orders';

import UserContextProvider from './context/UserContext';

// Use the `lazy` function to dynamically import Home component
// const HomeBuyer = lazy(() => import('./buyerPages/Home'));
// const HomeSeller = lazy(() => import('./sellerPages/Home'));
let userType = localStorage.getItem('userType');
function App() {
  const theme = {
    colors: {
      bgc: "#E0E0E0",
      dark: "#263238",
      light: "#546e7a",
      lighter: "#b0bec5",
      text: "#fafafa",
      link: "#444444",
    },
  };
 const check = true;
  return (
    <ThemeProvider theme={theme}>
      <Router basename='/E-commerce/'>
        <GlobalStyle />
        {userType === "buyer" ? <Navbar />: "Navbar"}
        <Routes>
         
          {userType === "seller" ? 
          <>
            <Route path='/' element={<HomeSeller/>}/>
          </> :
          <>
            <Route path='/' element={<Home/>}/>
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/singleproduct/:id" element={<SingleProduct />} />
            <Route path="/cart" element={<Cart />} />
            {/* 404 */}
            <Route path="/details" element={<Details />} />
            <Route path="/orders" element={<Orders />} />
          </>
          }
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<ErrorPage />} />

          
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
