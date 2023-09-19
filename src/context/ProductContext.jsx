import axios from "axios";
import React, { useEffect, useReducer, useContext } from "react";
import { createContext, useState } from "react";


const ProductContext = createContext({});

import reducer from "../reducer/ProductReducer";

const ProductProvider = ({children}) => {
    const [featuredProducts, setFeaturedProducts] = useState();
    const url = "https://web-production-8eab.up.railway.app" 

    // const [state, dispatch] = useReducer(first, second, third)
    const initialState = {
        isLoading: false,
        isError: false,
        products: [],
        featuredProducts: [],
        isSingleProductLoading: false,
        isSingleProductError: false,
        singleProduct: {},
    }
    const [state, dispatch] = useReducer(reducer, initialState)
    
    //////////////////& Fetch all products from API
    const getProducts = async () => {
        dispatch({type: "GET_LOADING"})
        try {
            const response = await axios.get(url + "/products"); // Use async/await
            const data = await response.data;
            // console.log(data)
            dispatch({type: "SET_API_PRODUCTS", payload: data})
        } catch (error) {
            dispatch({type: "GET_API_PRODUCTS_ERROR"})
            console.log("Error occurred");
            console.error(error);
        }
    }
    //////////////////& Fetch single products from API
    const getSingleProduct = async (id) => {
        dispatch({type: "GET_SINGLE_LOADING"})
        try {
            const response = await axios.get(`${url}/products/${id}`); // Use async/await
            const data = await response.data;
            // console.log(data)
            dispatch({type: "SET_API_SINGLE_PRODUCT", payload: data})
        } catch (error) {
            dispatch({type: "GET_API_SINGLE_PRODUCT_ERROR"})
            console.log("Error occurred");
            console.error(error);
        }
    }
    useEffect(() => {
        getProducts();
        // access data from useReducer state
        setFeaturedProducts(state.featuredProducts)
        console.log("featured products " + state.featuredProducts)
    }, []);
   
    return (
        <ProductContext.Provider value={{
                                        ...state, 
                                        getSingleProduct,
                                        }}>
            {children}
        </ProductContext.Provider>
    )
}

const ProductContextProvider = () => {
    return ( useContext(ProductContext) )
};

export {ProductProvider};
export default ProductContextProvider;