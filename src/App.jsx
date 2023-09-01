import React, { useContext } from 'react'
import { Routes, Route, BrowserRouter as Router, useLocation } from 'react-router-dom'
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
console.log(location.pathname)

  return (
          
    <ThemeProvider theme={theme}>
       <Router basename='/E-commerce'>
      {/* <Router> */}
        <GlobalStyle/>
            <Navbar/>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path = "/products" element= {<Products/>}/>
              <Route path = "/contact" element= {<Contact/>}/>
              <Route path = "/singleproduct/:id" element= {<SingleProduct/>}/>
              <Route path = "/cart" element= {<Cart/>}/>
              {/* 404 */}
              <Route path = "*" element= {<ErrorPage/>}/>
            </Routes>
            <Footer />
      </Router>
      </ThemeProvider>
  )
}

export default App
