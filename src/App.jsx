import React, { useContext } from 'react'
import { Routes, Route, BrowserRouter as Router, useLocation, Navigate, useNavigate } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Contact from './pages/Contact'
import SingleProduct from './pages/SingleProduct'
import Cart from './pages/Cart'
import ErrorPage from './pages/ErrorPage'
import GlobalStyle from './GlobalStyle'
import { ThemeProvider } from 'styled-components'
import Navbar from './pages/Navbar'
import Footer from './pages/components/Footer'

import './App.scss'
import Register from './pages/Register'
import Menu from './pages/components/Menu'
import Account from './pages/Account'
import Details from './pages/components/Details'
import Orders from './pages/components/Orders'



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
  }

  return (
          
    <ThemeProvider theme={theme}>
       <Router basename='/E-commerce/'>
      {/* <Router> */}
        <GlobalStyle/>
            <Navbar/>
            <Routes>
              <Route path="/menu" element={<Menu/>}/>
              <Route path="/" element={<Home/>}/>
              <Route path="/register" element={<Register />} />
              <Route path="/about" element={<About/>}/>
              <Route path = "/products" element= {<Products/>}/>
              <Route path = "/contact" element= {<Contact/>}/>
              <Route path = "/singleproduct/:id" element= {<SingleProduct/>}/>
              <Route path = "/cart" element= {<Cart/>}/>
              {/* 404 */}
              <Route path = "*" element= {<ErrorPage/>}/>
              
              <Route path="/account" element={<Account />}>
                <Route path="/account/details" element={<Details />} />
                <Route path='/account/orders' element={<Orders />}>
                </Route>
              </Route>

            </Routes>
            <Footer />
      </Router>
      </ThemeProvider>
  )
}

export default App
