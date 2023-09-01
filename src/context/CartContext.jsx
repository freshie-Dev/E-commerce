import React, {useState, useContext, useEffect, createContext, useReducer} from 'react'
import reducer from '../reducer/CartReducer';

const CartContext = createContext();

const initialState = {
    cart: [],
    totalItems: 0,
    totalAmount: 0,
    shippingFee: 534,
}

const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    //! Add to cart function, has the data of 1 product from single product page
    const addToCart = (id, color, quantity, product ) => {
        dispatch({type: 'ADD_TO_CART', payload: {id, color, quantity, product}})
    }

    return (
        <CartContext.Provider value={{
            ...state,
            addToCart,
        }}>
            {children}
        </CartContext.Provider>
    )
}

const cartContextProvider = () => {
    return useContext(CartContext)
}

export {CartProvider};
export default cartContextProvider;