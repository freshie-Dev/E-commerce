import axios from "axios";
import React, { useEffect, useReducer } from "react";
import { createContext, useState } from "react";


const ProductContext = createContext({});
export { ProductContext};
import reducer from "../reducer/ProductReducer";

const ProductProvider = ({children}) => {
    const [featuredProducts, setFeaturedProducts] = useState();

    // const [state, dispatch] = useReducer(first, second, third)
    const initialState = {
        isLoading: false,
        isError: false,
        products: [],
        featuredProducts: [],
    }
    const [state, dispatch] = useReducer(reducer, initialState)
    
    //////////////////& Fetch products from API
    const getProducts = async (url) => {
        dispatch({type: "GET_LOADING"})
        try {
            const response = await axios.get('https://fakestoreapi.com/products'); // Use async/await
            const data = await response.data;
            const json =  JSON.stringify(data);
            // console.log(data)
            dispatch({type: "SET_API_PRODUCTS", payload: data})
        } catch (error) {
            dispatch({type: "GET_API_PRODUCTS_ERROR"})
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
    //& /////////////////////////////////////////

    return (
        <ProductContext.Provider value={{...state}}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider;