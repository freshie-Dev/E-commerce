
import { createContext, useState, useContext } from "react";
import cartContextProvider from "./CartContext";
import axios from "axios";


const UserContext = createContext({});

const UserProvider = ({children}) => {
    const url = "https://web-production-8eab.up.railway.app"
    const {clearCart} = cartContextProvider();
    const [loggedInUser, setLoggedInUser] = useState();
    const [userOrders, setUserOrders] = useState();
    const [userInfo, setUserInfo] = useState();

    const [editableInfo, setEditableInfo] = useState({
        name:"",
        password: "",
      })

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
        const response = await axios.post(`${url}/register/addtocart`, order, config )
        const data = await response.data;
        setUserOrders(data.orders)
        console.log("from buy items",userOrders)
        clearCart();
        }




    //! Fetch User Information - Orders.jsx
    const fetchInfo = async ()=> {
        const config = {
            headers: {
                "auth-token": localStorage.getItem('token')
            }
        }
        const response = await axios.get(`${url}/register/userinfo`, config)
        const data = await response.data;
        setInfo(data)
        
        localStorage.setItem('orders', data.orders)
        console.log(data)
    }
    function setInfo(data) {
        setUserInfo(data)
    }

    //! Sumbit rating values
    const submitReview = async (stars, reviews, productId)=> {
        // console.log(stars, reviews, productId)
        const review = {
            stars,
            reviews,
            productId
        }
        const config = {
            headers: {
                'auth-token': localStorage.getItem('token')
            }
        }
        const response = await axios.post(`${url}/register/review`, review, config);
        const data = await response.data;
        console.log("review is: ", data);
    }
    //! Fetch all revies of a product
    const fetchReviews = async (productId) => {
        const id = {
            productId 
        }
        const response = await axios.get(`${url}/products/fetchreviews`, id )
        const data = await response.data;
        // console.log("these are all reviews",data)
        console.log("this is the id of the reviewed item",id)
    }

    //! Fetch user type - Login.jsx
    
    return (
        <UserContext.Provider value={{
            loggedInUser,
            setLoggedInUser,
            buyItems,
            fetchInfo,
            userOrders,
            userInfo,
            editableInfo,
            setEditableInfo,
            submitReview,
            fetchReviews,
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