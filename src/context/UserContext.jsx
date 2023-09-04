
import { createContext, useState, useContext } from "react";
import cartContextProvider from "./CartContext";
import axios from "axios";


const UserContext = createContext({});

const UserProvider = ({children}) => {
    const {clearCart} = cartContextProvider();
    const [loggedInUser, setLoggedInUser] = useState();
    const [userOrders, setUserOrders] = useState();

    //! Buy items - Cart.jsx
    const buyItems = async ()=> {
        const cartData = JSON.parse(localStorage.getItem('cart'));
        const config = {
            headers: {
               "auth-token" : localStorage.getItem('token')
            }
        }
        const order = cartData.map((product) => {
            return {
                productId: product._id,
                quantity: product.quantity,
                color: product.color,
                imageUrl: product.image,
                name: product.name,
                price: product.price,
                brand: product.brand,
            }
        });
        console.log(order);
        const response = await axios.post("http://localhost:3000/register/addtocart", order, config )
        const data = await response.data;
        console.log(data)
        clearCart();
        }
    //! Fetch Orders - Orders.jsx
    const fetchOrders = async ()=> {
        const config = {
            headers: {
                "auth-token": localStorage.getItem('token')
            }
        }
        const response = await axios.get("http://localhost:3000/register/userinfo", config)
        const data = await response.data;
        setUserOrders(data.orders)
        console.log(data)
    }

    
    return (
        <UserContext.Provider value={{
            loggedInUser,
            setLoggedInUser,
            buyItems,
            fetchOrders,
            userOrders,
        }}>
            {children}
        </UserContext.Provider>
    )
}

const UserContextProvider = () => {
    return ( useContext(UserContext) )
};

export {UserProvider};
export default UserContextProvider;