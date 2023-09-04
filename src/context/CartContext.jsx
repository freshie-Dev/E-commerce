import React, {useState, useContext, useEffect, createContext, useReducer} from 'react'
import reducer from '../reducer/CartReducer';

const CartContext = createContext();

const localStorageCartData = () => {
    const cartData = localStorage.getItem('cart');
    if (cartData) {
        return JSON.parse(cartData);
    } else {
        return [];
    }
}

const initialState = {
    // cart: [],
    cart: localStorageCartData(),
    totalItems: "",
    totalPrice: "",
    shippingFee: 5,
    orderTotal: "",
}

const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    //& /////////////////////////////////////////
    const [quantity, setQuantity] = React.useState(1);
    const addQuantity = (value) => {
        setQuantity(value + 1);
    }
    const subtractQuantity = (value) => {
        if (value > 1) {
            setQuantity(value - 1);
        }
    }

  

    //! Add to cart function, has the data of 1 product from single product page
    const addToCart = (id, color, quantity, product ) => {
        dispatch({type: 'ADD_TO_CART', payload: {id, color, quantity, product}})
        setQuantity(1);
    }

    const increaseQuantity = (id) => {
        dispatch({type: 'INCREASE_QUANTITY', payload: id})
    }

    const decreaseQuantity = (id) =>  {
        dispatch({type: 'DECREASE_QUANTITY', payload: id})
    }

    const removeCartItem = (id) => {
        dispatch({type: 'REMOVE_CART_ITEM', payload: id})
    }

    const clearCart = () => {
        dispatch({type: 'CLEAR_CART'})
    }

    
        


        
    

    //! Adding cart to local storage
    useEffect(() => {
        dispatch ({type: 'CART_LOGO_VALUE'})
        dispatch({type: 'GET_CART_TOTAL_PRICE'})
        localStorage.setItem('cart', JSON.stringify(state.cart));
        console.log("useeffect ", state.cart)

    }, [state.cart])


    return (
        <CartContext.Provider value={{
            ...state,
            addToCart,
            removeCartItem,
            clearCart,
            quantity,
            addQuantity,
            subtractQuantity,
            increaseQuantity,
            decreaseQuantity,

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