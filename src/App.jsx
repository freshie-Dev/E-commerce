import { Routes, Route, HashRouter as Router, useNavigate } from 'react-router-dom';
import './App.css';
import './App.scss';
import Home from './pages/Home';
import About from './pages/buyer/About';
import Products from './pages/buyer/Products';
import Contact from './pages/buyer/Contact';
import SingleProduct from './pages/buyer/SingleProduct';
import Cart from './pages/buyer/Cart';
import ErrorPage from './pages/buyer/ErrorPage';
import GlobalStyle from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import Navbar from './pages/buyer/Navbar';
import Footer from './pages/Footer';
import Register from './pages/Register';
import Details from './pages/buyer/Details';
import Orders from './pages/buyer/Orders';
import AddProduct from './pages/seller/add-products/AddProduct';




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
      {/* <Router basename='/E-commerce'> */}
      <Router>
        <GlobalStyle />
        {/* {userType === "buyer" ? <Navbar />: "Navbar"} */}
        <Routes>

          <Route path='/' element={<Home />} />

          {/* Seller Routes */}
          <Route path="/addproduct" element={<AddProduct />} />

          {/* Buyer Routes */}
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/details" element={<Details />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<ErrorPage />} />


        </Routes>
        <Navbar />
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;