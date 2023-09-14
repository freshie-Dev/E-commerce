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
