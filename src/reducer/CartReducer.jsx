import React from 'react'

export default function reducer(state, action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            const {id, color, quantity, product} = action.payload;
            console.log("reducer", id, color, quantity, product);


            const tempItem = state.cart.find((item) => item.id === id + color);
            if (tempItem) {
                const tempCart = state.cart.map((cartItem) => {
                    if (cartItem.id === id + color) {
                        let newQuantity = cartItem.quantity + quantity;
                        if (newQuantity > cartItem.max) {
                            newQuantity = cartItem.max;
                        }
                        return {...cartItem, quantity: newQuantity}
                    } else {
                        return cartItem;
                    }
                })
                return {...state, cart: tempCart}
            }

            const tempCartProduct = new Object({
                id: id + color,
                name: product.name,
                color,
                quantity,
                price: product.price,
                image: product.imageUrl,
                max: product.stock,
            });
            return {
                ...state,
                cart: [...state.cart, tempCartProduct]
            }
    default:
        return state;
    }
}
