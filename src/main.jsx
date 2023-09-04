import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ProductProvider } from "./context/ProductContext.jsx";
import { FilterProvider } from "./context/FilterContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { UserProvider } from "./context/UserContext.jsx";






ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductProvider>
        <FilterProvider>
            <CartProvider>
              <UserProvider>
                <App /> 
              </UserProvider>
            </CartProvider>
        </FilterProvider>
    </ProductProvider>    
  </React.StrictMode>
);
